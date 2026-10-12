import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// For a fully-static site (no ISR, no on-demand revalidation),
// OpenNext defaults to in-memory implementations — no R2, D1, or DO required.
export default defineCloudflareConfig({});
