// src/interfaces/http/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { createAuthOptions } from "@/adapters/auth/nextauth";

const handler = NextAuth(createAuthOptions());
export { handler as GET, handler as POST };
