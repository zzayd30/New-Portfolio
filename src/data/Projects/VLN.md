
## Portfolio Project Draft

**Project title**
VLN — Vaste Lasten Nederland: Invoice & Household Finance Platform
*Confirm whether the project/client name can be public.*

**Project type/domain**
AI-assisted invoice processing, personal finance, household budgeting, and recurring expense management.

**One-sentence description**
A bilingual financial platform that converts uploaded invoices into structured expense records and provides dashboards for recurring costs, income, budgets, debts, and household financial activity.

**Business and technical context**
The platform addresses the difficulty of tracking invoices, bills, recurring payments, debts, and household finances in one place. Users can upload financial documents, review extracted information, manage recurring schedules, and monitor expenses through filtered dashboards. The application includes household membership, roles, permissions, authentication, email verification, and password recovery.

**Responsibilities and contributions**The following areas are evidenced in the codebase; confirm which ones accurately represent your personal responsibilities:

- Developed and maintained the Next.js application and dashboard experience.
- Implemented invoice upload, processing, review, confirmation, replacement, retry, and deletion flows.
- Integrated AI-assisted extraction of invoice fields such as company, amount, date, category, currency, and frequency.
- Built recurring transaction scheduling for monthly, weekly, yearly, and custom schedules.
- Implemented automated transaction creation and cron-based processing for recurring expenses and debt payments.
- Developed dashboard metrics, date filtering, expense categorization, charts, and financial summaries.
- Implemented authentication flows including registration, JWT sessions, email OTP verification, password reset, and logout.
- Added household membership, roles, permissions, invitations, income, budget, and debt management functionality.
- Added validation, rate limiting, protected API routes, activity logging, and MongoDB data isolation by household.
- Integrated external services for AI processing, SMTP email delivery, and S3-compatible document storage.

**Key outcomes or impact**

Verified functional outcomes from the repository include:

- Uploaded invoices can be converted into structured financial data.
- Recurring transactions are generated and advanced automatically.
- Users can distinguish paid and unpaid expenses.
- Financial data can be viewed by month or custom date range.
- Household income, budgets, debts, and expenses are available in a centralized dashboard.
- The interface supports English and Dutch localization.

No verified user, revenue, adoption, performance, or time-saving metrics were found in the repository. Add metrics only if you can confirm them.

**Technologies used**

- Next.js 16 and React 19
- TypeScript
- MongoDB with Mongoose
- Tailwind CSS and Radix/shadcn-style UI components
- React Hook Form and Zod
- OpenAI API
- `pdf-parse`, `pdfjs-dist`, and `@napi-rs/canvas`
- JWT, `bcryptjs`, and HTTP-only cookies
- Nodemailer with SMTP
- Node-cron
- Recharts
- `next-intl`
- AWS SDK for S3-compatible storage, including the configured R2 integration

**Confidentiality and anonymization**

- Do not publish database URLs, JWT secrets, SMTP credentials, API keys, storage credentials, or cron secrets.
- Do not include real invoice contents, household information, user IDs, email addresses, or financial amounts.
- Confirm whether “VLN / Vaste Lasten Nederland” and any branding may be publicly disclosed.
- If the project is client-owned or private, anonymize the name and describe it as a “household financial management platform.”
- Confirm whether screenshots can be shared and replace any real financial data with mock data.
