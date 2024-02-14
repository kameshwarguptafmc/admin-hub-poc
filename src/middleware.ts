import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const config = {
  // runtime: "experimental-edge", // for Edge API Routes only
  unstable_allowDynamic: [
    // allows a single file
    // '/lib/utilities.js',
    // use a glob to allow anything in the function-bind 3rd party module
    // '/node_modules/function-bind/**',
    "/node_modules/@babel/runtime/regenerator/index.js",
  ],
  matcher: ["/", "/arc/:path*", "/login", "/dashboard/:path*"],
};

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  let hostname = req.headers
    .get("host")!
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  const searchParams = req.nextUrl.searchParams.toString();
  // Get the pathname of the request (e.g. /, /dashboard, /login)
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  // Validate the session token before routing
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get("cookie") || undefined,
    },
  };  

  const session = await getToken({req:req, secret: process.env.NEXTAUTH_SECRET})

  console.log('Session => ',session)

  // admin.localhost:3000  // farmdev.localhost:3000
  const subdomain = hostname.split(".")[0];
  const allowedWebSubDomains = process.env.NEXT_PUBLIC_WEB_ALLOWED_DOMAINS!.split(", ");

  const allowedAdminSubDomains = process.env.NEXT_PUBLIC_ADMIN_ALLOWED_DOMAINS!.split(", ");

  // Check for session
  if (session) {
    // Check Admin Panel Subdomains
    if (allowedAdminSubDomains.includes(subdomain)) {
      // Admin Panel Redirection Logic
      if (req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/login") {
        return NextResponse.redirect(new URL(`/dashboard`, req.url));
      }
    } else if (allowedWebSubDomains.includes(subdomain)) {
      // Web App Redirection Logic
      if (req.nextUrl.pathname === "/" || req.nextUrl.pathname === "/login") {
        return NextResponse.redirect(new URL(`/arc/dashboard`, req.url));
      } else {
        return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
      }
    } else {
      // Any Random Path Redirection Logic
      return NextResponse.redirect(new URL(`/404`, req.url));
    }
  } else {
    // Check Configured SubDomain
    if (
      allowedAdminSubDomains.includes(subdomain) ||
      allowedWebSubDomains.includes(subdomain)
    ) {
      if (req.nextUrl.pathname !== "/login") {
        return NextResponse.redirect(new URL(`/login`, req.url));
      } else {
        return NextResponse.rewrite(new URL(`/login`, req.url));
      }
    } else {
      return NextResponse.redirect(new URL(`/404`, req.url));
    }
  }
}
