// src/app/api/billing/webhook/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // TODO: Validate Stripe signature and handle events
  return NextResponse.json({ received: true });
}
