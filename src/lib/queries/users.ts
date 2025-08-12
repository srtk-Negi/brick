// src/lib/db/users.ts
import { db } from "@/db";
import { users } from "@/db/schema/users";

export async function findUserByEmail(email: string) {
  return db
    .select()
    .from(users)
    .where(users.email.eq(email))
    .limit(1)
    .then((r) => r[0] ?? null);
}
