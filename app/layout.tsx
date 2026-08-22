import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const BASE_URL = "https://razashah.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Raza Shah — Quality Engineering Consultant & Playwright Expert",
    template: "%s | Raza Shah",
  },
  description:
    "Fractional QA Head, Quality Engineering Consultant, and Playwright Automation Expert. Helping startups and product teams deliver better software faster through automation, AI testing, and QA leadership.",
  keywords: [
    "Playwright Consultant",
    "QA Consultant India",
    "Fractional QA Head",
    "AI Testing Consultant",
    "Corporate QA Trainer Pune",
    "Test Automation Architect",
    "Quality Engineering Consultant",
    "Selenium Trainer India",
    "QA Leadership Consulting",
    "Performance Testing Consultant",
    "Playwright Training India",
    "Software Quality Consultant Pune",
  ],
  authors: [{ name: "Raza Shah", url: BASE_URL }],
  creator: "Raza Shah",
  // Canonical URL — prevents duplicate content issues
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    title: "Raza Shah — Quality Engineering Consultant",
    description:
      "Helping startups and product teams improve software quality through automation, QA leadership, performance engineering, and AI-assisted testing.",
    siteName: "Raza Shah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raza Shah — Quality Engineering Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raza Shah — Quality Engineering Consultant",
    description:
      "Fractional QA Head | Playwright Expert | AI Testing Advisor | Corporate Trainer",
    images: ["/og-image.png"],
    creator: "@rzashah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Replace with your actual code from Google Search Console
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        {/* Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Raza Shah",
              jobTitle: "Quality Engineering Consultant",
              description:
                "Fractional QA Head, Playwright Automation Expert, and Corporate Trainer with 15+ years of software quality experience.",
              url: BASE_URL,
              email: "er.rzash@gmail.com",
              telephone: "+918668463837",
              image: `${BASE_URL}/og-image.png`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              sameAs: [
                "https://linkedin.com/in/rzashah",
                "https://github.com/raza1709",
              ],
              knowsAbout: [
                "Playwright Automation",
                "Quality Engineering",
                "Test Automation",
                "AI Testing",
                "Performance Engineering",
                "QA Leadership",
                "Corporate Training",
                "API Testing",
              ],
            }),
          }}
        />
        {/* LocalBusiness schema — helps Google Maps & local search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Raza Shah — QA Consulting",
              description:
                "Quality Engineering Consulting, Playwright Automation, AI Testing, and Corporate Training services.",
              url: BASE_URL,
              telephone: "+918668463837",
              email: "er.rzash@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 18.5204,
                longitude: 73.8567,
              },
              areaServed: [
                { "@type": "Country", name: "India" },
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "United Kingdom" },
              ],
              serviceType: [
                "QA Consulting",
                "Test Automation",
                "Corporate Training",
                "Performance Engineering",
              ],
              priceRange: "$$",
            }),
          }}
        />
        {/* FAQPage schema — can appear as rich result in Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long does automation implementation typically take?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A basic Playwright framework can be live in 2–3 weeks. A comprehensive enterprise suite with CI/CD integration typically takes 6–8 weeks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you work with early-stage startups?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. I offer startup-friendly engagement models including fractional QA Head arrangements, which provide senior QA leadership without the full-time cost.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you train our existing QA team?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. I offer both onsite and remote corporate training programs, from 1-day workshops to multi-week bootcamps. Custom curriculum is available.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can AI improve our testing process?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. AI can reduce test case creation time by 60–80%, surface edge cases humans miss, and optimize which tests to run for any given code change.",
                  },
                },
              ],
            }),
          }}
        />
        {/* Course list schema — helps training programs appear in rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "QA Engineering Training Programs by Raza Shah",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Course",
                    name: "Playwright Automation Masterclass",
                    description:
                      "Complete Playwright framework from zero to CI/CD pipeline. Page Object Model, API testing, visual comparisons, and parallel execution.",
                    provider: { "@type": "Person", name: "Raza Shah" },
                    courseMode: "onsite",
                    educationalLevel: "Intermediate",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Course",
                    name: "AI for Test Engineers",
                    description:
                      "Practical AI tools for test case generation, defect prediction, intelligent test data, and AI-assisted automation writing.",
                    provider: { "@type": "Person", name: "Raza Shah" },
                    courseMode: "online",
                    educationalLevel: "Intermediate",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "Course",
                    name: "QA Leadership Program",
                    description:
                      "Quality strategy, team building, metrics-driven QA, stakeholder communication, and building a culture of quality.",
                    provider: { "@type": "Person", name: "Raza Shah" },
                    courseMode: "onsite",
                    educationalLevel: "Advanced",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
