"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import type { ContactFormData } from "@/types";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  teamSize: z.string().min(1, "Please select a team size"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactItems = [
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 8668463837", href: "tel:+918668463837" },
  { icon: Mail, label: "Email", value: "er.rzash@gmail.com", href: "mailto:er.rzash@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rzashah", href: "https://linkedin.com/in/rzashah" },
  { icon: Github, label: "GitHub", value: "github.com/raza1709", href: "https://github.com/raza1709" },
  { icon: MapPin, label: "Location", value: "Pune, India", href: null },
];

const teamSizes = ["1–5 engineers", "6–20 engineers", "21–50 engineers", "50+ engineers"];
const services = [
  "QA Leadership / Fractional QA Head",
  "Playwright Automation",
  "API Testing",
  "Performance Engineering",
  "AI-Assisted QA",
  "Corporate Training",
  "QA Audit & Assessment",
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form data:", data);

    setLoading(true);

    try {
      console.log("Calling /api/contact...");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log("Status:", res.status);

      const responseData = await res.json();
      console.log("Response:", responseData);

      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/6 px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors duration-200 focus:border-emerald-500/50 focus:bg-white/8 font-sans";
  const errorClass = "mt-1 text-xs text-red-400";
  const labelClass = "block font-display text-xs font-medium uppercase tracking-wider text-white/45 mb-2";

  return (
    <section id="contact" className="bg-[#0B2341] py-24" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left info — 2/5 */}
          <FadeUp className="lg:col-span-2">
            <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-5">
              Get In Touch
            </span>
            <h2 id="contact-heading" className="font-display text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Let&rsquo;s Build Better Software Together
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8">
              Ready to improve your quality engineering? Book a free 30-minute QA assessment or reach out to discuss your needs.
            </p>

            <div className="space-y-3">
              {contactItems.map((item) => {
                const Tag = item.href ? "a" : "div";
                return (
                  <Tag
                    key={item.label}
                    {...(item.href
                      ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined }
                      : {})}
                    className="flex items-center gap-4 rounded-xl border border-white/7 bg-white/4 px-5 py-4 transition-colors duration-200 hover:bg-white/7 group"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/15">
                      <item.icon className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-white/35 mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-white">{item.value}</p>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </FadeUp>

          {/* Right form — 3/5 */}
          <FadeUp delay={0.2} className="lg:col-span-3">
            <div className="rounded-2xl border border-white/8 bg-white/4 p-8">
              <h3 className="font-display text-lg font-bold text-white mb-6">
                Book Free QA Assessment
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-14 w-14 text-emerald-400 mb-4" aria-hidden="true" />
                  <p className="font-display text-lg font-bold text-white mb-2">Message Sent!</p>
                  <p className="text-sm text-white/50">Thank you for reaching out. We&rsquo;ll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-emerald-400 hover:text-emerald-300 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name</label>
                      <input id="name" type="text" placeholder="John Smith" className={inputClass} {...register("name")} />
                      {errors.name && <p className={errorClass} role="alert">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address</label>
                      <input id="email" type="email" placeholder="john@company.com" className={inputClass} {...register("email")} />
                      {errors.email && <p className={errorClass} role="alert">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="company" className={labelClass}>Company</label>
                      <input id="company" type="text" placeholder="Acme Corp" className={inputClass} {...register("company")} />
                      {errors.company && <p className={errorClass} role="alert">{errors.company.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="teamSize" className={labelClass}>Team Size</label>
                      <select id="teamSize" className={inputClass + " appearance-none"} {...register("teamSize")}>
                        <option value="">Select team size</option>
                        {teamSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.teamSize && <p className={errorClass} role="alert">{errors.teamSize.message}</p>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="service" className={labelClass}>Service Interested In</label>
                    <select id="service" className={inputClass + " appearance-none"} {...register("service")}>
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className={errorClass} role="alert">{errors.service.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className={labelClass}>Your Challenge</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Describe your current QA challenges and what you're hoping to improve..."
                      className={inputClass + " resize-y"}
                      {...register("message")}
                    />
                    {errors.message && <p className={errorClass} role="alert">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-3.5 text-sm font-semibold font-display text-white hover:bg-emerald-600 disabled:opacity-60 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    {loading ? "Sending…" : <>Send Message <Send className="h-4 w-4" aria-hidden="true" /></>}
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
