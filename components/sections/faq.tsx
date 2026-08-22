"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-slate-50 py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 mb-4">
            FAQ
          </span>
          <h2 id="faq-heading" className="font-display text-4xl font-extrabold text-[#0B2341] tracking-tight">
            Common Questions
          </h2>
        </FadeUp>

        <FadeUp className="max-w-3xl mx-auto">
          <dl className="space-y-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden"
                >
                  <dt>
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-question-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-sm font-semibold text-[#0B2341] hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500"
                    >
                      {item.question}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 flex-shrink-0 text-slate-400 transition-transform duration-300",
                          isOpen && "rotate-180 text-emerald-500"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </dt>
                  <dd
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      isOpen ? "max-h-96" : "max-h-0"
                    )}
                  >
                    <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">
                      {item.answer}
                    </p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </FadeUp>
      </div>
    </section>
  );
}
