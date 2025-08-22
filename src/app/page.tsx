import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Shield,
  CreditCard,
  Users,
  Settings,
  Mail,
  Database,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            Ready to Deploy
          </Badge>
          <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Launch your SaaS <span className="text-primary">faster</span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed">
            A ready-to-deploy SaaS boilerplate with auth, billing,
            multi-tenancy, RBAC, and team collaboration. Skip months of
            development and focus on what makes your product unique.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={"/auth/signin"}>
              <Button size="lg" className="px-8 py-3 text-lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Everything you need to launch
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Built with modern technologies and best practices.
              Production-ready from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Authentication & Security */}
            <Card className="border-border transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Shield className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-xl">
                  Authentication & Security
                </CardTitle>
                <CardDescription>
                  Complete auth system with JWT, OAuth providers, and role-based
                  access control
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    JWT & Session Management
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    OAuth Integration
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Role-Based Access Control
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Stripe Billing */}
            <Card className="border-border transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <CreditCard className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Stripe-Based Billing</CardTitle>
                <CardDescription>
                  Complete subscription management with webhooks and invoice
                  handling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Subscription Plans
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Webhook Integration
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Invoice Management
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Multi-Tenancy */}
            <Card className="border-border transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Database className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Tenant Isolation</CardTitle>
                <CardDescription>
                  Complete multi-tenant architecture with data isolation and
                  security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Data Isolation
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Tenant Management
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Subdomain Support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Team Collaboration */}
            <Card className="border-border transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Team Collaboration</CardTitle>
                <CardDescription>
                  Invite team members, manage permissions, and collaborate
                  seamlessly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Team Invitations
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Permission Management
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Activity Tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Admin Dashboard */}
            <Card className="border-border transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Settings className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Admin Dashboard</CardTitle>
                <CardDescription>
                  Comprehensive admin panel with analytics, user management, and
                  system controls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    User Management
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Analytics Dashboard
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    System Monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Email Automation */}
            <Card className="border-border transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Email Automation</CardTitle>
                <CardDescription>
                  Transactional emails, notifications, and marketing automation
                  built-in
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Transactional Emails
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Email Templates
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Notification System
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Built with the T3 Stack
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-xl">
            Leveraging the most powerful and type-safe technologies for modern
            web development
          </p>

          <div className="flex justify-around gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 mb-3 flex h-16 w-16 items-center justify-center rounded-lg">
                <Zap className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-foreground font-semibold">Next.js</h3>
              <p className="text-muted-foreground text-sm">React Framework</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 mb-3 flex h-16 w-16 items-center justify-center rounded-lg">
                <Database className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-foreground font-semibold">Drizzle</h3>
              <p className="text-muted-foreground text-sm">Database ORM</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 mb-3 flex h-16 w-16 items-center justify-center rounded-lg">
                <Settings className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-foreground font-semibold">TypeScript</h3>
              <p className="text-muted-foreground text-sm">Type Safety</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Ready to launch your SaaS?
          </h2>
          <p className="text-muted-foreground mb-8 text-xl">
            Stop building the same features over and over. Start with our
            battle-tested boilerplate.
          </p>
          <Link href={"/auth/signin"}>
            <Button size="lg" className="px-8 py-3 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
