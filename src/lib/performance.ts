// Performance monitoring utilities
export const performanceMetrics = {
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== "undefined" && window.performance) {
      const navigation = window.performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.fetchStart;
      return Math.round(loadTime);
    }
    return null;
  },

  // Measure First Contentful Paint
  measureFCP: () => {
    if (typeof window !== "undefined" && window.performance) {
      const paintEntries = window.performance.getEntriesByType("paint");
      const fcpEntry = paintEntries.find(
        (entry) => entry.name === "first-contentful-paint"
      );
      return fcpEntry ? Math.round(fcpEntry.startTime) : null;
    }
    return null;
  },

  // Measure Largest Contentful Paint
  measureLCP: () => {
    return new Promise<number | null>((resolve) => {
      if (typeof window === "undefined") {
        resolve(null);
        return;
      }

      if (!("PerformanceObserver" in window)) {
        resolve(null);
        return;
      }

      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve(Math.round(lastEntry.startTime));
      });

      observer.observe({ entryTypes: ["largest-contentful-paint"] });

      // Fallback timeout
      setTimeout(() => {
        observer.disconnect();
        resolve(null);
      }, 10000);
    });
  },

  // Measure Cumulative Layout Shift
  measureCLS: () => {
    return new Promise<number | null>((resolve) => {
      if (typeof window === "undefined") {
        resolve(null);
        return;
      }

      if (!("PerformanceObserver" in window)) {
        resolve(null);
        return;
      }

      let clsValue = 0;
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
      });

      observer.observe({ entryTypes: ["layout-shift"] });

      // Return CLS after page load
      setTimeout(() => {
        observer.disconnect();
        resolve(Math.round(clsValue * 1000) / 1000);
      }, 5000);
    });
  },

  // Measure First Input Delay
  measureFID: () => {
    return new Promise<number | null>((resolve) => {
      if (typeof window === "undefined") {
        resolve(null);
        return;
      }

      if (!("PerformanceObserver" in window)) {
        resolve(null);
        return;
      }

      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          resolve(Math.round((entry as any).processingStart - entry.startTime));
          observer.disconnect();
        }
      });

      observer.observe({ entryTypes: ["first-input"] });

      // Fallback timeout
      setTimeout(() => {
        observer.disconnect();
        resolve(null);
      }, 10000);
    });
  },
};

// Web Vitals reporting
export const reportWebVitals = async () => {
  try {
    const metrics = {
      fcp: await performanceMetrics.measureFCP(),
      lcp: await performanceMetrics.measureLCP(),
      cls: await performanceMetrics.measureCLS(),
      fid: await performanceMetrics.measureFID(),
      loadTime: performanceMetrics.measurePageLoad(),
    };

    // Log metrics in development
    if (process.env.NODE_ENV === "development") {
      console.log("Web Vitals:", metrics);
    }

    // Send to analytics in production
    if (
      process.env.NODE_ENV === "production" &&
      typeof window !== "undefined"
    ) {
      // This would be implemented with your analytics service
      // window.gtag('event', 'web_vitals', metrics);
    }

    return metrics;
  } catch (error) {
    console.error("Error measuring Web Vitals:", error);
    return null;
  }
};

// Resource loading optimization
export const preloadResources = (resources: string[]) => {
  if (typeof document === "undefined") return;

  resources.forEach((resource) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = resource;

    // Determine resource type
    if (resource.endsWith(".js")) {
      link.as = "script";
    } else if (resource.endsWith(".css")) {
      link.as = "style";
    } else if (resource.match(/\.(png|jpg|jpeg|gif|webp|svg)$/)) {
      link.as = "image";
    } else if (resource.match(/\.(woff|woff2|ttf|eot)$/)) {
      link.as = "font";
      link.crossOrigin = "anonymous";
    }

    document.head.appendChild(link);
  });
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }

  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Debounce function for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Image optimization utilities
export const imageOptimization = {
  // Generate responsive image srcsets
  generateSrcSet: (baseUrl: string, sizes: number[]) => {
    return sizes.map((size) => `${baseUrl}?w=${size}&q=80 ${size}w`).join(", ");
  },

  // Generate responsive image sizes attribute
  generateSizes: (breakpoints: string[]) => {
    return breakpoints.join(", ");
  },

  // Optimize image loading with blur effect
  generatePlaceholder: (width: number, height: number) => {
    return `data:image/svg+xml;base64,${btoa(
      `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <rect width="100%" height="100%" fill="url(#pattern)"/>
        <defs>
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="#f0f0f0"/>
            <rect width="20" height="20" fill="#e0e0e0"/>
            <rect x="20" y="20" width="20" height="20" fill="#e0e0e0"/>
          </pattern>
        </defs>
      </svg>`
    )}`;
  },
};

// Animation performance optimization
export const animationOptimization = {
  // Use requestAnimationFrame for smooth animations
  requestAnimationFrame: (callback: FrameRequestCallback) => {
    if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
      return window.requestAnimationFrame(callback);
    }
    return setTimeout(callback, 16); // Fallback for ~60fps
  },

  // Cancel animation frame
  cancelAnimationFrame: (id: number) => {
    if (typeof window !== "undefined" && "cancelAnimationFrame" in window) {
      return window.cancelAnimationFrame(id);
    }
    return clearTimeout(id); // Fallback
  },

  // Use CSS transforms for better performance
  useTransform: (element: HTMLElement, x: number, y: number) => {
    if (!element) return;
    element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  },

  // Use will-change for animations
  setWillChange: (element: HTMLElement, properties: string) => {
    if (!element) return;
    element.style.willChange = properties;
  },

  // Remove will-change after animation
  removeWillChange: (element: HTMLElement) => {
    if (!element) return;
    element.style.willChange = "auto";
  },
};

// Memory management utilities
export const memoryManagement = {
  // Clean up event listeners
  removeEventListeners: (element: HTMLElement, events: string[]) => {
    if (!element) return;

    events.forEach((event) => {
      element.removeEventListener(event, () => {}, false);
    });
  },

  // Clean up timers
  clearTimers: (timers: NodeJS.Timeout[]) => {
    timers.forEach((timer) => clearTimeout(timer));
  },

  // Clean up observers
  disconnectObservers: (observers: IntersectionObserver[]) => {
    observers.forEach((observer) => observer.disconnect());
  },
};

// Performance monitoring for critical resources
export const criticalResourceMonitoring = {
  // Monitor critical resource loading
  monitorCriticalResources: (resources: string[]) => {
    if (typeof window === "undefined" || !("PerformanceObserver" in window)) {
      return;
    }

    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (resources.includes(entry.name)) {
          // Log performance for critical resources
          if (process.env.NODE_ENV === "development") {
            console.log(`Critical resource loaded: ${entry.name}`, {
              duration: entry.duration,
              size: (entry as any).transferSize,
            });
          }
        }
      }
    });

    observer.observe({ entryTypes: ["resource"] });
  },
};

// Performance API wrapper
export const performanceAPI = {
  // Mark performance events
  mark: (name: string) => {
    if (
      typeof window !== "undefined" &&
      "performance" in window &&
      "mark" in window.performance
    ) {
      window.performance.mark(name);
    }
  },

  // Measure performance between marks
  measure: (name: string, startMark: string, endMark?: string) => {
    if (
      typeof window !== "undefined" &&
      "performance" in window &&
      "measure" in window.performance
    ) {
      window.performance.measure(name, startMark, endMark);
    }
  },

  // Get performance entries
  getEntries: (type?: string) => {
    if (
      typeof window !== "undefined" &&
      "performance" in window &&
      "getEntriesByType" in window.performance
    ) {
      return type
        ? window.performance.getEntriesByType(type)
        : window.performance.getEntries();
    }
    return [];
  },
};
