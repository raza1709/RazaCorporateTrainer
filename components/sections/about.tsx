import { EXPERTISE_ITEMS, TECH_BADGES } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { CheckSquare } from "lucide-react";

const timelineItems = [
  { label: "15+", title: "Enterprise QA Leadership", desc: "Led QA organizations across FinTech, HealthTech & SaaS" },
  { label: "200+", title: "Mentorship & Training", desc: "Trained QA professionals across India and globally" },
  { label: "AI", title: "AI Testing Pioneer", desc: "Building AI-assisted testing frameworks since 2022" },
  { label: "⚡", title: "Playwright Specialist", desc: "Enterprise automation architecture & CI/CD integration" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left text */}
          <FadeUp>
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-5">
              About
            </span>
            <h2 id="about-heading" className="font-display text-4xl font-extrabold text-[#0B2341] tracking-tight leading-tight mb-5">
              Turning Quality Into A Competitive Advantage
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mb-4">
              With 15+ years of experience across startups and enterprise organizations, I help engineering teams build robust quality practices that accelerate delivery without compromising reliability.
            </p>
            <p className="text-base text-slate-500 leading-relaxed mb-8">
              From architecting Playwright automation frameworks to leading QA transformations and training hundreds of engineers — my focus is on measurable outcomes that matter to your business.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {EXPERTISE_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <CheckSquare className="h-4 w-4 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {TECH_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 transition-all duration-200 hover:border-[#0B2341] hover:bg-[#0B2341] hover:text-white cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* Right card */}
          <FadeUp delay={0.2}>
            <div className="rounded-2xl bg-[#0B2341] p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">
                Career Highlights
              </p>
              <div className="space-y-5">
                {timelineItems.map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/15 text-xs font-bold text-emerald-400 font-display">
                      {item.label}
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold text-white mb-0.5">{item.title}</p>
                      <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/8">
                <a
                  href="#contact"
                  className="block w-full rounded-lg bg-emerald-500 py-3 text-center text-sm font-semibold font-display text-white hover:bg-emerald-600 transition-colors duration-200"
                >
                  Book Free QA Assessment
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
