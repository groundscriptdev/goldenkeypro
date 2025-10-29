export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  hasDropdown: boolean;
  items?: NavigationSubItem[];
}

export interface NavigationSubItem {
  id: string;
  label: string;
  href?: string;
  hasSubmenu: boolean;
  items?: NavigationSubSubItem[];
}

export interface NavigationSubSubItem {
  id: string;
  label: string;
  href: string;
}

// Helper function to generate locale-aware URLs
export const getLocalizedUrl = (href: string, locale: string) => {
  if (href.startsWith("/")) {
    return `/${locale}${href}`;
  }
  return href;
};

export const navigationData: NavigationItem[] = [
  {
    id: "home",
    label: "navigation.home",
    href: "/homepage",
    hasDropdown: false,
  },
  {
    id: "residency",
    label: "navigation.residency",
    href: "/residency",
    hasDropdown: true,
    items: [
      {
        id: "qualified-investor",
        label: "residency.qualified_investor.title",
        href: "/residency",
        hasSubmenu: true,
        items: [
          {
            id: "requirements",
            label: "residency.qualified_investor.requirements.title",
            href: "/residency#requirements",
          },
          {
            id: "benefits",
            label: "residency.qualified_investor.benefits.title",
            href: "/residency#benefits",
          },
          {
            id: "process",
            label: "residency.qualified_investor.process.title",
            href: "/residency#process",
          },
        ],
      },
      {
        id: "investment-options",
        label: "residency.investment_options.title",
        href: "/residency",
        hasSubmenu: true,
        items: [
          {
            id: "real-estate",
            label: "residency.investment_options.real_estate.title",
            href: "/residency#real-estate",
          },
          {
            id: "bank-deposit",
            label: "residency.investment_options.bank_deposit.title",
            href: "/residency#bank-deposit",
          },
          {
            id: "securities",
            label: "residency.investment_options.securities.title",
            href: "/residency#securities",
          },
        ],
      },
      {
        id: "timeline",
        label: "residency.timeline.title",
        href: "/residency#timeline",
        hasSubmenu: false,
      },
    ],
  },
  {
    id: "real-estate",
    label: "navigation.real_estate",
    hasDropdown: true,
    items: [
      {
        id: "luxury-market",
        label: "real_estate.luxury_market.title",
        hasSubmenu: true,
        items: [
          {
            id: "punta-pacifica",
            label: "real_estate.luxury_market.punta_pacifica.title",
            href: "/real-estate/luxury#punta-pacifica",
          },
          {
            id: "santa-maria",
            label: "real_estate.luxury_market.santa_maria.title",
            href: "/real-estate/luxury#santa-maria",
          },
          {
            id: "costa-este",
            label: "real_estate.luxury_market.costa_este.title",
            href: "/real-estate/luxury#costa-este",
          },
        ],
      },
      {
        id: "mid-range",
        label: "real_estate.mid_range.title",
        hasSubmenu: true,
        items: [
          {
            id: "san-francisco",
            label: "real_estate.mid_range.san_francisco.title",
            href: "/real-estate/mid-range#san-francisco",
          },
          {
            id: "avenida-balboa",
            label: "real_estate.mid_range.avenida_balboa.title",
            href: "/real-estate/mid-range#avenida-balboa",
          },
          {
            id: "amador",
            label: "real_estate.mid_range.amador.title",
            href: "/real-estate/mid-range#amador",
          },
        ],
      },
      {
        id: "emerging-areas",
        label: "real_estate.emerging_areas.title",
        hasSubmenu: true,
        items: [
          {
            id: "panama-pacifico",
            label: "real_estate.emerging_areas.panama_pacifico.title",
            href: "/real-estate/emerging#panama-pacifico",
          },
          {
            id: "costa-verde",
            label: "real_estate.emerging_areas.costa_verde.title",
            href: "/real-estate/emerging#costa-verde",
          },
        ],
      },
    ],
  },
  {
    id: "medical-tourism",
    label: "navigation.medical_tourism",
    href: "/medical-tourism",
    hasDropdown: false,
  },
  {
    id: "infrastructure",
    label: "navigation.infrastructure",
    href: "/infrastructure",
    hasDropdown: false,
  },
  {
    id: "about-panama",
    label: "navigation.about_panama",
    hasDropdown: true,
    items: [
      {
        id: "strategic-location",
        label: "about_panama.strategic_location.title",
        href: "/about-panama#strategic-location",
        hasSubmenu: false,
      },
      {
        id: "economic-benefits",
        label: "about_panama.economic_benefits.title",
        href: "/about-panama#economic-benefits",
        hasSubmenu: false,
      },
      {
        id: "tax-advantages",
        label: "about_panama.tax_advantages.title",
        href: "/about-panama#tax-advantages",
        hasSubmenu: false,
      },
      {
        id: "quality-of-life",
        label: "about_panama.quality_of_life.title",
        href: "/about-panama#quality-of-life",
        hasSubmenu: false,
      },
    ],
  },
  {
    id: "about-us",
    label: "navigation.about_us",
    href: "/about-us",
    hasDropdown: false,
  },
  /*   {
    id: "contact",
    label: "navigation.contact",
    href: "/contact",
    hasDropdown: false,
  }, */
];
