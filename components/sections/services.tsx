import Link from "next/link";
import { SERVICES } from "@/lib/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-4">
            Services
          </span>
          <h2 id="services-heading" className="font-display text-4xl font-extrabold text-[#0B2341] tracking-tight mb-4">
            Quality Engineering Expertise
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            End-to-end quality engineering solutions tailored to your team's maturity, technology stack, and business goals.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <StaggerItem key={service.id}>
              <div className="group relative flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80 hover:border-emerald-200 overflow-hidden">
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B2341] mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2 flex-1" aria-label={`${service.title} includes`}>
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 font-display group/link"
                >
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
