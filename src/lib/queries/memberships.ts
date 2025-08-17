import { db } from "@/server/db";
import { membershipsTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function getMembershipsByUserId(userId: string) {
  const membershipData = await db
    .select()
    .from(membershipsTable)
    .where(eq(membershipsTable.userId, userId));
  return membershipData;
}
