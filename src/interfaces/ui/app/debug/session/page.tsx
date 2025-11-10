// src/interfaces/ui/(debug)/session/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/login");
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
