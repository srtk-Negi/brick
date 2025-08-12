import { type ReactNode } from "react";

export default function TenantLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: string };
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b bg-gray-50 p-4">
        Tenant: {params.slug} {/* TODO: show tenant name */}
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
