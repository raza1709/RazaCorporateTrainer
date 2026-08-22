import Link from "next/link";
import { TRAINING_PROGRAMS } from "@/lib/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { ArrowRight } from "lucide-react";

export function TrainingSection() {
  return (
    <section id="training" className="bg-slate-50 py-24" aria-labelledby="training-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-4">
            Training Programs
          </span>
          <h2 id="training-heading" className="font-display text-4xl font-extrabold text-[#0B2341] tracking-tight mb-4">
            Upskill Your QA Team
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Hands-on corporate training programs designed to build modern quality engineering capabilities in your organization.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRAINING_PROGRAMS.map((program) => (
            <StaggerItem key={program.id}>
              <article className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-250 hover:border-emerald-200 hover:shadow-lg hover:shadow-slate-100">
                <div className="font-display text-3xl font-extrabold text-slate-100 mb-4 select-none">
                  {program.number}
                </div>
                <h3 className="font-display text-base font-bold text-[#0B2341] mb-3 leading-snug">
                  {program.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[program.duration, program.audience, program.mode].map((pill) => (
                    <span
                      key={pill}
                      className="rounded px-2 py-0.5 text-[11px] font-medium border border-slate-200 bg-slate-50 text-slate-500"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">
                  {program.description}
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold font-display text-emerald-600 hover:text-emerald-700 group/link"
                >
                  Request Proposal
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0B2341] px-7 py-3.5 text-sm font-semibold font-display text-white hover:bg-[#0e2d56] transition-colors duration-200"
          >
            Request Training Proposal
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
