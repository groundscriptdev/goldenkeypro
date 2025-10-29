import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Para SSR, es mejor usar "as-needed" en lugar de "always"
  localePrefix: "as-needed",

  // Optional: Configure locale detection
  localeDetection: true,

  // Optional: Configure alternate links
  alternateLinks: false,
});

export const config = {
  // Match only internationalized pathnames, excluding assets
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)"],
};
