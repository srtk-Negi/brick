"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Building2, ArrowLeft, Check, Users, Crown, Zap } from "lucide-react";
import Link from "next/link";

export default function CreateTeamPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "Email support",
        "5GB storage",
      ],
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      icon: Users,
    },
    {
      id: "pro",
      name: "Pro",
      price: "$79",
      period: "per month",
      description: "Advanced features for growing teams",
      features: [
        "Up to 25 team members",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "Custom integrations",
      ],
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      icon: Zap,
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "Full-scale solution for large organizations",
      features: [
        "Unlimited team members",
        "Custom analytics",
        "24/7 phone support",
        "Unlimited storage",
        "Advanced security",
        "Custom contracts",
      ],
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      icon: Crown,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Handle form submission here
    console.log("[v0] Creating team:", {
      teamName,
      teamDescription,
      selectedPlan,
    });

    setIsLoading(false);
    // Redirect to new team or show success message
  };

  return (
    <div className="mt-10">
      {/* Header Section */}
      <section className="border-border border-b px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <Link href="/tenants">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Teams
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Building2 className="text-primary h-6 w-6" />
            </div>
            <div>
              <h1 className="text-foreground text-3xl font-bold">
                Create New Team
              </h1>
              <p className="text-muted-foreground">
                Set up a new workspace for your team collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Team Details */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Team Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="teamName">Team Name *</Label>
                <Input
                  id="teamName"
                  placeholder="Enter your team name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamDescription">Description</Label>
                <Textarea
                  id="teamDescription"
                  placeholder="Describe what your team does (optional)"
                  value={teamDescription}
                  onChange={(e) => setTeamDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Plan Selection */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Choose Your Plan</CardTitle>
              <p className="text-muted-foreground text-sm">
                Select the plan that best fits your team's needs. You can
                upgrade or downgrade anytime.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {plans.map((plan) => {
                  const Icon = plan.icon;
                  return (
                    <div
                      key={plan.id}
                      className={`relative cursor-pointer rounded-lg border p-6 transition-all ${
                        selectedPlan === plan.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      } ${plan.popular ? "ring-primary/20 ring-2" : ""}`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.popular && (
                        <Badge className="bg-primary absolute -top-2 left-1/2 -translate-x-1/2 transform">
                          Most Popular
                        </Badge>
                      )}

                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="text-primary h-5 w-5" />
                          <h3 className="font-semibold">{plan.name}</h3>
                        </div>
                        {selectedPlan === plan.id && (
                          <div className="bg-primary flex h-5 w-5 items-center justify-center rounded-full">
                            <Check className="text-primary-foreground h-3 w-3" />
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold">
                            {plan.price}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {plan.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-1 text-sm">
                          {plan.description}
                        </p>
                      </div>

                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Check className="h-4 w-4 flex-shrink-0 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Submit Section */}
          <div className="flex flex-col justify-end gap-4 sm:flex-row">
            <Link href="/tenants">
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Link>
            <Button
              type="submit"
              disabled={!teamName || !selectedPlan || isLoading}
              className="flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Creating Team...
                </>
              ) : (
                <>
                  <Building2 className="h-4 w-4" />
                  Create Team
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
