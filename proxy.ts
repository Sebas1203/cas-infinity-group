import { NextRequest, NextResponse } from "next/server";
import { i18n } from "@/lib/i18n-config";

function getLocaleFromHeader(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  for (const locale of i18n.locales) {
    if (acceptLanguage.toLowerCase().includes(locale)) return locale;
  }
  return i18n.defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocaleFromHeader(request);
  const newUrl = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|images|.*\\.(?:jpg|jpeg|png|svg|webp|ico|txt|xml)$).*)",
  ],
};
