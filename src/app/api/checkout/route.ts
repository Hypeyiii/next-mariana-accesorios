import { Product } from "@/app/lib/types";
import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  (process.env.STRIPE_SECRET as string) ??
    "sk_test_51OkKmsBlx8QfT450krMQKATGt54DVjKKjr8FO6kUVUCGtMLJiOJrZ24WXkZjDLBZ5wBKNwWEntx9RmxAOTNepbaX00pk20U1TR"
);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { cartProducts, userid } = body;

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

  try {
    const session = await stripe.checkout.sessions.create({
      success_url:
        (process.env.SUCCES_URL as string) ?? `http://localhost:3000/success`,
      cancel_url: (process.env.PAGE_URL as string) ?? `http://localhost:3000`,
      line_items,
      mode: "payment",
      metadata: {
        userid: userid,
        productId: cartProducts[0].id,
        quantity: cartProducts[0].quantity,
        price: cartProducts[0].price,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe session creation error:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
