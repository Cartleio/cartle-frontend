"use client";
import { useState } from "react";
import Header from "./Header";
import Services from "./Services";
import HeroDiv from "./HeroDiv";
const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#F7F0E6] py-8">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <HeroDiv />
      <Services />
    </div>
  );
};

export default Hero;
