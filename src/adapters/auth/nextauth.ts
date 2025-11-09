// src/adapters/auth/nextauth.ts
import type { NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";
import { env } from "@/adapters/config/env";

export const authOptions: NextAuthOptions = {
  providers: [
    CognitoProvider({
      issuer: env.COGNITO_ISSUER,
      clientId: env.COGNITO_CLIENT_ID,
      clientSecret: env.COGNITO_CLIENT_SECRET,
      authorization: { params: { scope: "openid email profile" } },
    }),
  ],
  session: { strategy: "jwt" },
};
