import { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?:
    | "website"
    | "article"
    | "book"
    | "profile"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other";
  canonical?: string;
  noindex?: boolean;
  locale?: string;
  alternateLocales?: string[];
}

export function generateSEO({
  title,
  description,
  keywords,
  ogImage = "/images/og-default.jpg",
  ogType = "website",
  canonical,
  noindex = false,
  locale = "en",
  alternateLocales = ["zh"],
}: SEOProps): Metadata {
  const siteName = "Panama Golden Key";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  const baseMetadata: Metadata = {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: "Panama Golden Key" }],
    creator: "Panama Golden Key",
    publisher: "Panama Golden Key",

    // Open Graph / Facebook
    openGraph: {
      type: ogType,
      locale,
      url: canonical,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },

    // App metadata
    applicationName: siteName,
    appleWebApp: {
      capable: true,
      title: siteName,
      statusBarStyle: "default",
    },

    // Verification
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },

    // Robots
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  // Add canonical URL
  if (canonical) {
    baseMetadata.alternates = {
      canonical,
      languages: {
        en: locale === "en" ? canonical : canonical.replace("/zh", "/en"),
        zh: locale === "zh" ? canonical : canonical.replace("/en", "/zh"),
      },
    };
  }

  // Add hreflang tags for multilingual SEO
  if (alternateLocales.length > 0) {
    const hreflangTags: Record<string, string> = {};

    // Current locale
    hreflangTags[locale] = canonical || "";

    // Alternate locales
    alternateLocales.forEach((altLocale) => {
      if (canonical) {
        hreflangTags[altLocale] = canonical.replace(
          `/${locale}`,
          `/${altLocale}`
        );
      }
    });

    baseMetadata.alternates = {
      ...baseMetadata.alternates,
      languages: hreflangTags,
    };
  }

  return baseMetadata;
}

// Structured Data generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Panama Golden Key",
    description:
      "Expert guidance for Chinese investors seeking Panama residency through investment opportunities",
    url: "https://panamagoldenkey.com",
    logo: "https://panamagoldenkey.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+50712345678",
      contactType: "customer service",
      availableLanguage: ["English", "Chinese", "Spanish"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "PA",
      addressLocality: "Panama City",
    },
    sameAs: [
      "https://www.facebook.com/panamagoldenkey",
      "https://twitter.com/panamagoldenkey",
      "https://www.linkedin.com/company/panamagoldenkey",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Panama Golden Key",
    description:
      "Expert guidance for Chinese investors seeking Panama residency through investment opportunities",
    url: "https://panamagoldenkey.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://panamagoldenkey.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateServiceSchema(
  serviceName: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "Organization",
      name: "Panama Golden Key",
    },
    serviceType: "Investment Advisory",
    areaServed: {
      "@type": "Country",
      name: "Panama",
    },
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Panama Golden Key",
    description:
      "Expert guidance for Chinese investors seeking Panama residency through investment opportunities",
    image: "https://panamagoldenkey.com/images/og-default.jpg",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PA",
      addressLocality: "Panama City",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 8.982377,
      longitude: -79.519735,
    },
    url: "https://panamagoldenkey.com",
    telephone: "+50712345678",
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$$",
    languages: ["English", "Chinese", "Spanish"],
  };
}
