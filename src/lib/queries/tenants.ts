import { tenantsTable } from "@/server/db/schema";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";

export async function getTenantsBySlug(slug: string) {
  const tenants = await db
    .select()
    .from(tenantsTable)
    .where(eq(tenantsTable.slug, slug));

  return tenants;
}
