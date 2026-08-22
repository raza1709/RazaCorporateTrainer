import { PROCESS_STEPS } from "@/lib/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

export function ProcessSection() {
  return (
    <section id="process" className="bg-white py-24" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-4">
            How We Work
          </span>
          <h2 id="process-heading" className="font-display text-4xl font-extrabold text-[#0B2341] tracking-tight mb-4">
            How We Improve Quality
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            A proven, structured approach to quality transformation that delivers measurable results at every stage.
          </p>
        </FadeUp>

        <StaggerContainer className="relative grid grid-cols-1 md:grid-cols-5 gap-0">
          {/* connector line — desktop only */}
          <div
            className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.step}>
              <div className="group flex flex-col items-center text-center px-4 py-2">
                <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#0B2341] text-white font-display text-xl font-extrabold transition-all duration-300 group-hover:bg-emerald-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/25">
                  {step.step}
                </div>
                <p className="font-display text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-1">
                  Step {step.step}
                </p>
                <h3 className="font-display text-base font-bold text-[#0B2341] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
