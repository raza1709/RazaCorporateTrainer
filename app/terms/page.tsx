import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for razashah.dev",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-[68px]">
        <div className="bg-[#0B2341] py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block">
              ← Back to Home
            </Link>
            <h1 className="font-display text-4xl font-extrabold text-white tracking-tight">Terms of Service</h1>
            <p className="mt-3 text-white/50 text-sm">Last updated: January 2026</p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-slate prose-headings:font-display prose-headings:text-[#0B2341] max-w-none">
          <h2>Services</h2>
          <p>Raza Shah provides quality engineering consulting, test automation services, and corporate training. The specific scope, deliverables, timeline, and fees for each engagement are defined in a separate Statement of Work (SOW) or consulting agreement.</p>

          <h2>Intellectual Property</h2>
          <p>Upon full payment, clients receive ownership of all custom code and documentation created specifically for their engagement. Pre-existing frameworks, methodologies, and reusable components remain the property of Raza Shah.</p>

          <h2>Confidentiality</h2>
          <p>All client information shared during engagements is treated as confidential. A Non-Disclosure Agreement (NDA) is available upon request and is standard for enterprise engagements.</p>

          <h2>Training Programs</h2>
          <p>Training materials provided during corporate training programs are licensed for internal use by the client organization only. Redistribution or resale is not permitted.</p>

          <h2>Limitation of Liability</h2>
          <p>Raza Shah's liability for any engagement is limited to the fees paid for that specific engagement. We are not liable for indirect, consequential, or incidental damages.</p>

          <h2>Contact</h2>
          <p>Questions about these terms: <a href="mailto:er.rzash@gmail.com">er.rzash@gmail.com</a></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
