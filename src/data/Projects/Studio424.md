### Project title

**Studio 424 — Coworking & Creative Workspace Booking Platform**

### Project type/domain

Full-stack web platform for coworking-space operations, workspace discovery, hourly booking, memberships, payments, and administration.

### One-sentence description

A full-stack platform that lets customers discover and book coworking or creative spaces while giving administrators tools to manage spaces, memberships, bookings, payments, cancellations, and notifications.

### Business and technical context

Studio 424 is positioned as a coworking and creative workspace in Wicker Park, Chicago, serving entrepreneurs, freelancers, creative teams, and other workspace users.

The system consists of:

- A public/client-facing website for marketing, space discovery, search, filtering, sorting, space details, authentication, bookings, memberships, and payment history.
- An authenticated user portal for managing bookings, memberships, payments, cancellations, notifications, and profile information.
- An administrative portal for managing spaces, locations, amenities, users, bookings, payments, refunds, cancellations, memberships, notifications, and operational settings.
- A NestJS backend API backed by PostgreSQL.

### Responsibilities and contributions

The repository supports describing the following contributions, subject to confirming your personal ownership:

- Implemented domain modules for authentication, users, locations, spaces, amenities, bookings, memberships, payments, cancellations, refunds, notifications, settings, and administration.
- Built public space discovery with server-side search, filtering, sorting, pagination, location filtering, amenity filtering, capacity filtering, pricing filters, and availability-type filters.
- Implemented dedicated space detail pages showing photos, pricing, capacity, location, operating hours, blackout dates, amenities, and booking information.
- Connected authenticated hourly bookings to Stripe Checkout and webhook-based payment status updates.
- Implemented membership purchase and allocation workflows for membership-only spaces.
- Added booking availability rules including operating hours, blackout dates, booking duration rules, buffer time, timezone handling, and database-level prevention of overlapping bookings.
- Built cancellation and refund workflows for users and administrators.
- Built responsive admin interfaces for operational management, including server-side filtering and pagination.
- Added loading states and skeleton components for data-driven client and admin pages.
- Implemented JWT authentication, separate admin authentication, protected routes, token-expiration handling, CORS, Helmet security headers, request throttling, validation, and Swagger API documentation.
- Added PostgreSQL migrations, TypeORM entities, unit tests, integration tests, and Docker-based local development support.

### Key outcomes or impact

Known outcomes supported by the repository:

- Provides an end-to-end workflow from public space discovery through authenticated booking and Stripe checkout.
- Gives administrators centralized control over space inventory, availability, bookings, memberships, payments, refunds, cancellations, users, and notifications.
- Preserves booking and payment history when spaces or users are soft-deleted.
- Supports multiple space types, locations, hourly spaces, and membership-only spaces.

No verified business metrics are available in the repository. Confirm before adding:

- Number of users or administrators
- Number of locations or spaces
- Booking volume
- Revenue processed
- Conversion or performance improvements
- Production deployment status
- Client/customer outcomes

### Technologies used

- TypeScript
- Next.js 16 and React 19
- Next.js App Router
- Tailwind CSS 4
- shadcn/ui and Base UI
- Framer Motion
- TanStack React Query
- Axios
- Zustand
- NestJS 11
- TypeORM
- PostgreSQL 16
- JWT, Passport, bcrypt
- Stripe Checkout and Stripe webhooks
- Cloudinary
- Nodemailer
- Swagger/OpenAPI
- Jest and Supertest
- Docker and Docker Compose
- Node.js 22

### Confidentiality and anonymization considerations

Before publishing, confirm whether you can disclose:

- The Studio 424 or Work 424 name
- The Wicker Park, Chicago location
- Branding, logos, photos, and Cloudinary-hosted assets
- Stripe, Cloudinary, SMTP, database, and deployment details
- Internal admin URLs or API routes
- User names, email addresses, booking records, payment records, and membership data
- Repository or GitHub links

Never publish environment files, API keys, Stripe secrets, webhook secrets, database credentials, private Cloudinary credentials, real customer data, or internal authentication tokens.

Also avoid claiming guest checkout, social login, recurring bookings, add-ons, saved payment methods, or advanced analytics unless you separately confirm those features were implemented.
