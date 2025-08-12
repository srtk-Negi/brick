// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSlugFromPath } from "./src/lib/middleware/tenant-middleware";

export function middleware(req: NextRequest) {
  // example: attach tenant slug to headers for server handlers
  const slug = getSlugFromPath(req.nextUrl.pathname);
  if (slug) req.headers.set("x-tenant-slug", slug);
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|static).*)"],
};
