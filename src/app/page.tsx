import Hero from "@/components/home/Hero";
import LogoMarquee from "@/components/home/LogoMarquee";
import Stats from "@/components/home/Stats";
import ServicesPreview from "@/components/home/ServicesPreview";
import ScrollTextReveal from "@/components/home/ScrollTextReveal";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TechStack from "@/components/home/TechStack";
import Process from "@/components/home/Process";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import ContactCallout from "@/components/home/ContactCallout";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <Hero />
      <LogoMarquee />
      <Stats />
      <ServicesPreview />
      
      {/* Scroll-triggered Text Reveal for About Story */}
      <ScrollTextReveal 
        title="Who We Are"
        tagline="Experts for the Next Generation."
        paragraph="We are a leading engineering team specializing in high-throughput distributed systems and intelligent enterprise software. We build resilient cloud architectures, custom AI pipelines, and mission-critical applications. By connecting cutting-edge machine learning models with modern cloud infrastructure, we deliver scalable solutions for global organizations."
        ctaText="Read Our Full Story"
        ctaHref="/about"
      />

      <WhyChooseUs />
      <TechStack />
      <Process />
      <PortfolioPreview />
      <Testimonials />
      <FAQ />
      <ContactCallout />
    </div>
  );
}
