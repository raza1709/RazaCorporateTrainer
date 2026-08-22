import { TRUSTED_COMPANIES } from "@/lib/data";

export function TrustedBySection() {
  return (
    <div className="bg-white py-12 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Trusted by engineering teams across industries
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {TRUSTED_COMPANIES.map((company) => (
            <div
              key={company}
              className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-bold text-slate-300 transition-all duration-250 hover:border-navy hover:bg-white hover:text-navy cursor-default select-none"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
