import Hero from "@/components/home/Hero";
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
      <Stats />
      <ServicesPreview />
      
      {/* Scroll-triggered Text Reveal for About Story */}
      <ScrollTextReveal 
        title="Who We Are"
        tagline="Experts for the Next Generation."
        paragraph="We are a leading engineering team specializing in high-throughput Value Added Services (VAS). We build carrier-grade SMS gateways, direct billing solutions, and interactive USSD platforms. By connecting core telecommunication protocols with modern cloud pipelines, we deliver scalable subscription architectures for global networks."
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
