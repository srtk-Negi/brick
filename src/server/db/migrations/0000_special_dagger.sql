CREATE TYPE "public"."app_user_roles" AS ENUM('super_admin', 'admin', 'basic');--> statement-breakpoint
CREATE TYPE "public"."plan_status" AS ENUM('active', 'canceled', 'trial', 'past_due');--> statement-breakpoint
CREATE TYPE "public"."plans" AS ENUM('free', 'pro', 'enterprize');--> statement-breakpoint
CREATE TYPE "public"."tenant_user_roles" AS ENUM('admin', 'editor', 'viewer');--> statement-breakpoint
CREATE TABLE "csb_account" (
	"userId" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"provider" varchar(255) NOT NULL,
	"providerAccountId" varchar(255) NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" varchar(255),
	"scope" varchar(255),
	"id_token" text,
	"session_state" varchar(255),
	CONSTRAINT "csb_account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId")
);
--> statement-breakpoint
CREATE TABLE "csb_audit_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"tenantId" uuid,
	"userId" varchar(255) NOT NULL,
	"action" text NOT NULL,
	"metadata" text,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "csb_invitations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"tenantId" uuid,
	"role" "tenant_user_roles" DEFAULT 'viewer' NOT NULL,
	"token" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"acceptedAt" timestamp,
	CONSTRAINT "csb_invitations_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "csb_membership" (
	"userId" varchar(255) NOT NULL,
	"tenantId" uuid NOT NULL,
	"role" "tenant_user_roles" DEFAULT 'viewer' NOT NULL,
	"invitedAt" timestamp with time zone NOT NULL,
	"acceptedAt" timestamp with time zone,
	CONSTRAINT "csb_membership_userId_tenantId_pk" PRIMARY KEY("userId","tenantId")
);
--> statement-breakpoint
CREATE TABLE "csb_permissions" (
	"id" text PRIMARY KEY NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "csb_role_permissions" (
	"roleId" text,
	"permissionId" text,
	CONSTRAINT "csb_role_permissions_roleId_permissionId_pk" PRIMARY KEY("roleId","permissionId")
);
--> statement-breakpoint
CREATE TABLE "csb_roles" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "csb_session" (
	"sessionToken" varchar(255) PRIMARY KEY NOT NULL,
	"userId" varchar(255) NOT NULL,
	"expires" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "csb_subscriptions" (
	"id" text PRIMARY KEY NOT NULL,
	"tenantId" uuid,
	"customerId" text NOT NULL,
	"priceId" text NOT NULL,
	"status" "plan_status" DEFAULT 'trial',
	"currentPeriodEnd" timestamp,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "csb_tenants" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255),
	"plan" "plans" DEFAULT 'free' NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "csb_tenants_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "csb_user" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"email" varchar(255) NOT NULL,
	"emailVerified" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
	"image" varchar(255),
	"role" "app_user_roles" DEFAULT 'basic' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "csb_verification_token" (
	"identifier" varchar(255) NOT NULL,
	"token" varchar(255) NOT NULL,
	"expires" timestamp with time zone NOT NULL,
	CONSTRAINT "csb_verification_token_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
ALTER TABLE "csb_account" ADD CONSTRAINT "csb_account_userId_csb_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."csb_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "csb_audit_logs" ADD CONSTRAINT "csb_audit_logs_tenantId_csb_tenants_id_fk" FOREIGN KEY ("tenantId") REFERENCES "public"."csb_tenants"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "csb_audit_logs" ADD CONSTRAINT "csb_audit_logs_userId_csb_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."csb_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "csb_invitations" ADD CONSTRAINT "csb_invitations_tenantId_csb_tenants_id_fk" FOREIGN KEY ("tenantId") REFERENCES "public"."csb_tenants"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "csb_membership" ADD CONSTRAINT "csb_membership_userId_csb_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."csb_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "csb_membership" ADD CONSTRAINT "csb_membership_tenantId_csb_tenants_id_fk" FOREIGN KEY ("tenantId") REFERENCES "public"."csb_tenants"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "csb_role_permissions" ADD CONSTRAINT "csb_role_permissions_roleId_csb_roles_id_fk" FOREIGN KEY ("roleId") REFERENCES "public"."csb_roles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "csb_role_permissions" ADD CONSTRAINT "csb_role_permissions_permissionId_csb_permissions_id_fk" FOREIGN KEY ("permissionId") REFERENCES "public"."csb_permissions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "csb_session" ADD CONSTRAINT "csb_session_userId_csb_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."csb_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "csb_subscriptions" ADD CONSTRAINT "csb_subscriptions_tenantId_csb_tenants_id_fk" FOREIGN KEY ("tenantId") REFERENCES "public"."csb_tenants"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "account_user_id_idx" ON "csb_account" USING btree ("userId");--> statement-breakpoint
CREATE INDEX "t_user_id_idx" ON "csb_session" USING btree ("userId");