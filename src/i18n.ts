import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Can be imported from a shared config
export const locales = ["en", "zh", "es"] as const;
export const defaultLocale = "en" as const;

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale from the request
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.find((l) => l === locale)) {
    // En lugar de notFound(), devuelve el locale por defecto
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: "America/Panama",
    formats: {
      dateTime: {
        short: {
          day: "numeric",
          month: "short",
          year: "numeric",
        },
      },
    },
  };
});
