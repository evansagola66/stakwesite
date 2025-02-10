import React from "react";
import HeroSection from "./sections/HeroSection";
import ServicesGrid from "./sections/ServicesGrid";
import WhyChooseUs from "./sections/WhyChooseUs";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
