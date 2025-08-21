import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Users,
  Shield,
  Mail,
  MoreHorizontal,
  Search,
  Filter,
  UserPlus,
  Crown,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

export default async function AdminPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Mock data - replace with actual data fetching
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@acme.com",
      role: "Owner",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      joinedAt: "2024-01-15",
      lastActive: "2 minutes ago",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah@acme.com",
      role: "Admin",
      status: "active",
      avatar: "/placeholder.svg?height=40&width=40",
      joinedAt: "2024-02-01",
      lastActive: "1 hour ago",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@acme.com",
      role: "Member",
      status: "pending",
      avatar: "/placeholder.svg?height=40&width=40",
      joinedAt: "2024-03-10",
      lastActive: "Never",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@acme.com",
      role: "Member",
      status: "inactive",
      avatar: "/placeholder.svg?height=40&width=40",
      joinedAt: "2024-01-20",
      lastActive: "2 weeks ago",
    },
  ];

  const pendingInvitations = [
    {
      id: 1,
      email: "alex@example.com",
      role: "Member",
      invitedBy: "John Doe",
      invitedAt: "2024-03-15",
    },
    {
      id: 2,
      email: "lisa@example.com",
      role: "Admin",
      invitedBy: "Sarah Wilson",
      invitedAt: "2024-03-14",
    },
  ];

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Owner":
        return <Crown className="h-4 w-4 text-yellow-500" />;
      case "Admin":
        return <Shield className="h-4 w-4 text-blue-500" />;
      default:
        return <Users className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge
            variant="default"
            className="border-green-200 bg-green-100 text-green-800"
          >
            Active
          </Badge>
        );
      case "pending":
        return (
          <Badge
            variant="secondary"
            className="border-yellow-200 bg-yellow-100 text-yellow-800"
          >
            Pending
          </Badge>
        );
      case "inactive":
        return (
          <Badge
            variant="outline"
            className="border-gray-200 bg-gray-100 text-gray-600"
          >
            Inactive
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground text-3xl font-bold">
            Team Administration
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage team members, roles, and permissions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              Total Members
            </CardTitle>
            <Users className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground text-2xl font-bold">4</div>
            <p className="text-muted-foreground text-xs">+1 this month</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              Active Users
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground text-2xl font-bold">2</div>
            <p className="text-muted-foreground text-xs">50% active rate</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              Pending Invites
            </CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground text-2xl font-bold">2</div>
            <p className="text-muted-foreground text-xs">Awaiting response</p>
          </CardContent>
        </Card>

        <Card className="border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              Admins
            </CardTitle>
            <Shield className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground text-2xl font-bold">2</div>
            <p className="text-muted-foreground text-xs">Including owner</p>
          </CardContent>
        </Card>
      </div>

      {/* Team Members */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Team Members</CardTitle>
              <CardDescription>
                Manage your team members and their permissions
              </CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                <Input placeholder="Search members..." className="w-64 pl-10" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="border-border hover:bg-muted/50 flex items-center justify-between rounded-lg border p-4 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-foreground font-medium">
                        {member.name}
                      </h3>
                      {getRoleIcon(member.role)}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {member.email}
                    </p>
                    <div className="mt-1 flex items-center gap-4">
                      <span className="text-muted-foreground text-xs">
                        Joined {new Date(member.joinedAt).toLocaleDateString()}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        Last active: {member.lastActive}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-xs">
                    {member.role}
                  </Badge>
                  {getStatusBadge(member.status)}
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pending Invitations */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-xl">Pending Invitations</CardTitle>
          <CardDescription>Invitations waiting for acceptance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingInvitations.map((invitation) => (
              <div
                key={invitation.id}
                className="border-border flex items-center justify-between rounded-lg border bg-yellow-50/50 p-4 dark:bg-yellow-900/10"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                    <Mail className="text-muted-foreground h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">
                      {invitation.email}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Invited by {invitation.invitedBy} on{" "}
                      {new Date(invitation.invitedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-xs">
                    {invitation.role}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="border-yellow-200 bg-yellow-100 text-yellow-800"
                  >
                    Pending
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <XCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
