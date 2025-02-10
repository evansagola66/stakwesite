import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        {
          user_email: email,
          reply_to: email,
          to_email: "stakweblimited@gmail.com",
          from_email: email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      alert("Successfully subscribed!");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <footer className="bg-[#0A2647] text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://api.dicebear.com/7.x/initials/png?seed=S&backgroundColor=0a2647&textColor=ff6b35&radius=0&b=ffffff&size=128&scale=70"
                alt="Stakweb Logo"
                className="w-8 h-8"
              />
              <h3 className="text-xl font-bold">Stakweb</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Stay Business Ready - Transforming ideas into digital reality with
              cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF6B35] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF6B35] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/254715881328"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF6B35] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B35] transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-gray-400">+254 747 880 416</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-gray-400">stakweblimited@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-gray-400">
                  P.O Box 7995, Westlands, Nairobi, Kenya
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-2 bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
              />
              <Button type="submit" className="transition-all duration-300">
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Stakweb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
