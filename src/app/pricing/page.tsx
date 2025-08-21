import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Zap, Users, Building2 } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            Simple Pricing
          </Badge>
          <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Choose your <span className="text-primary">perfect plan</span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-xl leading-relaxed">
            Start building your SaaS today with our flexible pricing options.
            All plans include our complete boilerplate with lifetime updates.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Starter Plan */}
            <Card className="border-border relative transition-shadow hover:shadow-lg">
              <CardHeader className="pb-8 text-center">
                <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Zap className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription className="text-base">
                  Perfect for solo developers and small projects
                </CardDescription>
                <div className="mt-4">
                  <span className="text-foreground text-4xl font-bold">
                    $99
                  </span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Get Started
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">
                      Complete T3 Stack boilerplate
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Authentication & RBAC</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Stripe billing integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Basic multi-tenancy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Email automation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">6 months of updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="text-muted-foreground h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      Advanced admin dashboard
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="text-muted-foreground h-5 w-5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      Priority support
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-primary relative transition-shadow hover:shadow-lg">
              <Badge className="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 transform">
                Most Popular
              </Badge>
              <CardHeader className="pt-8 pb-8 text-center">
                <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <CardDescription className="text-base">
                  Ideal for growing teams and serious projects
                </CardDescription>
                <div className="mt-4">
                  <span className="text-foreground text-4xl font-bold">
                    $199
                  </span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Get Started
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Everything in Starter</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Advanced admin dashboard</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Team collaboration features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Advanced tenant isolation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Analytics & monitoring</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">12 months of updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Priority email support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Custom deployment guide</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-border relative transition-shadow hover:shadow-lg">
              <CardHeader className="pb-8 text-center">
                <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Building2 className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription className="text-base">
                  For large teams and enterprise applications
                </CardDescription>
                <div className="mt-4">
                  <span className="text-foreground text-4xl font-bold">
                    $399
                  </span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Contact Sales
                </Button>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">White-label solution</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Advanced security features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Dedicated support channel</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Lifetime updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">1-on-1 onboarding call</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-sm">Custom feature requests</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-xl">
              Everything you need to know about our SaaS boilerplate
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">
                What's included in the boilerplate?
              </h3>
              <p className="text-muted-foreground">
                Complete T3 stack application with authentication, billing,
                multi-tenancy, admin dashboard, and all the features listed on
                our homepage.
              </p>
            </div>
            <div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">
                Do I get the source code?
              </h3>
              <p className="text-muted-foreground">
                Yes! You get full access to the complete source code with no
                restrictions. You can modify, customize, and deploy it however
                you want.
              </p>
            </div>
            <div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">
                Are there any recurring fees?
              </h3>
              <p className="text-muted-foreground">
                No recurring fees! It's a one-time purchase. You own the code
                forever and can use it for unlimited projects.
              </p>
            </div>
            <div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">
                What kind of support do you provide?
              </h3>
              <p className="text-muted-foreground">
                We provide email support for setup questions and documentation.
                Pro and Enterprise plans include priority support.
              </p>
            </div>
            <div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">
                Can I use this for client projects?
              </h3>
              <p className="text-muted-foreground">
                You can use the boilerplate for unlimited client projects and
                commercial applications.
              </p>
            </div>
            <div>
              <h3 className="text-foreground mb-2 text-lg font-semibold">
                How often do you release updates?
              </h3>
              <p className="text-muted-foreground">
                We release updates monthly with new features, security patches,
                and improvements. Update duration depends on your plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            Ready to start building?
          </h2>
          <p className="text-muted-foreground mb-8 text-xl">
            Join hundreds of developers who have launched their SaaS faster with
            our boilerplate.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="px-8 py-3 text-lg">
              Choose Your Plan
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent px-8 py-3 text-lg"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
