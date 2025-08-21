import { getTenantBySlug } from "@/lib/queries/tenants";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // TODO: Replace with real tenant fetch
  const tenant = await getTenantBySlug(slug);
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard — {tenant?.name ?? slug}</h1>
      <p className="mt-3 text-gray-600">
        TODO: Show metrics, usage, recent activity
      </p>
    </div>
  );
}
