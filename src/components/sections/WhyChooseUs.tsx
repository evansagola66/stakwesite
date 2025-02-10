import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional consultant"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Enhance Your Business with Digital Innovation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In today's competitive landscape, digital transformation isn't
                just an option—it's a necessity for sustainable growth and
                profitability.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  title: "Increased Efficiency",
                  description:
                    "Streamline operations and reduce costs through automated processes and intelligent systems.",
                },
                {
                  title: "Market Expansion",
                  description:
                    "Reach new customers and markets through digital channels and innovative solutions.",
                },
                {
                  title: "Data-Driven Decisions",
                  description:
                    "Make informed business decisions based on real-time analytics and insights.",
                },
                {
                  title: "Competitive Edge",
                  description:
                    "Stay ahead of the competition with cutting-edge technology solutions.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <ArrowRight className="w-6 h-6 text-[#FF6B35] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
