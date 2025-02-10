import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

interface ServicesDropdownProps {
  isOpen?: boolean;
  onClose?: () => void;
}

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
      className="absolute top-full right-0 w-[280px] bg-white shadow-lg rounded-lg border border-gray-200"
    >
      <div className="max-h-[400px] overflow-y-auto scrollbar-none">
        {services.map((service) => (
          <Link
            key={service.title}
            to={`/services/${service.slug}`}
            onClick={() => {
              onClose();
            }}
            className="group flex items-start p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
          >
            <motion.div whileHover={{ x: 5 }} className="flex w-full">
              <div className="flex-shrink-0 mr-4 text-[#FF6B35] group-hover:text-[#FF8B5E]">
                <service.icon className="w-5 h-5" />
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
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesDropdown;
