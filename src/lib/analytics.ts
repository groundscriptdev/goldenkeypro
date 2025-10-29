// Analytics and tracking utilities

// Declare global window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    _hmt: any[];
  }
}

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface PageView {
  page: string;
  title: string;
  location?: string;
}

interface UserProperties {
  [key: string]: any;
}

// Google Analytics 4 integration
export const GA4 = {
  // Initialize GA4
  init: (measurementId: string) => {
    if (typeof window === "undefined") return;

    // Load gtag script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      send_page_view: false, // We'll handle page views manually
      anonymize_ip: true,
      allow_google_signals: false,
    });
  },

  // Track page views
  pageview: (pageView: PageView) => {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_title: pageView.title,
      page_location: pageView.location,
    });
  },

  // Track custom events
  event: (event: AnalyticsEvent) => {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("event", event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  },

  // Set user properties
  setUserProperties: (properties: UserProperties) => {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("user_properties", properties);
  },

  // Track conversion events
  conversion: (conversionId: string, value?: number, currency?: string) => {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("event", "conversion", {
      send_to: conversionId,
      value: value,
      currency: currency,
    });
  },
};

// Baidu Analytics integration
export const BaiduAnalytics = {
  // Initialize Baidu Analytics
  init: (trackingId: string) => {
    if (typeof window === "undefined") return;

    // Load Baidu Analytics script
    const script = document.createElement("script");
    script.src = `https://hm.baidu.com/hm.js?${trackingId}`;
    script.async = true;
    document.head.appendChild(script);
  },

  // Track page views
  pageview: (pageView: PageView) => {
    if (typeof window === "undefined" || !window._hmt) return;

    window._hmt.push(["_trackPageview", pageView.page]);
  },

  // Track custom events
  event: (event: AnalyticsEvent) => {
    if (typeof window === "undefined" || !window._hmt) return;

    window._hmt.push([
      "_trackEvent",
      event.category,
      event.action,
      event.label,
      event.value,
    ]);
  },
};

// WeChat Analytics integration
export const WeChatAnalytics = {
  // Initialize WeChat Analytics
  init: () => {
    if (typeof window === "undefined") return;

    // WeChat analytics would be initialized through WeChat JS-SDK
    // This is a placeholder for WeChat analytics integration
    console.log("WeChat Analytics initialized");
  },

  // Track page views
  pageview: (pageView: PageView) => {
    if (typeof window === "undefined") return;

    // WeChat analytics page view tracking
    console.log("WeChat pageview:", pageView);
  },

  // Track custom events
  event: (event: AnalyticsEvent) => {
    if (typeof window === "undefined") return;

    // WeChat analytics event tracking
    console.log("WeChat event:", event);
  },
};

// Combined analytics interface
export const Analytics = {
  // Initialize all analytics services
  init: () => {
    // Initialize GA4
    if (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
      GA4.init(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
    }

    // Initialize Baidu Analytics
    if (process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ID) {
      BaiduAnalytics.init(process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ID);
    }

    // Initialize WeChat Analytics
    if (process.env.NEXT_PUBLIC_WECHAT_ANALYTICS_ENABLED === "true") {
      WeChatAnalytics.init();
    }
  },

  // Track page views across all services
  pageview: (pageView: PageView) => {
    GA4.pageview(pageView);
    BaiduAnalytics.pageview(pageView);
    WeChatAnalytics.pageview(pageView);
  },

  // Track events across all services
  event: (event: AnalyticsEvent) => {
    GA4.event(event);
    BaiduAnalytics.event(event);
    WeChatAnalytics.event(event);
  },

  // Set user properties across all services
  setUserProperties: (properties: UserProperties) => {
    GA4.setUserProperties(properties);

    // Other services would be implemented here
  },

  // Track conversion events
  conversion: (conversionId: string, value?: number, currency?: string) => {
    GA4.conversion(conversionId, value, currency);

    // Other services would be implemented here
  },

  // Consent management
  consent: {
    // Grant consent for analytics
    grant: () => {
      consent.grant();
    },

    // Deny consent for analytics
    deny: () => {
      consent.deny();
    },

    // Default consent settings
    default: () => {
      consent.default();
    },
  },
};

// Custom event tracking for specific user interactions
export const trackEvent = {
  // Track form submissions
  formSubmission: (formName: string) => {
    Analytics.event({
      action: "submit",
      category: "Form",
      label: formName,
    });
  },

  // Track consultation bookings
  consultationBooking: (consultationType: string) => {
    Analytics.event({
      action: "book",
      category: "Consultation",
      label: consultationType,
    });
  },

  // Track tool usage
  toolUsage: (toolName: string, action: string) => {
    Analytics.event({
      action: action,
      category: "Tool",
      label: toolName,
    });
  },

  // Track investment calculator results
  calculatorResults: (investmentType: string, amount: number) => {
    Analytics.event({
      action: "calculate",
      category: "Calculator",
      label: investmentType,
      value: amount,
    });
  },

  // Track property comparisons
  propertyComparison: (propertyCount: number) => {
    Analytics.event({
      action: "compare",
      category: "Property",
      label: "Properties Compared",
      value: propertyCount,
    });
  },

  // Track residency eligibility checks
  eligibilityCheck: (eligible: boolean) => {
    Analytics.event({
      action: "check",
      category: "Eligibility",
      label: eligible ? "Eligible" : "Not Eligible",
    });
  },

  // Track file downloads
  fileDownload: (fileName: string, fileType: string) => {
    Analytics.event({
      action: "download",
      category: "File",
      label: `${fileType}: ${fileName}`,
    });
  },

  // Track outbound link clicks
  outboundLink: (url: string, linkType: string) => {
    Analytics.event({
      action: "click",
      category: "Outbound Link",
      label: `${linkType}: ${url}`,
    });
  },

  // Track social media shares
  socialShare: (platform: string, contentType: string) => {
    Analytics.event({
      action: "share",
      category: "Social",
      label: `${platform}: ${contentType}`,
    });
  },

  // Track video plays
  videoPlay: (videoTitle: string, videoPercent: number) => {
    Analytics.event({
      action: "play",
      category: "Video",
      label: videoTitle,
      value: Math.round(videoPercent),
    });
  },

  // Track search queries
  search: (searchTerm: string, resultCount: number) => {
    Analytics.event({
      action: "search",
      category: "Search",
      label: searchTerm,
      value: resultCount,
    });
  },
};

// Page view tracking
export const trackPageView = (
  page: string,
  title: string,
  location?: string
) => {
  Analytics.pageview({
    page,
    title,
    location,
  });
};

// User identification
export const identifyUser = (
  userId: string,
  userProperties?: UserProperties
) => {
  Analytics.setUserProperties({
    userId,
    ...userProperties,
  });
};

// E-commerce tracking
export const trackEcommerce = {
  // Track product views
  productView: (
    productId: string,
    productName: string,
    category: string,
    price: number
  ) => {
    Analytics.event({
      action: "view",
      category: "Product",
      label: `${category}: ${productName}`,
      value: Math.round(price * 100), // Convert to cents
    });
  },

  // Track add to cart
  addToCart: (
    productId: string,
    productName: string,
    category: string,
    price: number,
    quantity: number
  ) => {
    Analytics.event({
      action: "add_to_cart",
      category: "Ecommerce",
      label: `${category}: ${productName}`,
      value: Math.round(price * quantity * 100), // Convert to cents
    });
  },

  // Track purchase
  purchase: (
    transactionId: string,
    products: Array<{
      id: string;
      name: string;
      category: string;
      price: number;
      quantity: number;
    }>,
    total: number
  ) => {
    Analytics.event({
      action: "purchase",
      category: "Ecommerce",
      label: transactionId,
      value: Math.round(total * 100), // Convert to cents
    });
  },
};

// Performance tracking
export const trackPerformance = {
  // Track Core Web Vitals
  webVitals: (metrics: {
    lcp?: number;
    fid?: number;
    cls?: number;
    fcp?: number;
  }) => {
    if (metrics.lcp) {
      Analytics.event({
        action: "LCP",
        category: "Web Vitals",
        label: "Largest Contentful Paint",
        value: Math.round(metrics.lcp),
      });
    }

    if (metrics.fid) {
      Analytics.event({
        action: "FID",
        category: "Web Vitals",
        label: "First Input Delay",
        value: Math.round(metrics.fid),
      });
    }

    if (metrics.cls) {
      Analytics.event({
        action: "CLS",
        category: "Web Vitals",
        label: "Cumulative Layout Shift",
        value: Math.round(metrics.cls * 1000), // Convert to integer
      });
    }

    if (metrics.fcp) {
      Analytics.event({
        action: "FCP",
        category: "Web Vitals",
        label: "First Contentful Paint",
        value: Math.round(metrics.fcp),
      });
    }
  },

  // Track page load time
  pageLoadTime: (loadTime: number) => {
    Analytics.event({
      action: "load",
      category: "Performance",
      label: "Page Load Time",
      value: Math.round(loadTime),
    });
  },
};

// Web Vitals reporting
export const reportWebVitals = async () => {
  if (typeof window === "undefined") return null;

  try {
    // Import web-vitals library dynamically - using try-catch in case package is not installed
    let webVitals: any;
    try {
      webVitals = await import("web-vitals");
    } catch (importError) {
      console.warn(
        "Web vitals library not available, skipping metrics collection"
      );
      return null;
    }

    const metrics = {
      cls: undefined as number | undefined,
      fid: undefined as number | undefined,
      fcp: undefined as number | undefined,
      lcp: undefined as number | undefined,
      ttfb: undefined as number | undefined,
    };

    // Collect metrics with proper typing
    if (webVitals.getCLS) {
      webVitals.getCLS((metric: any) => {
        metrics.cls = metric.value;
      });
    }
    if (webVitals.getFID) {
      webVitals.getFID((metric: any) => {
        metrics.fid = metric.value;
      });
    }
    if (webVitals.getFCP) {
      webVitals.getFCP((metric: any) => {
        metrics.fcp = metric.value;
      });
    }
    if (webVitals.getLCP) {
      webVitals.getLCP((metric: any) => {
        metrics.lcp = metric.value;
      });
    }
    if (webVitals.getTTFB) {
      webVitals.getTTFB((metric: any) => {
        metrics.ttfb = metric.value;
      });
    }

    // Return metrics after a short delay to ensure all metrics are collected
    return new Promise<typeof metrics>((resolve) => {
      setTimeout(() => resolve(metrics), 1000);
    });
  } catch (error) {
    console.error("Error collecting web vitals:", error);
    return null;
  }
};

// Error tracking
export const trackError = (error: Error, errorContext?: string) => {
  Analytics.event({
    action: "error",
    category: "Error",
    label: `${error.name}: ${error.message}`,
  });

  // Send to error tracking service
  console.error("Tracked error:", error, errorContext);
};

// Consent management
export const consent = {
  // Grant consent for analytics
  grant: () => {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
    });
  },

  // Deny consent for analytics
  deny: () => {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
    });
  },

  // Default consent settings
  default: () => {
    if (typeof window === "undefined" || !window.gtag) return;

    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      wait_for_update: 500,
    });
  },
};
