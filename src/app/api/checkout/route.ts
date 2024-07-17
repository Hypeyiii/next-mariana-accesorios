import { Product } from "@/lib/types";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET as string;
const successUrl = process.env.SUCCESS_URL || "http://localhost:3000/success";
const cancelUrl = process.env.PAGE_URL || "http://localhost:3000";

const stripe = new Stripe(stripeSecret);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cartProducts, userid } = body;

    if (!Array.isArray(cartProducts) || !userid) {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    const line_items = cartProducts.map((product: Product) => ({
      price_data: {
        currency: "mxn",
        product_data: {
          name: product.name,
          images: [product.image_url],
          description: product.description,
        },
        unit_amount: product.price * 100,
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      line_items,
      mode: "payment",
      metadata: {
        userid,
        productId: cartProducts[0]?.id || "",
        quantity: cartProducts[0]?.quantity || 1,
        price: cartProducts[0]?.price || 0,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe session creation error:", error);
    return NextResponse.json(
      { error: error || "Internal Server Error" },
      { status: 500 }
    );
  }
}
