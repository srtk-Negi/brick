// src/app/(dashboard)/[slug]/dashboard/page.tsx
import { getTenantBySlug } from "@/lib/queries/tenants";

export default async function DashboardPage({
  params,
}: {
  params: { slug: string };
}) {
  // TODO: Replace with real tenant fetch
  const tenant = await getTenantBySlug(params.slug).catch(() => null);
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Dashboard — {tenant?.name ?? params.slug}
      </h1>
      <p className="mt-3 text-gray-600">
        TODO: Show metrics, usage, recent activity
      </p>
    </div>
  );
}
