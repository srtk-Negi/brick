import { RouteGuard } from "@/components/RouteGuard";

export default function TenantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RouteGuard>{children}</RouteGuard>;
}
