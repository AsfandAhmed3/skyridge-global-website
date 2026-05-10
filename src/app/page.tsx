import FinalCta from "@/components/sections/FinalCta";
import Hero from "@/components/sections/Hero";
import SpecializedDivisions from "@/components/sections/SpecializedDivisions";
import Testimonials from "@/components/sections/Testimonials";
import WhyChoose from "@/components/sections/WhyChoose";

export const metadata = {
  title: "Your Gateway to Global Success | Skyridge Global",
  description:
    "Bespoke migration and business advisory for ultra-high-net-worth individuals seeking cross-border opportunities and trusted advisory support.",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SpecializedDivisions />
      <WhyChoose />
      <Testimonials />
      <FinalCta />
    </div>
  );
}
