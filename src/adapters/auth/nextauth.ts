// src/adapters/auth/nextauth.ts
import type { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { env } from "@/adapters/config/env";

const baseAuthOptions: Omit<NextAuthOptions, "providers"> = {
  session: { strategy: "jwt" },
  secret: env.NEXTAUTH_SECRET,
};

const createProviders = () => [
  CognitoProvider({
    issuer: env.COGNITO_ISSUER,
    clientId: env.COGNITO_CLIENT_ID,
    clientSecret: env.COGNITO_CLIENT_SECRET,
    authorization: { params: { scope: "openid email profile" } },
  }),
];

export const createAuthOptions = (): NextAuthOptions => ({
  ...baseAuthOptions,
  providers: createProviders(),
});
