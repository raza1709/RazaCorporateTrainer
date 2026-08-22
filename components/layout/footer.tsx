import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { label: "QA Leadership", href: "#services" },
    { label: "Playwright Automation", href: "#services" },
    { label: "API Testing", href: "#services" },
    { label: "Performance Engineering", href: "#services" },
    { label: "AI-Assisted QA", href: "#ai" },
  ],
  training: [
    { label: "Playwright Masterclass", href: "#training" },
    { label: "Selenium Bootcamp", href: "#training" },
    { label: "API Testing Workshop", href: "#training" },
    { label: "QA Leadership Program", href: "#training" },
    { label: "AI for Testers", href: "#training" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "#cases" },
    { label: "Free QA Assessment", href: "#contact" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ],
};

export function Footer() {
  return (
    <footer
      className="bg-[#071829] border-t border-white/5"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-xl font-extrabold text-white tracking-tight"
            >
              Raza<span className="text-emerald-400">Shah</span>
            </Link>
            <p className="mt-3 text-sm text-white/35 leading-relaxed max-w-[200px]">
              Build Better Software. Deliver Quality Faster.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://linkedin.com/in/rzashah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/raza1709"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:er.rzash@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-white/30">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              <span>Pune, India</span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-xs text-white/30">
              <Phone className="h-3 w-3" aria-hidden="true" />
              <span>+91 8668463837</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="font-display text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
              Training
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.training.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Raza Shah. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/25 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/25 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
