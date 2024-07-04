import { AuthOpations } from "@/lib/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(AuthOpations);
export { handler as GET, handler as POST };
