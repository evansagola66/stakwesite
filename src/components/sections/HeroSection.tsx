import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Globe2 } from "lucide-react";
import { ContactDialog } from "./ContactDialog";
import { DemoVideoDialog } from "./DemoVideoDialog";

const HeroSection = () => {
  return (
    <section className="relative min-h-[800px] bg-[#0A2647] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />

      <div className="relative container mx-auto px-4 pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Floating Tags */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Code2, text: "Web Development" },
                { icon: Globe2, text: "Digital Solutions" },
                { icon: Cpu, text: "AI Integration" },
              ].map((tag, index) => (
                <motion.div
                  key={tag.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <tag.icon className="w-4 h-4 text-[#FF6B35]" />
                  <span className="text-sm text-white/90">{tag.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-6xl font-bold text-white leading-[1.1]"
              >
                Transform Your <span className="text-[#FF6B35]">Digital</span>{" "}
                Vision into Reality
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-300 max-w-lg"
              >
                We craft cutting-edge solutions that drive innovation and
                growth. From web development to AI integration, we're your
                partner in digital transformation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <ContactDialog />
                <DemoVideoDialog />
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
              >
                {[
                  { number: "500+", label: "Projects" },
                  { number: "95%", label: "Success Rate" },
                  { number: "50+", label: "Tech Partners" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="text-2xl font-bold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image */}
            <div className="relative w-full aspect-square max-w-[500px]">
              <motion.div
                animate={{
                  rotateZ: [0, 5, 0],
                  rotateX: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-full h-full rounded-3xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&w=500&q=80&auto=format"
                  alt="Tech Visual"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </motion.div>

              {/* Floating Element */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-[#FF6B35]/20 backdrop-blur-xl rounded-2xl"
              />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FF6B35] rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
