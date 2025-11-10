// src/adapters/auth/port-impl.ts

import { env } from "@/adapters/config/env";
import { auth } from "@/auth";
import type { AuthPort, SessionUser } from "@/ports/auth";

export const authAdapter: AuthPort = {
  async getSession() {
    const s = await auth();
    if (!s?.user?.email) return null;
    const u: SessionUser = {
      id: s.user.email,
      email: s.user.email,
      name: s.user.name ?? undefined,
      image: s.user.image ?? undefined,
    };
    return u;
  },
  signInUrl() {
    return "/api/auth/google";
  },
  signOutUrl(redirectTo = "/") {
    const base = env.APP_URL ?? "http://localhost:3000";
    const u = new URL("/api/auth/signout", base);
    u.searchParams.set("redirectTo", redirectTo);
    return u.toString();
  },
};
