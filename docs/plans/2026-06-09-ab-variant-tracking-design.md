## Landing A/B Variant Tracking

### Goal

- Compare copy-test performance in Amplitude without adding a second analytics SDK.
- Keep the implementation small and reuse the existing landing events.

### Recommended Approach

1. Keep using the existing Amplitude browser client.
2. Add a shared `landing_variant` event property to every tracked landing event.
3. Read the variant from `NEXT_PUBLIC_LANDING_VARIANT` so each deployment or environment can set `A`, `B`, or another experiment label without changing code.
4. Fall back to `unspecified` when the env var is missing so misconfigured builds remain visible in Amplitude.

### Why This Approach

- `page_viewed` already works as the exposure event for the experiment.
- Existing funnel events such as `cta_clicked`, `registration_success`, and `survey_completed` will automatically segment by variant.
- The server-side registration and survey APIs do not need to change because the experiment analysis only depends on client analytics.

### Validation

- Set `NEXT_PUBLIC_LANDING_VARIANT=A` or `B`.
- Load the landing page and confirm `page_viewed` includes `landing_variant`.
- Click the CTA and submit the form to confirm downstream events include the same property.
