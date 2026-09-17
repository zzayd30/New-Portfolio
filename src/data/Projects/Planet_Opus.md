
## Project title

Planet Opus — AI Custom Sticker Commerce Platform

## Project type/domain

Full-stack e-commerce platform combining generative AI, custom physical products, and community-created designs.

## One-sentence description

Planet Opus lets customers create custom sticker designs from text prompts or reference images, explore community designs, and purchase physical stickers online.

## Business and technical context

The platform supports the full customer journey from anonymous or registered-user design generation through cart management, checkout, payment, and order tracking. It also includes an administration portal for catalog management, pricing and shipping configuration, user management, community moderation, AI usage monitoring, and funnel analytics.

Generated images are stored using Cloudinary, payments are handled through Stripe, and the backend validates pricing and checkout data server-side.

## Responsibilities and contributions

The repository supports the following contributions, but personal ownership should be confirmed before publishing:

- `[Confirm]` Built or maintained the Next.js customer-facing experience for sticker creation, shopping, community browsing, cart, checkout, and order history.
- `[Confirm]` Implemented AI sticker generation from text prompts and uploaded/reference images.
- `[Confirm]` Integrated image storage and delivery through Cloudinary.
- `[Confirm]` Implemented authentication for customers, guests, administrators, and Google sign-in.
- `[Confirm]` Built server-side cart, pricing, shipping, order, and Stripe payment workflows.
- `[Confirm]` Added configurable sticker pricing, shipping thresholds, tracked shipping, and untracked shipping options.
- `[Confirm]` Created the admin dashboard for catalog, users, orders, community moderation, AI usage, and analytics.
- `[Confirm]` Added funnel analytics for events such as page views, prompt submissions, generations, cart activity, checkout, and completed purchases.
- `[Confirm]` Added SEO features including metadata, canonical URLs, sitemap, robots configuration, structured data, social metadata, and optimized image delivery.
- `[Confirm]` Added abuse protections including generation rate limiting, idempotency controls, server-side price validation, and Stripe webhook verification.

## Key outcomes and impact

No verified quantitative metrics are available in the repository.

Observable product outcomes include:

- Customers can move from an idea or image reference to a purchasable custom sticker.
- Guests can experience the generation workflow before creating an account.
- Users can browse, purchase, and remix public community designs.
- Administrators can manage commercial operations and review customer behavior in one application.
- Checkout pricing is protected from browser-side manipulation through server-side validation.

## Technologies used

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Node.js
- Express
- MongoDB with Mongoose
- Redis
- Stripe and Stripe.js
- Cloudinary
- Google authentication
- xAI/Grok image-generation integration
- Zustand
- React Hook Form
- Yup
- Recharts
- Joi
- JWT and bcrypt
- `node-cron`

## Confidentiality and anonymization concerns

- Do not publish `another.md`; it contains VPS access information and a GitHub token. If those credentials are real, they should be revoked or rotated.
- Confirm that Planet Opus may be named publicly and that screenshots may be used in your portfolio.
- Do not expose customer emails, prompts, generated images, order details, or admin analytics screenshots without anonymization and permission.
- Confirm whether infrastructure details, API providers, deployment setup, and business rules may be publicly disclosed.
- Avoid claiming revenue, conversion rates, user counts, performance improvements, or customer impact unless you have verified metrics.
