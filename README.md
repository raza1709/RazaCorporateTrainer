# Raza Shah — QA Consulting Website

Enterprise-grade personal brand website for Raza Shah, Quality Engineering Consultant.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Blog**: MDX + Contentlayer2
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Add your RESEND_API_KEY to .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── api/contact/       # Contact form API
│   ├── blog/              # Blog listing + [slug] pages
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout + metadata
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Auto-generated sitemap
│   └── robots.ts          # robots.txt
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # All page sections
│   └── ui/                # Shared UI components
├── content/
│   └── blog/              # MDX blog posts
├── lib/
│   ├── data.ts            # All site content
│   └── utils.ts           # Utility functions
└── types/
    └── index.ts           # TypeScript types
```

## Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "Brief description"
date: "2026-04-01"
category: "Playwright"
tags: ["playwright", "automation"]
author: "Raza Shah"
readingTime: 5
featured: false
---

Your content here...
```

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Add `RESEND_API_KEY` as an environment variable in your Vercel project settings.

## Customization

All site content is centralized in `lib/data.ts`. Update:
- `STATS` — your statistics
- `SERVICES` — your services
- `CASE_STUDIES` — your case studies
- `TRAINING_PROGRAMS` — your training programs
- `TESTIMONIALS` — client testimonials
- `FAQ_ITEMS` — FAQ answers

## Contact

Raza Shah — [er.rzash@gmail.com](mailto:er.rzash@gmail.com)
