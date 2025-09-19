## 🚀 SaaS Boilerplate – T3 Stack + Drizzle + Auth.js

A **production-ready SaaS starter kit** that handles authentication, billing, multi-tenancy, RBAC, and team collaboration — so you can focus on building your product, not boilerplate.

---

### ✨ Features

- **Next.js 14 + App Router** – Modern, scalable React framework.
- **Auth.js** – Flexible authentication strategy.
- **Drizzle ORM** – Type-safe, lightweight, and SQL-first.
- **PostgreSQL** – Reliable relational database.
- **Stripe Integration** – Subscription & metered billing.
- **Multi-tenancy** – Isolated tenant data with slug-based routing.
- **RBAC (Role-Based Access Control)** – Granular permissions.
- **Team Management** – Invite members, assign roles.
- **Email Automation** – Welcome emails, team invites.
- **Admin Dashboard** – Manage tenants, users, and subscriptions.
- **API Routes** – For auth, billing, and tenant management.

---


---

### 🔧 Getting Started

#### 1️⃣ Install dependencies

```bash
pnpm install
```

#### 2️⃣ Configure environment

Create `.env`:

```env
DATABASE_URL="postgresql://user:pass@host:port/db"
NEXTAUTH_SECRET="your-secret"
STRIPE_SECRET_KEY="your-stripe-secret"
STRIPE_WEBHOOK_SECRET="your-webhook-secret"
EMAIL_SERVER="smtp://..."
EMAIL_FROM="noreply@yourapp.com"
```

#### 3️⃣ Run migrations

```bash
pnpm drizzle-kit generate
pnpm drizzle-kit push
```

#### 4️⃣ Start dev server

```bash
pnpm dev
```

---

### 💡 Usage Example

If you’re launching a SaaS:

1. Clone this repo.
2. Customize the **marketing pages** in `src/app/(marketing)`.
3. Modify **DB schemas** in `src/db/schema` to fit your domain.
4. Implement your **business logic** inside `src/lib`.
5. Deploy to **Vercel**, **AWS Lambda**, or **Cloudflare Workers**.

---

### 📦 Deployment

- **Vercel**: Push to GitHub and connect repo.
- **AWS Lambda**: Use `@vercel/nft` for bundling.
- **Cloudflare Workers**: Use `next-on-pages`.

---

### 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Auth.js](https://authjs.dev/)
- [Stripe](https://stripe.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

### 📜 License

MIT — free to use in personal and commercial projects.

---
