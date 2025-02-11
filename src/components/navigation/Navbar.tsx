import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Users,
  Phone,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import ServicesDropdown from "./ServicesDropdown";
import { Link } from "react-router-dom";
import { ContactDialog } from "../sections/ContactDialog";
import { Button } from "@/components/ui/button";

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
  const [showMobileServices, setShowMobileServices] = useState(false);
  const handleServicesClick = () => setShowServicesDropdown(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 sm:h-20 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between max-w-[100vw]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://api.dicebear.com/7.x/initials/png?seed=S&backgroundColor=0a2647&textColor=ff6b35"
              alt="Stakweb Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-2xl font-bold text-[#0A2647]">{logo}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <Link
              to="/services"
              className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              Services
            </Link>
            <ServicesDropdown
              isOpen={showServicesDropdown}
              onClose={handleServicesClick}
            />
          </div>
          <Link
            to="/about"
            className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            About
          </Link>
          <ContactDialog>
            <button className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact
            </button>
          </ContactDialog>
          <ContactDialog>
            <Button
              size="lg"
              className="bg-[#FF6B35] text-white hover:bg-[#FF8B5E] transition-all duration-200"
            >
              Get Started
            </Button>
          </ContactDialog>
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
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                onClick={() => onMenuClick()}
              />
              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="lg:hidden fixed right-0 top-0 bottom-0 w-[300px] bg-white z-50 shadow-2xl flex flex-col min-h-screen"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://api.dicebear.com/7.x/initials/png?seed=S&backgroundColor=0a2647&textColor=ff6b35"
                        alt="Stakweb Logo"
                        className="w-6 h-6 rounded-lg"
                      />
                      <span className="text-lg font-semibold text-gray-900">
                        Menu
                      </span>
                    </div>
                    <button
                      onClick={() => onMenuClick()}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 py-4 px-4">
                    <nav className="space-y-2">
                      <Link
                        to="/"
                        className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => onMenuClick()}
                      >
                        <Home className="w-5 h-5" />
                        <span>Home</span>
                      </Link>

                      {/* Services Section */}
                      <div className="space-y-2">
                        <button
                          className="flex items-center justify-between w-full gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          onClick={() =>
                            setShowMobileServices(!showMobileServices)
                          }
                        >
                          <div className="flex items-center gap-3">
                            <Briefcase className="w-5 h-5" />
                            <span>Services</span>
                          </div>
                          <ArrowRight
                            className={`w-4 h-4 transition-transform ${showMobileServices ? "rotate-90" : ""}`}
                          />
                        </button>
                        {showMobileServices && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-1"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                onClick={() => {
                                  setShowMobileServices(false);
                                  onMenuClick();
                                }}
                              >
                                <service.icon className="w-4 h-4" />
                                <span>{service.title}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>

                      <Link
                        to="/about"
                        className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => onMenuClick()}
                      >
                        <Users className="w-5 h-5" />
                        <span>About</span>
                      </Link>

                      <ContactDialog>
                        <button
                          className="flex items-center w-full gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          onClick={() => onMenuClick()}
                        >
                          <Phone className="w-5 h-5" />
                          <span>Contact</span>
                        </button>
                      </ContactDialog>

                      <ContactDialog>
                        <Button
                          size="lg"
                          className="w-full bg-[#FF6B35] text-white hover:bg-[#FF8B5E] transition-all duration-200"
                        >
                          Get Started
                        </Button>
                      </ContactDialog>
                    </nav>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
