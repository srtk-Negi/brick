"use server";

import { db } from "@/server/db";
import { plansTable } from "@/server/db/schema";
import { tenantSchema } from "@/lib/validators/validationSchemas";
import { auth } from "@/server/auth";
import { insertTenant } from "@/lib/queries/tenants";
import { insertMembership } from "@/lib/queries/memberships";

export const getPlansAction = async () => {
  try {
    const plans = await db.select().from(plansTable).orderBy(plansTable.rate);
    return plans;
  } catch {
    throw new Error("Could not get plans!");
  }
};

export const createTenantAction = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  const result = tenantSchema.omit({ id: true }).safeParse(data);

  if (!result.success) {
    return {
      success: false,
      error: result.error.flatten().fieldErrors,
    };
  }

  const parsedData = result.data;

  const insertTenantResult = await insertTenant(parsedData);
  if (insertTenantResult.success) {
    const session = await auth();
    const userId = session?.user.id;
    const tenantId = insertTenantResult.data?.id;
    if (!userId || !tenantId) {
      return;
    }
    const now = new Date();
    await insertMembership({
      userId: userId,
      tenantId: tenantId,
      role: "owner",
      invitedAt: now,
      acceptedAt: now,
    });
  }
};
