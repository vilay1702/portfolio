// Analytics utility for tracking user interactions
export const trackPageView = (pageName: string) => {
  // Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", "G-XXXXXXXXXX", {
      page_title: pageName,
      page_location: window.location.href,
    });
  }

  // Custom analytics
  console.log(`Page viewed: ${pageName}`);
};

export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  // Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, parameters);
  }

  // Custom analytics
  console.log(`Event tracked: ${eventName}`, parameters);
};

export const trackScroll = (section: string) => {
  trackEvent("scroll_to_section", {
    section_name: section,
    timestamp: new Date().toISOString(),
  });
};

export const trackThemeToggle = (theme: string) => {
  trackEvent("theme_toggle", {
    theme: theme,
    timestamp: new Date().toISOString(),
  });
};

export const trackProjectClick = (
  projectName: string,
  linkType: "code" | "live"
) => {
  trackEvent("project_click", {
    project_name: projectName,
    link_type: linkType,
    timestamp: new Date().toISOString(),
  });
};
