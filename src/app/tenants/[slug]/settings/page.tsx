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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Building,
  CreditCard,
  Bell,
  Shield,
  Trash2,
  Upload,
  Save,
  AlertTriangle,
  Lock,
} from "lucide-react";

export default async function SettingsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-foreground text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your tenant configuration and preferences
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card className="border-border">
            <CardContent className="p-4">
              <nav className="space-y-2">
                <a
                  href="#general"
                  className="bg-primary/10 text-primary flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium"
                >
                  <Building className="h-4 w-4" />
                  General
                </a>
                <a
                  href="#billing"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                >
                  <CreditCard className="h-4 w-4" />
                  Billing
                </a>
                <a
                  href="#notifications"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                >
                  <Bell className="h-4 w-4" />
                  Notifications
                </a>
                <a
                  href="#security"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                >
                  <Shield className="h-4 w-4" />
                  Security
                </a>
                <a
                  href="#danger"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/50 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                >
                  <AlertTriangle className="h-4 w-4" />
                  Danger Zone
                </a>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="space-y-8 lg:col-span-3">
          {/* General Settings */}
          <Card id="general" className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                General Settings
              </CardTitle>
              <CardDescription>
                Basic information about your organization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="bg-muted flex h-20 w-20 items-center justify-center rounded-lg">
                  <Building className="text-muted-foreground h-8 w-8" />
                </div>
                <div className="flex-1">
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Logo
                  </Button>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Recommended: Square image, at least 200x200px
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organization Name</Label>
                  <Input id="org-name" defaultValue="Acme Corp" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-slug">Organization Slug</Label>
                  <Input id="org-slug" defaultValue="acme-corp" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="org-description">Description</Label>
                <Textarea
                  id="org-description"
                  placeholder="Tell us about your organization..."
                  defaultValue="A leading technology company focused on innovation and excellence."
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="org-website">Website</Label>
                  <Input id="org-website" defaultValue="https://acme.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-timezone">Timezone</Label>
                  <Input
                    id="org-timezone"
                    defaultValue="UTC-8 (Pacific Time)"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Billing Settings */}
          <Card id="billing" className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Billing & Subscription
              </CardTitle>
              <CardDescription>
                Manage your subscription and billing information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-border flex items-center justify-between rounded-lg border p-4">
                <div>
                  <h3 className="text-foreground font-medium">Current Plan</h3>
                  <p className="text-muted-foreground text-sm">
                    You're currently on the Pro plan
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="default">Pro Plan</Badge>
                  <Button variant="outline" size="sm">
                    Upgrade
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Next Billing Date</Label>
                  <p className="text-foreground text-sm">April 15, 2024</p>
                </div>
                <div className="space-y-2">
                  <Label>Monthly Cost</Label>
                  <p className="text-foreground text-sm">$49.00</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-foreground font-medium">Payment Method</h3>
                <div className="border-border flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded">
                      <CreditCard className="text-primary h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-medium">
                        •••• •••• •••• 4242
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Expires 12/25
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card id="notifications" className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notifications">
                      Email Notifications
                    </Label>
                    <p className="text-muted-foreground text-sm">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="team-updates">Team Updates</Label>
                    <p className="text-muted-foreground text-sm">
                      Get notified about team member activities
                    </p>
                  </div>
                  <Switch id="team-updates" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="billing-alerts">Billing Alerts</Label>
                    <p className="text-muted-foreground text-sm">
                      Important billing and payment notifications
                    </p>
                  </div>
                  <Switch id="billing-alerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="security-alerts">Security Alerts</Label>
                    <p className="text-muted-foreground text-sm">
                      Login attempts and security-related notifications
                    </p>
                  </div>
                  <Switch id="security-alerts" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="marketing-emails">Marketing Emails</Label>
                    <p className="text-muted-foreground text-sm">
                      Product updates and promotional content
                    </p>
                  </div>
                  <Switch id="marketing-emails" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card id="security" className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security & Privacy
              </CardTitle>
              <CardDescription>
                Manage security settings and access controls
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="two-factor">
                      Two-Factor Authentication
                    </Label>
                    <p className="text-muted-foreground text-sm">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Lock className="mr-2 h-4 w-4" />
                    Enable 2FA
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="session-timeout">Session Timeout</Label>
                    <p className="text-muted-foreground text-sm">
                      Automatically log out inactive users
                    </p>
                  </div>
                  <Switch id="session-timeout" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="ip-restrictions">IP Restrictions</Label>
                    <p className="text-muted-foreground text-sm">
                      Limit access to specific IP addresses
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-foreground font-medium">Data & Privacy</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="data-export">Data Export</Label>
                    <p className="text-muted-foreground text-sm">
                      Download all your organization data
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Export Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card id="danger" className="border-destructive/50 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-destructive flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Danger Zone
              </CardTitle>
              <CardDescription>
                Irreversible and destructive actions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-destructive/20 bg-background flex items-center justify-between rounded-lg border p-4">
                <div>
                  <h3 className="text-foreground font-medium">
                    Delete Organization
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Permanently delete this organization and all associated data
                  </p>
                </div>
                <Button variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
