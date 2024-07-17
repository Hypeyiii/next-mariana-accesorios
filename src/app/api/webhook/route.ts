import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { db } from "@vercel/postgres";
import Stripe from "stripe";
import { randomUUID } from "crypto";

const stripe = new Stripe(process.env.STRIPE_SECRET as string);

const endpointSecret = process.env.ENDPOINT_SECRET as string;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const headersList = headers();
  const sig = headersList.get("stripe-signature");
  const status = "pending";

  let event;

  try {
    if (!sig) {
      throw new Error("Signature is undefined");
    }

    event = stripe.webhooks.constructEvent(body, sig, endpointSecret as string);
  } catch (error) {
    console.error("Error verifying webhook signature:", error);
    return NextResponse.json({ error: error }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data
          .object as Stripe.Checkout.Session;

        const client = await db.connect();

        await client.query(
          `INSERT INTO orders (id, amount, status, userid) VALUES ($1, $2, $3, $4)`,
          [
            checkoutSessionCompleted.id,
            checkoutSessionCompleted.amount_total,
            status,
            checkoutSessionCompleted.metadata?.userid,
          ]
        );

        await client.query(
          `INSERT INTO order_details (id, order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4, $5)`,
          [
            randomUUID(),
            checkoutSessionCompleted.id,
            checkoutSessionCompleted.metadata?.productId,
            checkoutSessionCompleted.metadata?.quantity || 1,
            checkoutSessionCompleted.metadata?.price,
          ]
        );

        // TODO: Send a confirmation email here
        console.log("Order processed:", { checkoutSessionCompleted });
        break;

      default:
        console.warn(`Unhandled event type: ${event.type}`);
    }
  } catch (dbError) {
    console.error("Database operation failed:", dbError);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
  return new Response(null, { status: 200 });
}
