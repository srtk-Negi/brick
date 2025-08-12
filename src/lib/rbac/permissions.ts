// src/lib/rbac/permissions.ts
export const ROLE_PERMISSIONS: Record<string, string[]> = {
  owner: ["manage_team", "manage_billing", "manage_projects"],
  admin: ["manage_team", "manage_projects"],
  member: ["view_projects"],
};
