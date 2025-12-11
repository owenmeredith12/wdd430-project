// app/api/logout/route.ts
import { NextResponse } from "next/server";

export const GET = async () => {
  const response = NextResponse.json({ message: "Logged out successfully" });

  // Delete the NextAuth session cookies
  response.cookies.delete("next-auth.session-token"); // JWT sessions
  response.cookies.delete("__Secure-next-auth.session-token"); // Secure variant
  response.cookies.delete("__next_hmr_refresh_hash__"); // JWT sessions
  response.cookies.delete("next-auth.callback-url"); // Secure variant

  return response;
};
