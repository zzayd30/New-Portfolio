
## NECTY

**Project type/domain:**
B2B SaaS platform for AI-assisted opportunity monitoring, customer outreach, workspace management, and business insights.

**One-sentence description:**
NECTY helps businesses discover relevant opportunities across multiple platforms, manage outreach workflows, and monitor performance through an authenticated multi-workspace dashboard.

**Business and technical context:**
The project is a full-stack web application with onboarding, subscription billing, workspace invitations, role-based access, opportunity management, notifications, source monitoring, search-strategy summaries, and performance insights. It uses a separate backend/engine for data processing and AI-related workflows.

**Responsibilities and contributions:**Based on the repository work, contributions included:

- Built and maintained Next.js dashboard, settings, onboarding, notifications, insights, and workspace-management interfaces.
- Implemented and refined API routes for authentication, onboarding, workspaces, invitations, sources, search summaries, notifications, insights, billing, and administrative workflows.
- Integrated Supabase authentication, database access, row-level workspace scoping, and customer-safe data projections.
- Integrated Stripe onboarding, subscriptions, trials, and webhook-based billing state updates.
- Added invitation acceptance handling, membership validation, expiration handling, and workspace role restrictions.
- Improved security and reliability through request validation, rate limiting, verification cooldowns, safe error handling, optimistic-update rollback, and pagination.
- Developed UI loading states, skeletons, empty states, confirmation dialogs, filtering, retry handling, and responsive layouts.
- Added typed platform registries and corrected cross-platform insights mappings.
- Coordinated frontend/backend contracts for customer-safe views and database migrations.

**Key outcomes or impact:**

Verified technical outcomes include:

- Safer multi-workspace data access and customer-facing projections.
- More reliable onboarding, invitation, notification, and billing workflows.
- Support for multiple opportunity platforms, including YouTube.
- Improved handling of empty, delayed, failed, or incomplete backend data.
- Improved protection against invalid roles, malformed input, and repeated authentication requests.

Quantitative business metrics such as users, revenue, conversion rates, performance improvements, or production usage were not available in the repository. **Confirm before adding any numerical outcomes.**

**Technologies used:**

- Next.js with App Router
- React
- TypeScript
- Supabase and PostgreSQL
- Supabase Auth and Row-Level Security
- Stripe and Stripe webhooks
- Zustand
- Axios
- Zod
- React Hook Form
- Tailwind CSS
- Radix/shadcn-style UI components
- Lucide React
- Recharts
- Framer Motion
- Nodemailer
- CSV/XLSX processing
- Git and environment-based deployment configuration

Some dependencies, including Airtable-related packages, exist in the repository. **Confirm whether Airtable was actively used in the final production architecture before listing it as an integration.**

**Confidentiality and anonymization considerations:**

- Confirm whether the NECTY name and branding can be publicly disclosed.
- Do not publish Supabase project IDs, Stripe IDs, webhook secrets, API keys, SMTP credentials, backend URLs, or environment variables.
- Avoid exposing private repository links, internal database migration details, raw table names, or internal AI-engine terminology.
- Describe the separate backend generically as an “internal data-processing and AI services backend.”
- Do not identify customers, users, seeded data, or business-specific test records.
- Replace private deployment URLs and organization names with generic placeholders.
