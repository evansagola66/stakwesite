import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./navigation/Navbar";
import HeroSection from "./sections/HeroSection";
import ServicesGrid from "./sections/ServicesGrid";
import Footer from "./sections/Footer";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        isMenuOpen={isMobileMenuOpen}
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="pt-20">
          <HeroSection />
          <ServicesGrid />
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Home;
