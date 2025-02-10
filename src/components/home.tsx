import React from "react";
import HeroSection from "./sections/HeroSection";
import ServicesGrid from "./sections/ServicesGrid";
import Footer from "./sections/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ServicesGrid />
      <Footer />
    </div>
  );
};

export default Home;
