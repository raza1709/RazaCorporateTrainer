"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918668463837?text=Hi%20Raza%2C%20I%27m%20interested%20in%20your%20QA%20consulting%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-6 w-6 fill-white" aria-hidden="true" />
    </a>
  );
}
