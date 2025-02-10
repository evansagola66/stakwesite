import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./sections/HeroSection";
import ServicesGrid from "./sections/ServicesGrid";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pt-20">
          <HeroSection />
          <ServicesGrid />
        </div>
      </motion.main>
    </div>
  );
};

export default Home;
