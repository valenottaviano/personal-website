export const GA_TRACKING_ID = "G-Z5ENDXK868";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  try {
    if (window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
