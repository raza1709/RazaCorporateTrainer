"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const bars = [
  { label: "Playwright Tests", value: "847 / 900", pct: 94 },
  { label: "API Coverage", value: "98%", pct: 98 },
  { label: "Performance SLA", value: "99.2%", pct: 99 },
];

const metrics = [
  { label: "Automation Coverage", id: "cov", target: 87, suffix: "%" },
  { label: "Test Pass Rate", id: "pass", target: 96, suffix: "%" },
  { label: "Defect Leakage", id: "defect", target: 3, suffix: "%" },
  { label: "Release Readiness", id: "ready", target: 92, suffix: "%" },
];

function AnimatedMetric({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const dur = 1600;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(e * target));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    const delay = setTimeout(() => { frame = requestAnimationFrame(tick); }, 800);
    return () => { clearTimeout(delay); cancelAnimationFrame(frame); };
  }, [target]);
  return <span className="font-display text-2xl font-bold text-white">{val}{suffix}</span>;
}

function AnimatedBar({ pct, delay }: { pct: number; delay: number }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), delay);
    return () => clearTimeout(t);
  }, [pct, delay]);
  return (
    <div className="h-1.5 rounded-full bg-white/7 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0B2341] flex items-center pt-[68px] overflow-hidden"
      aria-label="Hero"
    >
      {/* Background radials */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/4 right-0 h-[700px] w-[700px] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-white/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="text-xs font-medium text-emerald-400">Available for Consulting Engagements</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5"
            >
              Build Better Software.<br />
              <em className="not-italic text-emerald-400">Deliver Quality</em><br />
              Faster.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-white/45 mb-4 font-medium"
            >
              Fractional QA Head · Quality Engineering Consultant · Playwright Automation Expert · Corporate Trainer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg"
            >
              Helping startups and product teams improve software quality through automation, QA leadership, performance engineering, and AI-assisted testing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3.5 text-sm font-semibold font-display text-white hover:bg-emerald-600 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                Book Free QA Assessment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/35 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Schedule Discovery Call
              </Link>
            </motion.div>
          </div>

          {/* Right — Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-xs font-semibold uppercase tracking-widest text-white/50">
                  QA Dashboard
                </span>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  Live
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {metrics.map((m) => (
                  <div
                    key={m.id}
                    className="rounded-xl border border-white/7 bg-white/4 p-4"
                  >
                    <p className="text-xs text-white/40 mb-1">{m.label}</p>
                    <AnimatedMetric target={m.target} suffix={m.suffix} />
                    <p className="text-[10px] text-emerald-400 mt-1">
                      {m.id === "defect" ? "↓ Reduced 40%" : "↑ Improving"}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="space-y-3">
                {bars.map((b, i) => (
                  <div key={b.label}>
                    <div className="flex justify-between text-xs text-white/40 mb-1.5">
                      <span>{b.label}</span>
                      <span>{b.value}</span>
                    </div>
                    <AnimatedBar pct={b.pct} delay={900 + i * 150} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
