import { CASE_STUDIES } from "@/lib/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

export function CaseStudiesSection() {
  return (
    <section id="cases" className="bg-white py-24" aria-labelledby="cases-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-4">
            Case Studies
          </span>
          <h2 id="cases-heading" className="font-display text-4xl font-extrabold text-[#0B2341] tracking-tight mb-4">
            Real Results, Real Impact
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Measurable outcomes from quality engineering transformations across FinTech, Healthcare, and Enterprise SaaS.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <StaggerItem key={cs.id}>
              <article className="group flex flex-col h-full rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
                {/* Header */}
                <div className="bg-[#0B2341] p-7">
                  <p className="font-display text-[11px] font-bold uppercase tracking-widest text-emerald-400 mb-2">
                    {cs.industry}
                  </p>
                  <h3 className="font-display text-base font-bold text-white leading-snug">
                    {cs.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Challenge</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Solution</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cs.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded px-2 py-0.5 text-[11px] font-medium border border-slate-200 bg-slate-50 text-slate-500"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
                    <span className="text-xl" aria-hidden="true">{cs.resultIcon}</span>
                    <p className="font-display text-sm font-bold text-emerald-700">{cs.result}</p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
