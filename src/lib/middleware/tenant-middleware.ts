// src/lib/middleware/tenant-middleware.ts
// Example helper: extract slug param from pathname
export function getSlugFromPath(pathname: string) {
  // expected /{slug}/...
  const parts = pathname.split("/").filter(Boolean);
  return parts.length ? parts[0] : null;
}
