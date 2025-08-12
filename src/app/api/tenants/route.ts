import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { tenantsTable } from "@/server/db/schema";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, slug } = body;
  if (!name || !slug)
    return NextResponse.json(
      { error: "name & slug required" },
      { status: 400 },
    );
  const [created] = await db
    .insert(tenantsTable)
    .values({ name, slug })
    .returning();
  return NextResponse.json({ tenant: created });
}
