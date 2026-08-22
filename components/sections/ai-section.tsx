import Link from "next/link";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { ArrowRight } from "lucide-react";

const aiFeatures = [
  { icon: "✨", title: "Jira Story → Test Cases", desc: "Auto-generate comprehensive test scenarios from user stories and acceptance criteria in seconds." },
  { icon: "🔍", title: "AI Requirement Analysis", desc: "Detect ambiguity, missing edge cases, and testability issues before a line of code is written." },
  { icon: "⚡", title: "Smart Regression Optimization", desc: "Reduce regression suite size by 60% while maintaining coverage through intelligent test selection." },
  { icon: "📈", title: "Defect Trend Analytics", desc: "Predictive defect hotspot identification to prioritize testing where it matters most." },
];

const testCases = [
  { status: "pass", text: "Valid email triggers reset email within 60s" },
  { status: "pass", text: "Invalid email shows appropriate error message" },
  { status: "pass", text: "Reset link expires after 24 hours" },
  { status: "pass", text: "Link is single-use — second attempt fails" },
  { status: "pass", text: "Password complexity requirements enforced" },
  { status: "pass", text: "Concurrent reset requests — only latest valid" },
  { status: "warn", text: "SQL injection in email field (security)" },
  { status: "warn", text: "Rate limiting after 5 failed attempts" },
];

export function AiSection() {
  return (
    <section id="ai" className="relative bg-[#0B2341] py-24 overflow-hidden" aria-labelledby="ai-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <FadeUp>
            <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-5">
              AI Quality Engineering
            </span>
            <h2 id="ai-heading" className="font-display text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              The Future of Testing is Intelligent
            </h2>
            <p className="text-base text-white/55 leading-relaxed mb-8">
              Move beyond manual test management. AI-driven QA accelerates coverage, predicts defects, and continuously optimizes your test strategy.
            </p>

            <div className="space-y-4 mb-10">
              {aiFeatures.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 items-start rounded-xl border border-white/7 bg-white/4 p-5 transition-all duration-250 hover:border-emerald-500/25 hover:bg-emerald-500/5"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-lg" aria-hidden="true">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-white mb-1">{f.title}</p>
                    <p className="text-xs text-white/40 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold font-display text-white hover:bg-emerald-600 transition-all duration-200 hover:-translate-y-0.5"
            >
              Request AI QA Assessment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeUp>

          {/* Right — mockup */}
          <FadeUp delay={0.2}>
            <div className="rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm">
              {/* Traffic lights */}
              <div className="flex gap-1.5 mb-5" aria-hidden="true">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>

              <p className="font-display text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
                AI Test Generator · Jira Integration
              </p>

              <div className="mb-3 text-xs text-white/35">
                User Story:{" "}
                <span className="text-white/60">
                  As a user, I want to reset my password via email link
                </span>
              </div>

              <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                ✦ AI Generated — 8 test cases
              </div>

              <div className="space-y-2" role="list" aria-label="Generated test cases">
                {testCases.map((tc) => (
                  <div
                    key={tc.text}
                    role="listitem"
                    className="flex items-center gap-3 rounded-lg bg-white/3 px-3 py-2.5 text-xs text-white/60"
                  >
                    <div
                      className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[9px] ${
                        tc.status === "pass"
                          ? "border border-emerald-500/30 bg-emerald-500/15 text-emerald-400"
                          : "border border-yellow-500/30 bg-yellow-500/15 text-yellow-400"
                      }`}
                      aria-label={tc.status === "pass" ? "Passed" : "Warning"}
                    >
                      {tc.status === "pass" ? "✓" : "!"}
                    </div>
                    {tc.text}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex gap-4 border-t border-white/7 pt-4">
                {[
                  { label: "Coverage", value: "94%", color: "text-emerald-400" },
                  { label: "Generated in", value: "1.2s", color: "text-emerald-400" },
                  { label: "Edge cases", value: "3", color: "text-yellow-400" },
                ].map((m) => (
                  <div key={m.label} className="text-xs text-white/30">
                    {m.label}: <span className={m.color}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
