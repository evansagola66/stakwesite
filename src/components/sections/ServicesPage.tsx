import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ContactDialog } from "./ContactDialog";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#0A2647]">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />
        <div className="container mx-auto px-4">
          <Button
            asChild
            variant="ghost"
            className="group mb-8 text-white hover:text-white hover:bg-white/10 backdrop-blur-sm"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white text-center mb-6"
          >
            Our <span className="text-[#FF6B35]">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-center max-w-2xl mx-auto text-lg"
          >
            Comprehensive technology solutions tailored to your business needs
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40" />
                <service.icon className="absolute top-4 right-4 w-8 h-8 text-[#FF6B35]" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-400"
                    >
                      <ArrowRight className="w-4 h-4 text-[#FF6B35] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center">
                  <Button
                    size="lg"
                    className="bg-[#FF6B35] text-white hover:bg-[#FF8B5E] text-lg px-8 py-6 transition-all duration-300"
                    asChild
                  >
                    <ContactDialog />
                  </Button>
                  <Link
                    to={`/services/${service.slug}`}
                    className="w-12 h-12 rounded-full bg-[#FF6B35] hover:bg-[#FF8B5E] flex items-center justify-center transition-all duration-300 group"
                  >
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
