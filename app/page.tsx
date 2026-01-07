import Image from "next/image";
import HeroSection from "./component/herobanner";
import RiceVarietiesSection from "./component/RiceVarietiesSection";
import AboutSection from "./component/about-section";

import WhyChooseUs from "./component/WhyChooseUsSection";

export default function Home() {
  return (
    <div>
          <HeroSection />
        <AboutSection />
        <RiceVarietiesSection />
        <WhyChooseUs/>
    </div>
  );
}
