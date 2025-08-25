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
import { getPlansAction } from "@/server/actions/actions";
import Link from "next/link";

type Plan = {
  id: string;
  name: string;
  description: string | null;
  rate: number;
  period: string | null;
  features: string[];
};

const FAQS = [
  {
    question: "What's included in the boilerplate?",
    answer:
      "Complete T3 stack application with authentication, billing,multi-tenancy, admin dashboard, and all the features listed on our homepage.",
  },
  {
    question: "Do I get the source code?",
    answer:
      "Yes! You get full access to the complete source code with no restrictions. You can modify, customize, and deploy it however you want.",
  },
  {
    question: "Are there any recurring fees?",
    answer:
      "No recurring fees! It's a one-time purchase. You own the code forever and can use it for unlimited projects.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide email support for setup questions and documentation.Pro and Enterprise plans include priority support.",
  },
  {
    question: "Can I use this for client projects?",
    answer:
      "You can use the boilerplate for unlimited client projects and commercial applications.",
  },
  {
    question: "How often do you release updates?",
    answer:
      "We release updates monthly with new features, security patches,and improvements. Update duration depends on your plan.",
  },
];

const PlanCard = ({ plan }: { plan: Plan }) => {
  return (
    <Card className="border-border relative transition-shadow hover:shadow-lg">
      <CardHeader className="pb-8 text-center">
        <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
          <Zap className="text-primary h-6 w-6" />
        </div>
        <CardTitle className="text-2xl">{plan.name}</CardTitle>
        <CardDescription className="text-base">
          {plan.description}
        </CardDescription>
        <div className="mt-4">
          <span className="text-foreground text-4xl font-bold">
            ${plan.rate}
          </span>
          <span className="text-muted-foreground ml-2">{plan.period}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Link href={"/tenants"} className="mb-2">
          <Button className="w-full" size="lg">
            Get Started
          </Button>
        </Link>
        <ul className="mt-5 space-y-3">
          {plan.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-sm">{feature}</span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default async function PricingPage() {
  const plans = await getPlansAction();

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
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
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
            {FAQS.map((faq, index) => {
              return (
                <div key={index}>
                  <h3 className="text-foreground mb-2 text-lg font-semibold">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              );
            })}
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
            <Link href={"/tenants"}>
              <Button size="lg" className="px-8 py-3 text-lg">
                Choose Your Plan
              </Button>
            </Link>
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
