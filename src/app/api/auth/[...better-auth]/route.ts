// src/interfaces/http/api/auth/[...better-auth]/route.ts
import { handlers } from "@/auth";

export const { GET, POST } = handlers as {
  GET: (request: Request) => Promise<Response>;
  POST: (request: Request) => Promise<Response>;
};
