import { TESTIMONIALS } from "@/lib/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#0B2341] py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="font-display text-4xl font-extrabold text-white tracking-tight">
            What Teams Say
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.id}>
              <figure className="flex flex-col h-full rounded-2xl border border-white/8 bg-white/4 p-7 transition-all duration-300 hover:bg-white/7">
                <div className="flex gap-0.5 mb-5" aria-label="5 stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-base" aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="flex-1 mb-6">
                  <p className="text-sm text-white/65 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] font-bold text-emerald-400 font-display"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/35">{t.company}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
