import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Award, Rocket, CheckCircle } from "lucide-react";
import { ContactDialog } from "./ContactDialog";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge solutions",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our primary focus",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering quality in every project",
  },
  {
    icon: Rocket,
    title: "Growth Mindset",
    description: "Continuously evolving and improving",
  },
];

const achievements = [
  { number: "10+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Tech Partners" },
  { number: "95%", label: "Client Satisfaction" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0A2647]">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#FF6B35]">Stakweb</span>
            </h1>
            <p className="text-xl text-gray-300">
              Transforming businesses through innovative technology solutions
              since 2013
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              Our Mission & Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              At Stakweb, we're driven by a passion for technology and
              innovation. Our mission is to empower businesses with cutting-edge
              digital solutions that drive growth and success.
            </p>
            <ul className="space-y-4">
              {[
                "Delivering innovative technology solutions",
                "Building long-term client partnerships",
                "Maintaining the highest quality standards",
                "Fostering a culture of continuous learning",
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&w=800&q=80"
                alt="Diverse Team Meeting"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647] via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Our Core Values
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <value.icon className="w-12 h-12 text-[#FF6B35] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#FF6B35] mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-300">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <ContactDialog />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
