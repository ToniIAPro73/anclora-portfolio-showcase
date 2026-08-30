export type ConversionEventType =
  | "page_view"
  | "cta_click"
  | "form_attempt"
  | "form_success"
  | "form_error";

export interface ConversionEvent {
  type: ConversionEventType;
  label: string;
  at: string;
}

/**
 * Simulated conversion tracker for the showcase demo.
 * Events are kept in local React state only and echoed to the console,
 * clearly prefixed. Nothing is ever sent to a network endpoint.
 */
export function createConversionEvent(
  type: ConversionEventType,
  label: string,
): ConversionEvent {
  const event: ConversionEvent = {
    type,
    label,
    at: new Date().toISOString(),
  };
  console.info("[demo:conversion-event:simulated]", event);
  return event;
}
