// src/interfaces/ui/components/LogoutButton.tsx
"use client";
import { signOut } from "@/interfaces/ui/lib/auth-client";

export default function LogoutButton() {
  return <button onClick={() => signOut({ redirectTo: "/" })}>Logout</button>;
}
