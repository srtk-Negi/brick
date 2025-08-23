import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { db } from "@/server/db";
import { tenantsTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function generateUniqueSlug(name: string): Promise<string> {
  const baseSlug = slugify(name);
  let slug = baseSlug;
  let counter = 1;

  while (true) {
    const existingTenant = await db.query.tenantsTable.findFirst({
      where: eq(tenantsTable.slug, slug),
    });

    if (!existingTenant) {
      return slug;
    }

    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}
