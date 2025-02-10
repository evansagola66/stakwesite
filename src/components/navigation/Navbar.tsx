import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ServicesDropdown from "./ServicesDropdown";
import { Link } from "react-router-dom";
import { ContactDialog } from "../sections/ContactDialog";

interface NavbarProps {
  logo?: string;
  onMenuClick?: () => void;
  isMenuOpen?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  logo = "Stakweb",
  onMenuClick = () => {},
  isMenuOpen = false,
}) => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-[#0A2647]">
            {logo}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div
            className="relative"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <Link
              to="/services"
              className="text-gray-600 hover:text-[#FF6B35] transition-colors"
            >
              Services
            </Link>
            <ServicesDropdown isOpen={showServicesDropdown} />
          </div>
          <Link
            to="/about"
            className="text-gray-600 hover:text-[#FF6B35] transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-[#FF6B35] transition-colors"
          >
            Contact
          </Link>
          <ContactDialog />
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden p-2"
          onClick={onMenuClick}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden fixed inset-0 top-20 bg-white z-40 ${isMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/services"
              className="text-gray-600 hover:text-[#FF6B35] transition-colors py-2 border-b border-gray-100"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-[#FF6B35] transition-colors py-2 border-b border-gray-100"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-[#FF6B35] transition-colors py-2 border-b border-gray-100"
            >
              Contact
            </Link>
            <ContactDialog />
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
