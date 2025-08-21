import { auth, signIn } from "@/server/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Chrome } from "lucide-react";

export default async function SignIn({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string; error?: string }>;
}) {
  const session = await auth();
  const params = await searchParams;

  if (session) {
    redirect(params.callbackUrl || "/tenants");
  }

  async function handleGoogleSignIn() {
    "use server";
    try {
      await signIn("google", {
        redirectTo: params.callbackUrl || "/tenants",
      });
    } catch (error) {
      if (error instanceof AuthError) {
        redirect(`/auth/signin?error=${error.type}`);
      }
      throw error;
    }
  }

  async function handleGitHubSignIn() {
    "use server";
    try {
      await signIn("github", {
        redirectTo: params.callbackUrl || "/tenants",
      });
    } catch (error) {
      if (error instanceof AuthError) {
        redirect(`/auth/signin?error=${error.type}`);
      }
      throw error;
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        {params.error && (
          <div className="rounded-md border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-600">
              {params.error === "OAuthSignin" && "Error with OAuth sign-in."}
              {params.error === "OAuthCallback" && "Error in OAuth callback."}
              {params.error === "OAuthCreateAccount" &&
                "Could not create OAuth account."}
              {params.error === "EmailCreateAccount" &&
                "Could not create email account."}
              {params.error === "Callback" && "Error in callback."}
              {params.error === "OAuthAccountNotLinked" &&
                "OAuth account not linked."}
              {params.error === "EmailSignin" &&
                "Check your email for a sign-in link."}
              {params.error === "CredentialsSignin" && "Invalid credentials."}
              {params.error === "SessionRequired" &&
                "Please sign in to access this page."}
            </p>
          </div>
        )}

        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
            <CardDescription>
              Choose your preferred provider to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <form action={handleGoogleSignIn}>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                type="submit"
              >
                <Chrome className="mr-2 h-4 w-4" />
                Sign in with Google
              </Button>
            </form>
            <form action={handleGitHubSignIn}>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                type="submit"
              >
                <Github className="mr-2 h-4 w-4" />
                Sign in with GitHub
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
