import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { db } from "@vercel/postgres";
import Stripe from "stripe";
import { randomUUID } from "crypto";

const stripe = new Stripe(
  (process.env.STRIPE_SECRET as string) ??
    "sk_test_51OkKmsBlx8QfT450krMQKATGt54DVjKKjr8FO6kUVUCGtMLJiOJrZ24WXkZjDLBZ5wBKNwWEntx9RmxAOTNepbaX00pk20U1TR"
);

const endpointSecret = process.env.ENDPOINT_SECRET as string;

export async function POST(request: NextRequest) {
  const client = await db.connect();
  const body = await request.text();
  const headersList = headers();
  const sig = headersList.get("stripe-signature");
  const status = "pending";

  let event;

  try {
    if (sig === undefined) {
      throw new Error("Signature is undefined");
    }
    event = stripe.webhooks.constructEvent(
      body,
      sig as string,
      endpointSecret as string
    );
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  }

  switch (event?.type as string) {
    case "checkout.session.completed":
      const checkoutSessionCompleted = event?.data
        .object as Stripe.Checkout.Session;

      await client.query(
        `INSERT INTO orders (id, amount, status, userid) VALUES ($1, $2, $3, $4)`,
        [
          checkoutSessionCompleted?.id,
          checkoutSessionCompleted?.amount_total,
          status,
          checkoutSessionCompleted?.metadata?.userid,
        ]
      );

      await client.query(
        `INSERT INTO order_details (id, order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4, $5)`,
        [
          randomUUID(),
          checkoutSessionCompleted?.id,
          checkoutSessionCompleted?.metadata?.productId,
          checkoutSessionCompleted?.metadata?.quantity || 1,
          checkoutSessionCompleted?.metadata?.price,
        ]
      );

      // enviar un correo

      console.log({ checkoutSessionCompleted });
      break;
    default:
      console.log(`Evento no manejado: ${event?.type}`);
  }

  return new Response(null, { status: 200 });
}
