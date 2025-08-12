// src/lib/db/subscriptions.ts
import { db } from "@/db";
import { subscriptions } from "@/db/schema/subscriptions";

export async function getSubscriptionForTenant(tenantId: string) {
  return db
    .select()
    .from(subscriptions)
    .where(subscriptions.tenantId.eq(tenantId))
    .limit(1)
    .then((r) => r[0] ?? null);
}
