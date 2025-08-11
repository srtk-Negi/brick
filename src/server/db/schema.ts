import { relations, sql } from "drizzle-orm";
import { index, pgTableCreator, primaryKey } from "drizzle-orm/pg-core";
import { type AdapterAccount } from "next-auth/adapters";
import { env } from "@/env";
import { pgEnum } from "drizzle-orm/pg-core";

export const createTableFunction = pgTableCreator(
  (name) => `${env.APP_NAME}_${name}`,
);

// ------------------ CONSTS ------------------
export const APP_USER_ROLES = ["super_admin", "admin", "basic"] as const;
export const TENANT_USER_ROLES = ["admin", "editor", "viewer"] as const;
export const PLANS = ["free", "pro", "enterprise"] as const;
export const PLAN_STATUS = ["active", "canceled", "trial", "past_due"] as const;

// ------------------ TYPES ------------------
export type AppUserRoles = (typeof APP_USER_ROLES)[number];
export type TenantUserRoles = (typeof TENANT_USER_ROLES)[number];
export type Plan = (typeof PLANS)[number];
export type PlanStatus = (typeof PLAN_STATUS)[number];

// ------------------ POSTGRES ENUMS ------------------
/**
 * user's role on the application level. For the SaaS dev team.
 */
export const appUserRoles = pgEnum("app_user_roles", APP_USER_ROLES);

/**
 * user's role in a tenant/workspace/org.
 */
export const tenantUserRoles = pgEnum("tenant_user_roles", TENANT_USER_ROLES);
export const plans = pgEnum("plans", PLANS);
export const planStatus = pgEnum("plan_status", PLAN_STATUS);

// ------------------ USERS ------------------
export const usersTable = createTableFunction("user", (d) => ({
  id: d
    .varchar({ length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: d.varchar({ length: 255 }),
  email: d.varchar({ length: 255 }).notNull(),
  emailVerified: d
    .timestamp({
      mode: "date",
      withTimezone: true,
    })
    .default(sql`CURRENT_TIMESTAMP`),
  image: d.varchar({ length: 255 }),
  role: appUserRoles().notNull().default("basic"),
}));

// ------------------ AUTH ------------------
export const accountsTable = createTableFunction(
  "account",
  (d) => ({
    userId: d
      .varchar({ length: 255 })
      .notNull()
      .references(() => usersTable.id),
    type: d.varchar({ length: 255 }).$type<AdapterAccount["type"]>().notNull(),
    provider: d.varchar({ length: 255 }).notNull(),
    providerAccountId: d.varchar({ length: 255 }).notNull(),
    refresh_token: d.text(),
    access_token: d.text(),
    expires_at: d.integer(),
    token_type: d.varchar({ length: 255 }),
    scope: d.varchar({ length: 255 }),
    id_token: d.text(),
    session_state: d.varchar({ length: 255 }),
  }),
  (table) => [
    primaryKey({ columns: [table.provider, table.providerAccountId] }),
    index("account_user_id_idx").on(table.userId),
  ],
);

export const sessionsTable = createTableFunction(
  "session",
  (d) => ({
    sessionToken: d.varchar({ length: 255 }).notNull().primaryKey(),
    userId: d
      .varchar({ length: 255 })
      .notNull()
      .references(() => usersTable.id),
    expires: d.timestamp({ mode: "date", withTimezone: true }).notNull(),
  }),
  (table) => [index("t_user_id_idx").on(table.userId)],
);

export const verificationTokensTable = createTableFunction(
  "verification_token",
  (d) => ({
    identifier: d.varchar({ length: 255 }).notNull(),
    token: d.varchar({ length: 255 }).notNull(),
    expires: d.timestamp({ mode: "date", withTimezone: true }).notNull(),
  }),
  (table) => [primaryKey({ columns: [table.identifier, table.token] })],
);

// ------------------ RBAC ------------------
export const rolesTable = createTableFunction("roles", (d) => ({
  id: d.text().primaryKey(),
  name: d.text().notNull(),
  description: d.text(),
}));

export const permissionsTable = createTableFunction("permissions", (d) => ({
  id: d.text().primaryKey(),
  description: d.text(),
}));

export const rolePermissionsTable = createTableFunction(
  "role_permissions",
  (d) => ({
    roleId: d.text().references(() => rolesTable.id),
    permissionId: d.text().references(() => permissionsTable.id),
  }),
  (table) => [primaryKey({ columns: [table.roleId, table.permissionId] })],
);

// ------------------ TENANTS ------------------
export const tenantsTable = createTableFunction("tenants", (d) => ({
  id: d.uuid().primaryKey().defaultRandom(),
  name: d.varchar({ length: 255 }).notNull(),
  slug: d.varchar({ length: 255 }).unique(),
  plan: plans().notNull().default("free"),
  createdAt: d
    .timestamp({ mode: "date", withTimezone: true })
    .notNull()
    .defaultNow(),
}));

export const membershipsTable = createTableFunction(
  "membership",
  (d) => ({
    userId: d
      .varchar({ length: 255 })
      .notNull()
      .references(() => usersTable.id),
    tenantId: d
      .uuid()
      .notNull()
      .references(() => tenantsTable.id),
    role: tenantUserRoles().notNull().default("viewer"),
    invitedAt: d.timestamp({ mode: "date", withTimezone: true }).notNull(),
    acceptedAt: d.timestamp({ mode: "date", withTimezone: true }),
  }),
  (table) => [primaryKey({ columns: [table.userId, table.tenantId] })],
);

export const invitationsTable = createTableFunction("invitations", (d) => ({
  id: d.uuid().primaryKey().defaultRandom(),
  email: d.text().notNull(),
  tenantId: d.uuid().references(() => tenantsTable.id),
  role: tenantUserRoles().notNull().default("viewer"),
  token: d.text().notNull().unique(),
  createdAt: d.timestamp().defaultNow(),
  acceptedAt: d.timestamp(),
}));

export const subscriptionsTable = createTableFunction("subscriptions", (d) => ({
  id: d.text().primaryKey(), // Stripe subscription ID
  tenantId: d.uuid().references(() => tenantsTable.id),
  customerId: d.text().notNull(), // Stripe customer ID
  priceId: d.text().notNull(),
  status: planStatus().default("trial"),
  currentPeriodEnd: d.timestamp(),
  createdAt: d.timestamp().defaultNow(),
}));

// ------------------ AUDIT ------------------
export const auditLogsTable = createTableFunction("audit_logs", (d) => ({
  id: d.uuid().primaryKey().defaultRandom(),
  tenantId: d.uuid().references(() => tenantsTable.id),
  userId: d
    .varchar({ length: 255 })
    .notNull()
    .references(() => usersTable.id),
  action: d.text().notNull(), // e.g., "USER_INVITED"
  metadata: d.text(), // Optional JSON string
  createdAt: d.timestamp().defaultNow(),
}));

// ------------------ RELATIONS ------------------
export const usersRelations = relations(usersTable, ({ many }) => ({
  accounts: many(accountsTable),
}));

export const accountsRelations = relations(accountsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [accountsTable.userId],
    references: [usersTable.id],
  }),
}));

export const sessionsRelations = relations(sessionsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [sessionsTable.userId],
    references: [usersTable.id],
  }),
}));

export const tenantsRelations = relations(tenantsTable, ({ many }) => ({
  memberships: many(membershipsTable),
  subscriptions: many(subscriptionsTable),
  auditLogs: many(auditLogsTable),
  invitations: many(invitationsTable),
}));

export const membershipsRelations = relations(membershipsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [membershipsTable.userId],
    references: [usersTable.id],
  }),
  tenant: one(tenantsTable, {
    fields: [membershipsTable.tenantId],
    references: [tenantsTable.id],
  }),
}));
export const subscriptionsRelations = relations(
  subscriptionsTable,
  ({ one }) => ({
    tenant: one(tenantsTable, {
      fields: [subscriptionsTable.tenantId],
      references: [tenantsTable.id],
    }),
  }),
);

export const invitationsRelations = relations(invitationsTable, ({ one }) => ({
  tenant: one(tenantsTable, {
    fields: [invitationsTable.tenantId],
    references: [tenantsTable.id],
  }),
}));

export const auditLogsRelations = relations(auditLogsTable, ({ one }) => ({
  tenant: one(tenantsTable, {
    fields: [auditLogsTable.tenantId],
    references: [tenantsTable.id],
  }),
  user: one(usersTable, {
    fields: [auditLogsTable.userId],
    references: [usersTable.id],
  }),
}));
