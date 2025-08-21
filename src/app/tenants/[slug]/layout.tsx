import type React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, Shield, Settings, Users, Bell } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock function to get tenant data - replace with your actual data fetching
async function getTenant(slug: string) {
  // This would typically fetch from your database
  const mockTenants = {
    "acme-corp": {
      name: "Acme Corp",
      plan: "Pro",
      role: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    "tech-startup": {
      name: "Tech Startup",
      plan: "Enterprise",
      role: "Owner",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  };

  return mockTenants[slug as keyof typeof mockTenants] || null;
}

export default async function TenantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tenant = await getTenant(slug);

  if (!tenant) {
    notFound();
  }

  const navigation = [
    {
      name: "Dashboard",
      href: `/tenants/${slug}`,
      icon: LayoutDashboard,
    },
    {
      name: "Admin",
      href: `/tenants/${slug}/admin`,
      icon: Shield,
    },
    {
      name: "Settings",
      href: `/tenants/${slug}/settings`,
      icon: Settings,
    },
  ];

  return (
    <div className="mt-20">
      {/* Tenant Header */}
      <header className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Tenant Info */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={tenant.avatar || "/placeholder.svg"}
                  alt={tenant.name}
                  className="h-8 w-8 rounded-lg"
                />
                <div>
                  <h1 className="text-foreground font-semibold">
                    {tenant.name}
                  </h1>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {tenant.plan}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {tenant.role}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Users className="mr-2 h-4 w-4" />
                Invite
              </Button>
              <Link href="/tenants">
                <Button variant="outline" size="sm">
                  Switch Tenant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-border bg-muted/30 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground hover:border-primary/50 flex items-center gap-2 border-b-2 border-transparent py-4 text-sm font-medium transition-colors"
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
