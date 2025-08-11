import { getTenantsBySlug } from "@/lib/queries/tenants";

export default async function Tenants() {
  const tenants = getTenantsBySlug();
}
