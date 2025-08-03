"use client";

import { signIn } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DiscIcon as Discord, Github, Chrome } from "lucide-react";

export default function LoginPage() {
  const performSignIn = (provider: string) => {
    signIn(provider, { callbackUrl: "/dashboard" });
  };
  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
          <CardDescription>
            Choose your preferred provider to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button
            variant="outline"
            className="w-full bg-transparent"
            onClick={() => performSignIn("google")}
          >
            <Chrome className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
          <Button
            variant="outline"
            className="w-full bg-transparent"
            onClick={() => performSignIn("github")}
          >
            <Github className="mr-2 h-4 w-4" />
            Sign in with GitHub
          </Button>
          <Button
            variant="outline"
            className="w-full bg-transparent"
            onClick={() => performSignIn("discord")}
          >
            <Discord className="mr-2 h-4 w-4" />
            Sign in with Discord
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
