import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code,
  Palette,
  Settings,
  Smartphone,
  Globe,
  Database,
  Shield,
  Cloud,
  Cpu,
  LineChart,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesGridProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Custom web applications and sites built with modern technologies",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Native iOS and Android applications for your business",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "User-centered design solutions that delight your customers",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and hosting solutions",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Database Solutions",
    description: "Efficient data management and optimization strategies",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Comprehensive security audits and protection measures",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "SEO and online marketing to grow your presence",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "IT Consulting",
    description: "Expert technical strategy and advisory services",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Solutions",
    description: "Advanced machine learning integration services",
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Analytics",
    description: "Data analysis and reporting for informed decisions",
  },
];

const ServicesGrid: React.FC<ServicesGridProps> = ({
  services = defaultServices,
}) => {
  return (
    <section className="w-full min-h-screen bg-[#F8F9FA] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions to help your business thrive in
            the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#0A2647]/10 rounded-lg flex items-center justify-center text-[#0A2647] mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
