import { tenantsTable } from "@/server/db/schema";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import { type Tenant } from "@/lib/validators/tenants";

export async function createTenant(tenant: Tenant) {
  const response = await db
    .insert(tenantsTable)
    .values({
      id: tenant.id,
      name: tenant.name,
      slug: tenant.slug,
      plan: tenant.plan,
    })
    .returning();

  return response[0];
}

export async function getTenantBySlug(slug: string) {
  const tenant = await db
    .select()
    .from(tenantsTable)
    .where(eq(tenantsTable.slug, slug));

  return tenant[0] ?? null;
}
