import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
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

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesDropdownProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const defaultServices: ServiceItem[] = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Web Development",
    description: "Custom web applications and sites",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile Development",
    description: "iOS and Android applications",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "UI/UX Design",
    description: "User-centered design solutions",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Cloud Services",
    description: "Cloud infrastructure and hosting",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Database Solutions",
    description: "Data management and optimization",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Cybersecurity",
    description: "Security audits and solutions",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Digital Marketing",
    description: "SEO and online marketing",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "IT Consulting",
    description: "Technical strategy and advice",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "AI Solutions",
    description: "Machine learning integration",
  },
  {
    icon: <LineChart className="w-5 h-5" />,
    title: "Analytics",
    description: "Data analysis and reporting",
  },
];

const ServicesDropdown: React.FC<ServicesDropdownProps> = ({
  isOpen = true,
  onClose = () => {},
}) => {
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      display: "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      display: "block",
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={dropdownVariants}
      transition={{ duration: 0.2 }}
      className="absolute top-full right-0 w-[280px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
    >
      <div className="max-h-[400px] overflow-y-auto">
        {defaultServices.map((service, index) => (
          <motion.div
            key={service.title}
            className="group flex items-start p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
            whileHover={{ x: 5 }}
          >
            <div className="flex-shrink-0 mr-4 text-blue-600 group-hover:text-blue-700">
              {service.icon}
            </div>
            <div className="flex-grow">
              <h3 className="text-sm font-medium text-gray-900 flex items-center justify-between">
                {service.title}
                <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesDropdown;
