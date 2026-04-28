import FinalCta from "@/components/sections/FinalCta";
import Hero from "@/components/sections/Hero";
import SpecializedDivisions from "@/components/sections/SpecializedDivisions";
import Testimonials from "@/components/sections/Testimonials";
import WhyChoose from "@/components/sections/WhyChoose";

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
