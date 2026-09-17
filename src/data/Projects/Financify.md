
## Financify

**Project title:** Financify

**Project type/domain:** Full-stack personal finance / fintech web application

**One-sentence description:**
A personal finance platform for managing accounts, tracking income and expenses, setting budgets, and using AI-assisted receipt scanning and automated financial reports.

**Business or technical context:**
Financify was built as a self-service financial management application. It supports authenticated users, multiple current and savings accounts, categorized transactions, recurring transactions, budget monitoring, visual spending summaries, and scheduled email notifications. No bank-account synchronization or external financial institution integrations are evident in the repository.

**Responsibilities and contributions:**Repository history and implementation indicate contributions including:

- Built the application end to end with Next.js and React.
- Implemented dashboard, account, transaction, budgeting, authentication, and onboarding flows.
- Designed the PostgreSQL data model using Prisma for users, accounts, transactions, recurring schedules, and budgets.
- Added server-side transaction and account operations, including balance updates and per-user data access.
- Implemented Clerk authentication and protected application routes.
- Built an AI receipt scanner using Google Gemini to extract transaction details and prefill forms.
- Added recurring transaction processing and scheduled background jobs with Inngest.
- Implemented budget threshold alerts and monthly financial summary emails using Resend and React Email.
- Added transaction charts and spending visualizations with Recharts.
- Added form validation with React Hook Form and Zod.
- Added Arcjet-based rate limiting and bot/security protections.

*Confirm which of these areas you personally owned before publishing.*

**Key outcomes or impact:**

- Delivered a working full-stack personal finance application with persistent data storage and authenticated user workflows.
- Centralized account, transaction, budget, recurring-payment, and reporting functionality in one application.
- Reduced manual receipt entry through AI-assisted extraction.
- Added automated background processing for recurring transactions, budget alerts, and monthly reports.

**Verified metrics:** None are documented in the repository. Confirm before including user counts, uptime, ratings, transaction volume, deployment status, or performance figures.

**Technologies used:**
Next.js, React, JavaScript, Tailwind CSS, Prisma, PostgreSQL, Clerk, Google Gemini, Inngest, Resend, React Email, Arcjet, Recharts, React Hook Form, Zod, date-fns, Lucide React, Radix UI, and Sonner.

**Confidentiality and anonymization notes:**

- Do not publish environment variables, API keys, database URLs, or email credentials.
- Do not present the static landing-page figures such as “1K+ Active Users,” “99.9% Uptime,” or “4.5/5 User Rating” as verified results without supporting evidence.
- Confirm whether Gemini, Resend, Inngest, and Arcjet were used in production or only configured during development.
- Avoid claiming bank integrations, multi-currency support, or credit-card support unless separately confirmed.
- Replace any real user information, email addresses, financial records, screenshots, or deployment credentials with anonymized examples.
