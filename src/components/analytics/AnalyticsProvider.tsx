"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Analytics,
  trackPageView,
  trackPerformance,
  reportWebVitals,
} from "@/lib/analytics";
import { performanceMetrics } from "@/lib/performance";

// ================================
// 🧭 Analytics Provider
// ================================

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      Analytics.init();
      Analytics.consent.default();

      const savedConsent = localStorage.getItem("analytics-consent");
      if (savedConsent === "granted") Analytics.consent.grant();
      else if (savedConsent === "denied") Analytics.consent.deny();
    } catch (err) {
      console.error("Analytics init error:", err);
    }
  }, []);

  useEffect(() => {
    if (!pathname || typeof window === "undefined") return;
    try {
      const title = document.title;
      trackPageView(pathname, title, window.location.href);
    } catch (err) {
      console.error("Error tracking page view:", err);
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const measureAndTrackPerformance = async () => {
      try {
        const metrics = await reportWebVitals();
        if (metrics) trackPerformance.webVitals(metrics);

        const loadTime = performanceMetrics.measurePageLoad();
        if (loadTime) trackPerformance.pageLoadTime(loadTime);
      } catch (error) {
        console.error("Error tracking performance:", error);
      }
    };

    if (document.readyState === "complete") {
      measureAndTrackPerformance();
    } else {
      window.addEventListener("load", measureAndTrackPerformance);
      return () =>
        window.removeEventListener("load", measureAndTrackPerformance);
    }
  }, []);

  return <>{children}</>;
}

// ================================
// 🎯 Analytics Hook
// ================================

export const useAnalytics = () => {
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    Analytics.event({ action, category, label, value });
  };

  const helpers = {
    trackFormSubmission: (formName: string) =>
      trackEvent("submit", "Form", formName),
    trackConsultationBooking: (type: string) =>
      trackEvent("book", "Consultation", type),
    trackToolUsage: (tool: string, action: string) =>
      trackEvent(action, "Tool", tool),
    trackCalculatorResults: (type: string, amount: number) =>
      trackEvent("calculate", "Calculator", type, amount),
    trackPropertyComparison: (count: number) =>
      trackEvent("compare", "Property", "Properties Compared", count),
    trackEligibilityCheck: (eligible: boolean) =>
      trackEvent(
        "check",
        "Eligibility",
        eligible ? "Eligible" : "Not Eligible"
      ),
    trackFileDownload: (name: string, type: string) =>
      trackEvent("download", "File", `${type}: ${name}`),
    trackOutboundLink: (url: string, linkType: string) =>
      trackEvent("click", "Outbound Link", `${linkType}: ${url}`),
    trackSocialShare: (platform: string, contentType: string) =>
      trackEvent("share", "Social", `${platform}: ${contentType}`),
    trackVideoPlay: (title: string, percent: number) =>
      trackEvent("play", "Video", title, Math.round(percent)),
    trackSearch: (term: string, count: number) =>
      trackEvent("search", "Search", term, count),
    trackConversion: (id: string, value?: number, currency?: string) =>
      Analytics.conversion(id, value, currency),
    grantConsent: () => {
      Analytics.consent.grant();
      localStorage.setItem("analytics-consent", "granted");
    },
    denyConsent: () => {
      Analytics.consent.deny();
      localStorage.setItem("analytics-consent", "denied");
    },
  };

  return helpers;
};

// ================================
// 🍪 Cookie Consent Banner
// ================================

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const { grantConsent, denyConsent } = useAnalytics();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("analytics-consent");
    if (!saved) setShowConsent(true);
  }, []);

  const handleAccept = () => {
    grantConsent();
    setShowConsent(false);
  };

  const handleDecline = () => {
    denyConsent();
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-jade-green text-white p-4 z-50 shadow-lg transition-transform duration-500 ${
        showConsent ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm mb-4 sm:mb-0 sm:mr-4">
            We use cookies to analyze website traffic and optimize your
            experience. By continuing to use our site, you agree to our use of
            cookies.{" "}
            <a
              href="/privacy-policy"
              className="underline text-gold hover:text-gold/80"
            >
              Learn more
            </a>
            .
          </p>
          <div className="flex space-x-3">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-gold text-jade-green rounded-md font-medium hover:bg-gold/90 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="px-4 py-2 border border-white rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ================================
// 🧩 Specialized Tracking Hooks
// ================================

export const useFormTracking = (formName: string) => {
  const { trackFormSubmission } = useAnalytics();
  return { trackSubmit: () => trackFormSubmission(formName) };
};

export const useToolTracking = (toolName: string) => {
  const { trackToolUsage } = useAnalytics();
  return { trackAction: (action: string) => trackToolUsage(toolName, action) };
};

export const useVideoTracking = (videoTitle: string) => {
  const { trackVideoPlay } = useAnalytics();
  const [isPlaying, setIsPlaying] = useState(false);
  const [percentPlayed, setPercentPlayed] = useState(0);
  const [lastTracked, setLastTracked] = useState(0);

  const handlePlay = () => {
    setIsPlaying(true);
    trackVideoPlay(videoTitle, 0);
  };

  const handlePause = () => setIsPlaying(false);

  const handleTimeUpdate = (currentTime: number, duration: number) => {
    const percent = (currentTime / duration) * 100;
    setPercentPlayed(percent);
    const milestone = Math.round(percent / 25) * 25;
    if ([25, 50, 75, 100].includes(milestone) && milestone !== lastTracked) {
      trackVideoPlay(videoTitle, milestone);
      setLastTracked(milestone);
    }
  };

  return {
    isPlaying,
    percentPlayed,
    handlePlay,
    handlePause,
    handleTimeUpdate,
  };
};

export const useFileTracking = () => {
  const { trackFileDownload } = useAnalytics();
  return {
    trackDownload: (fileName: string, fileType: string) =>
      trackFileDownload(fileName, fileType),
  };
};

export const useOutboundLinkTracking = () => {
  const { trackOutboundLink } = useAnalytics();
  return {
    trackClick: (url: string, linkType: string) =>
      trackOutboundLink(url, linkType),
  };
};

export const useSocialTracking = () => {
  const { trackSocialShare } = useAnalytics();
  return {
    trackShare: (platform: string, contentType: string) =>
      trackSocialShare(platform, contentType),
  };
};

export const useSearchTracking = () => {
  const { trackSearch } = useAnalytics();
  return {
    trackSearchQuery: (term: string, count: number) => trackSearch(term, count),
  };
};
