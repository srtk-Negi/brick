// src/lib/db/memberships.ts
import { db } from "@/db";
import { memberships } from "@/db/schema/memberships";

export async function getMembershipsByUserId(userId: string) {
  return db.select().from(memberships).where(memberships.userId.eq(userId));
}
