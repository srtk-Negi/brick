import { z } from "zod";
import { PLANS } from "@/server/db/schema";

export const tenantSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3).max(255),
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/)
    .max(255),
  plan: z.enum(PLANS),
});

export type Tenant = z.infer<typeof tenantSchema>;
