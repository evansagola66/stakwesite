import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe2 } from "lucide-react";

export const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#0A2647] flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated Icons */}
        <motion.div
          className="absolute"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative w-32 h-32">
            {[Code2, Globe2, Cpu].map((Icon, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2"
                initial={{ rotate: (index * 360) / 3 }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                style={{
                  transformOrigin: "-50% -50%",
                }}
              >
                <Icon className="w-8 h-8 text-[#FF6B35]" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pulsing Circle */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#FF6B35]/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Loading Text */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h2
            className="text-2xl font-bold text-white mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading
          </motion.h2>
          <p className="text-gray-400 text-sm">Please wait...</p>
        </motion.div>
      </div>
    </div>
  );
};
