import { NextRequest, NextResponse } from "next/server";

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
export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (
    path === "/login" ||
    path === "/opengraph-image" ||
    path.startsWith("/_next") ||
    path.startsWith("/favicon") ||
    path.includes(".")
  )
    return NextResponse.next();
  const token = req.cookies.get("site_access")?.value;
  const secret = process.env.COOKIE_SECRET || "development-cookie-secret";
  if (token) {
    const [value, signature] = token.split(".");
    if (value && signature && signature === (await sign(value, secret)) && value === "granted")
      return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", req.url));
}
export const config = { matcher: ["/((?!api/auth).*)"] };
