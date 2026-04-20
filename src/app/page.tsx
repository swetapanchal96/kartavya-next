import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import AboutUs from "./Components/AboutSection";
import WhyChooseUs from "./Components/WhyChoose";
import FounderSection from "./Components/FounderSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <FounderSection />
    </div>
  );
}
