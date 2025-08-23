"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { getPlansAction, createTenantAction } from "@/server/actions/actions";
import { type Plan } from "@/lib/validators/validationSchemas";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CreateTeamPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<Plan>();
  const [teamName, setTeamName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const runAction = async () => {
      try {
        const result = await getPlansAction();
        setPlans(result);
      } catch {
        console.log("error");
      }
    };
    runAction();
  }, []);

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
        <form
          action={async (formData) => {
            setIsLoading(true);
            try {
              const created = await createTenantAction(formData);
              if (created?.error) {
                toast.error("Could not create tenant", {
                  position: "top-center",
                  richColors: true,
                  description: "Details could not be validated",
                });
              } else {
                router.push("/tenants");
              }
            } finally {
              setIsLoading(false);
            }
          }}
          className="space-y-8"
        >
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
                  id="name"
                  name="name"
                  placeholder="Enter your team name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Plan Selection */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Choose Your Plan</CardTitle>
              <p className="text-muted-foreground text-sm">
                Select the plan that best fits your team&apos;s needs. You can
                upgrade or downgrade anytime.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {plans?.map((plan) => {
                  const isSelected = selectedPlan?.id === plan.id;
                  return (
                    <div
                      key={plan.id}
                      className={`relative cursor-pointer rounded-lg border p-6 transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedPlan(plan)}
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="font-semibold">{plan.name}</h3>
                        {isSelected && (
                          <div className="bg-primary flex h-5 w-5 items-center justify-center rounded-full">
                            <Check className="text-primary-foreground h-3 w-3" />
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold">
                            ${plan.rate}
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

          {/* Hidden field to send selected plan */}
          {selectedPlan && (
            <input type="hidden" name="planId" value={selectedPlan.id} />
          )}

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
