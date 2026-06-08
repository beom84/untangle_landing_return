export const LANDING_VARIANT =
  process.env.NEXT_PUBLIC_LANDING_VARIANT?.trim() || "v2";

export type LandingVariant = typeof LANDING_VARIANT;
