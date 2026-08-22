import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { HeroSection } from "@/components/sections/hero";
import { TrustedBySection } from "@/components/sections/trusted-by";
import { StatsSection } from "@/components/sections/stats";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { AiSection } from "@/components/sections/ai-section";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { TrainingSection } from "@/components/sections/training";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ProcessSection } from "@/components/sections/process";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <AiSection />
        <CaseStudiesSection />
        <TrainingSection />
        <TestimonialsSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
