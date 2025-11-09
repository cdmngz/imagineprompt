// src/interfaces/ui/(debug)/session/page.tsx
import { getServerSession } from "next-auth";
import { createAuthOptions } from "@/adapters/auth/nextauth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(createAuthOptions());
  if (!session) redirect("/api/auth/signin");
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
