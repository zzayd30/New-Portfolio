
## Kelvity

**Project type/domain:** AI document intelligence / financial research web application with subscription billing

**One-sentence description:**
Built a web platform that processes corporate financial PDFs and generates structured, evidence-based analysis, including financial insights, SWOT analysis, risks, disclosures, and company outlook.

**Business and technical context:**
Kelvity was designed to help users understand annual reports, 10-Ks, 10-Qs, earnings reports, and other financial documents more efficiently. The platform accepts PDF uploads, extracts text, uses OCR when necessary, classifies documents, and sends eligible financial reports to an OpenAI-powered analysis workflow. Results are validated, stored, visualized, and available for later review. The product explicitly avoids providing investment advice or buy/sell recommendations.

**Responsibilities and contributions:**Repository history and implementation suggest contributions across the full stack, including:

- Built responsive Next.js and React interfaces for the landing page, authentication, dashboard, upload flow, analysis history, detailed reports, subscriptions, credits, and admin tools.
- Implemented authenticated API routes and MongoDB/Mongoose data models for users, analysis jobs, subscriptions, plans, credit wallets, and transactions.
- Developed the PDF-processing pipeline using PDF.js text extraction with a Tesseract.js OCR fallback.
- Integrated OpenAI document classification and structured financial analysis with JSON normalization, validation, retry, and repair handling.
- Implemented background analysis jobs with processing states, polling, failure handling, and credit deduction.
- Integrated Stripe subscriptions, one-time credit purchases, plan changes, renewals, cancellations, and webhook processing.
- Added email verification, password recovery, SMTP email notifications, and quota/billing alerts.
- Added Meta Pixel event tracking and made report and dashboard interfaces responsive.

**Key outcomes or impact:**

- Delivered an end-to-end workflow from PDF upload to structured financial-analysis report.
- Added support for scanned/image-based PDFs through OCR fallback.
- Provided persistent analysis history and downloadable report output.
- No verified user, revenue, accuracy, processing-time, or adoption metrics were found in the repository. **Metrics need to be confirmed before publication.**

**Technologies used:**

Next.js, React, TypeScript, Tailwind CSS, Radix UI-based components, Node.js API routes, MongoDB, Mongoose, OpenAI API, PDF.js, Tesseract.js, `@napi-rs/canvas`, AWS SDK for S3-compatible object storage, Stripe, Nodemailer/SMTP, JWT, bcryptjs, Zod, Recharts, jsPDF, and Axios.

The exact AI model and storage provider are configured through environment variables and should be confirmed before being named publicly.

**Confidentiality and anonymization considerations:**

- Confirm whether “Kelvity” is public or should be replaced with a generic project name.
- Do not publish API keys, database URLs, JWT secrets, SMTP credentials, Stripe identifiers, bucket names, or environment-variable values.
- Anonymize client names, user information, uploaded financial reports, and internal email addresses.
- Confirm whether sending uploaded document text to OpenAI and storing files in S3-compatible storage may be disclosed.
- Avoid claiming “no third parties” unless that statement is accurate for the deployed architecture.
- Confirm whether the listed responsibilities represent your individual work or a team contribution.
