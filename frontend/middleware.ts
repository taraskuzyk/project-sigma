import { NextRequest, NextResponse } from "next/server";

const APP_DOMAIN = process.env.DOMAIN

export const config = {
  matcher: [
    "/",
    "/([^/.]*)", // exclude `/public` files by matching all paths except for paths containing `.` (e.g. /logo.png)
    // "/site/:path*",
    // "/post/:path*",
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  const hostname = req.headers.get("host") || `www.${APP_DOMAIN}`;

  const currentHost =
    process.env.NODE_ENV === "production" // && process.env.VERCEL === "1"
      ? hostname
          .replace(`${APP_DOMAIN}`, "")
      : hostname.replace(`.localhost:3000`, "");

  // rewrites for app pages
  if (currentHost == "app") {
    const hasAuthCookie = (req.cookies.get("next-auth.session-token") || req.cookies.get("__Secure-next-auth.session-token"))
    const isLoggedIn = url.pathname === "/login" && hasAuthCookie
    if (
        // TODO: handle authentication here, checking for cookie existence.
        // if the pathname is login, and the user is already logged in, we push
        // them to the index page of the app/ directory and handle verifying the cookie there.
      isLoggedIn
    ) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    url.pathname = `/app${url.pathname}`;
    return NextResponse.rewrite(url);
  }

    url.pathname = `/home${url.pathname}`;
    return NextResponse.rewrite(url);
}