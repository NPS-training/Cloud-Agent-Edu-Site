import { NextResponse } from "next/server";
const enc = new TextEncoder();
async function sign(value: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const bytes = await crypto.subtle.sign("HMAC", key, enc.encode(value));
  return btoa(String.fromCharCode(...new Uint8Array(bytes)))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}
export async function POST(req: Request) {
  const data = await req.formData();
  if (data.get("password") !== (process.env.SITE_PASSWORD || "cloud-agents-dev"))
    return NextResponse.redirect(new URL("/login?error=1", req.url), 303);
  const value = "granted";
  const token = `${value}.${await sign(value, process.env.COOKIE_SECRET || "development-cookie-secret")}`;
  const response = NextResponse.redirect(new URL("/", req.url), 303);
  response.cookies.set("site_access", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
