import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  Settings,
  MoreVertical,
  Plus,
  Crown,
} from "lucide-react";
import { getTenants } from "@/lib/queries/tenants";
import Link from "next/link";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function TenantsPage() {
  const session = await auth();
  if (!session) {
    redirect("/auth/signin");
  }
  const userId = session.user.id;
  const tenants = await getTenants(userId);

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case "Enterprise":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "Pro":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Starter":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "owner":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "admin":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "editor":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="mt-10">
      {/* Header Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-foreground mb-2 text-3xl font-bold sm:text-4xl">
                Your Teams & Workspaces
              </h1>
              <p className="text-muted-foreground text-lg">
                Manage and switch between your tenant spaces and team
                collaborations
              </p>
            </div>
            <Link href={"/tenants/create"}>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create New Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Building2 className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-foreground text-2xl font-bold">
                      {tenants.length}
                    </p>
                    <p className="text-muted-foreground text-sm">Total Teams</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Crown className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-foreground text-2xl font-bold">
                      {tenants.filter((t) => t.role === "owner").length}
                    </p>
                    <p className="text-muted-foreground text-sm">Teams Owned</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Users className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-foreground text-2xl font-bold">
                      {tenants.reduce((sum, t) => sum + t.members, 0)}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Total Members Across Teams
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tenants Grid */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tenants.map((tenant) => (
              <Card
                key={tenant.id}
                className="border-border cursor-pointer transition-shadow hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <CardTitle className="text-lg">{tenant.name}</CardTitle>
                        <div className="mt-1 flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className={getRoleColor(tenant.role)}
                          >
                            {tenant.role}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={getPlanColor(tenant.plan)}
                          >
                            {tenant.plan}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Members</span>
                      <div className="flex items-center gap-1">
                        <Users className="text-muted-foreground h-4 w-4" />
                        <span className="font-medium">{tenant.members}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-2">
                    <Link href={`/tenants/${tenant.slug}`}>
                      <Button className="flex-1" size="sm">
                        Switch To
                      </Button>
                    </Link>
                    <Link href={`/tenants/${tenant.slug}/settings`}>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State for when no tenants exist */}
      {tenants.length === 0 && (
        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <div className="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg">
              <Building2 className="text-primary h-8 w-8" />
            </div>
            <h3 className="text-foreground mb-2 text-xl font-semibold">
              No teams yet
            </h3>
            <p className="text-muted-foreground mb-6">
              Create your first team or wait for an invitation to join an
              existing one.
            </p>
            <Link href={"/tenants/create"}>
              <Button className="flex">
                <Plus className="h-4 w-4" />
                Create Your First Team
              </Button>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
