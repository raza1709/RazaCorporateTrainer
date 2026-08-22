import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for razashah.dev",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-[68px]">
        <div className="bg-[#0B2341] py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block">
              ← Back to Home
            </Link>
            <h1 className="font-display text-4xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
            <p className="mt-3 text-white/50 text-sm">Last updated: January 2026</p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-slate prose-headings:font-display prose-headings:text-[#0B2341] max-w-none">
          <h2>Information We Collect</h2>
          <p>When you submit the contact form on this website, we collect your name, email address, company name, team size, and message. This information is used solely to respond to your inquiry.</p>

          <h2>How We Use Your Information</h2>
          <p>Your information is used to respond to your consulting or training inquiry. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2>Email Communications</h2>
          <p>If you provide your email address, we may use it to respond to your inquiry and send relevant updates about QA consulting services. You may opt out at any time by replying with "unsubscribe."</p>

          <h2>Cookies</h2>
          <p>This website may use basic analytics cookies to understand website traffic. We do not use cookies for advertising or tracking across other sites.</p>

          <h2>Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. Form submissions are transmitted over encrypted HTTPS connections.</p>

          <h2>Contact</h2>
          <p>For any privacy-related questions, please contact: <a href="mailto:er.rzash@gmail.com">er.rzash@gmail.com</a></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
