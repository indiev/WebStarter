import ReactGA from 'react-ga';
import {
  FirstInputPolyfillEntry,
  NavigationTimingPolyfillEntry
} from 'web-vitals';

const TRACKING_ID = 'UA-12341234-1'; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const ga = () => {};
const gtag = () => {};

type Metric = {
  // The name of the metric (in acronym form).
  name: 'CLS' | 'FCP' | 'FID' | 'LCP' | 'TTFB';

  // The current value of the metric.
  value: number;

  // The delta between the current value and the last-reported value.
  // On the first report, `delta` and `value` will always be the same.
  delta: number;

  // A unique ID representing this particular metric that's specific to the
  // current page. This ID can be used by an analytics tool to dedupe
  // multiple values sent for the same metric, or to group multiple deltas
  // together and calculate a total.
  id: string;

  // Any performance entries used in the metric value calculation.
  // Note, entries will be added to the array as the value changes.
  entries: (
    | PerformanceEntry
    | FirstInputPolyfillEntry
    | NavigationTimingPolyfillEntry
  )[];
};

export const sendToGoogleAnalytics = ({ id, name, delta }: Metric) => {
  ReactGA.ga('send', 'event', {
    eventCategory: 'Web Vitals',
    eventAction: name,
    // Google Analytics metrics must be integers, so the value is rounded.
    // For CLS the value is first multiplied by 1000 for greater precision
    // (note: increase the multiplier for greater precision if needed).
    eventValue: Math.round(name === 'CLS' ? delta * 1000 : delta), // values must be integers
    // The `id` value will be unique to the current page load. When sending
    // multiple values from the same page (e.g. for CLS), Google Analytics can
    // compute a total by grouping on this ID (note: requires `eventLabel` to
    // be a dimension in your report).
    eventLabel: id, // id unique to current page load
    // Use a non-interaction event to avoid affecting bounce rate.
    nonInteraction: true, // avoids affecting bounce rate
    // Use `sendBeacon()` if the browser supports it.
    transport: 'beacon'
  });
};

// function sendToGoogleAnalyticsTag({ name, delta, id }: Metric) {
//   // Assumes the global `gtag()` function exists, see:
//   // https://developers.google.com/analytics/devguides/collection/gtagjs
//   gtag('event', name, {
//     event_category: 'Web Vitals',
//     // The `id` value will be unique to the current page load. When sending
//     // multiple values from the same page (e.g. for CLS), Google Analytics can
//     // compute a total by grouping on this ID (note: requires `eventLabel` to
//     // be a dimension in your report).
//     event_label: id,
//     // Google Analytics metrics must be integers, so the value is rounded.
//     // For CLS the value is first multiplied by 1000 for greater precision
//     // (note: increase the multiplier for greater precision if needed).
//     value: Math.round(name === 'CLS' ? delta * 1000 : delta),
//     // Use a non-interaction event to avoid affecting bounce rate.
//     non_interaction: true

//     // OPTIONAL: any additional params or debug info here.
//     // See: https://web.dev/debug-web-vitals-in-the-field/
//     // metric_rating: 'good' | 'ni' | 'poor',
//     // debug_info: '...',
//     // ...
//   });
// }

// Using gtag.js (Google Analytics 4)
// Google Analytics 4 introduces a new Event model allowing custom parameters
// instead of a fixed category, action, and label. It also supports non-integer
// values, making it easier to measure Web Vitals metrics compared to previous versions.

// function sendToGoogleAnalytics({name, delta, value, id}) {
//   // Assumes the global `gtag()` function exists, see:
//   // https://developers.google.com/analytics/devguides/collection/ga4
//   gtag('event', name, {
//     // Built-in params:
//     value: delta, // Use `delta` so the value can be summed.
//     // Custom params:
//     metric_id: id, // Needed to aggregate events.
//     metric_value: value, // Optional.
//     metric_delta: delta, // Optional.

//     // OPTIONAL: any additional params or debug info here.
//     // See: https://web.dev/debug-web-vitals-in-the-field/
//     // metric_rating: 'good' | 'ni' | 'poor',
//     // debug_info: '...',
//     // ...
//   });
// }
