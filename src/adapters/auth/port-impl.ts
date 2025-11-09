// src/adapters/auth/port-impl.ts

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
    return "/api/auth/signin?provider=cognito";
  },
  signOutUrl(redirectTo = "/") {
    const base = process.env.NEXTAUTH_URL ?? "http://localhost:3000";
    const u = new URL("/api/auth/signout", base);
    u.searchParams.set("callbackUrl", redirectTo);
    return u.toString();
  },
};
