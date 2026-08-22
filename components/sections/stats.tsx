import { STATS } from "@/lib/data";
import { Counter } from "@/components/ui/counter";
import { FadeUp } from "@/components/ui/motion-wrapper";

export function StatsSection() {
  return (
    <section className="bg-[#0B2341]" aria-label="Statistics">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-white/7">
          {STATS.map((stat, i) => (
            <FadeUp key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col items-center justify-center py-14 px-6 text-center">
                <div className="font-display text-4xl font-extrabold text-white leading-none mb-2">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-white/40 leading-snug">{stat.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
