import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Plus,
  MoreHorizontal,
  Calendar,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default async function TenantDashboard({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Mock data - replace with actual data fetching
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12%",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Monthly Revenue",
      value: "$45,231",
      change: "+8%",
      changeType: "positive" as const,
      icon: DollarSign,
    },
    {
      title: "Active Sessions",
      value: "1,234",
      change: "-2%",
      changeType: "negative" as const,
      icon: Activity,
    },
    {
      title: "Growth Rate",
      value: "23.5%",
      change: "+5%",
      changeType: "positive" as const,
      icon: TrendingUp,
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "John Doe",
      action: "Created new project",
      time: "2 minutes ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      user: "Sarah Wilson",
      action: "Updated team settings",
      time: "15 minutes ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "Invited new team member",
      time: "1 hour ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      user: "Emily Davis",
      action: "Completed onboarding",
      time: "2 hours ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your team.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Last 30 days
          </Button>
          <Link href={"/tenants/create"}>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-foreground text-2xl font-bold">
                {stat.value}
              </div>
              <div className="mt-1 flex items-center gap-1">
                <Badge
                  variant={
                    stat.changeType === "positive" ? "default" : "destructive"
                  }
                  className="text-xs"
                >
                  {stat.change}
                </Badge>
                <span className="text-muted-foreground text-xs">
                  from last month
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <Card className="border-border lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
                <CardDescription>
                  Latest actions from your team members
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="hover:bg-muted/50 flex items-center gap-4 rounded-lg p-3 transition-colors"
                >
                  <img
                    src={activity.avatar || "/placeholder.svg"}
                    alt={activity.user}
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-foreground text-sm font-medium">
                      {activity.user}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {activity.action}
                    </p>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-1 text-xs">
                    <Clock className="h-3 w-3" />
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
            >
              <Users className="mr-2 h-4 w-4" />
              Invite Team Member
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Project
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
            >
              <Activity className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Billing Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
