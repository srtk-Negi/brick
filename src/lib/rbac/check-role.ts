// src/lib/rbac/check-role.ts
import { ROLE_PERMISSIONS } from "./permissions";

export function hasPermission(role: string, permission: string) {
  return (ROLE_PERMISSIONS[role] || []).includes(permission);
}
