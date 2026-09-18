import posthog from "posthog-js";

export function captureEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean>,
) {
  if (
    !process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ||
    !process.env.NEXT_PUBLIC_POSTHOG_HOST
  ) {
    return;
  }

  posthog.capture(eventName, properties);
}
