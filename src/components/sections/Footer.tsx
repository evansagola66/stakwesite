import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import {
  Loader2,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const email = form.user_email.value;

    // Debug logs
    console.log("Newsletter submission started");
    console.log("Email:", email);
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log(
      "Template ID:",
      import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
    );
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    try {
      const templateParams = {
        user_name: "Newsletter Subscriber",
        user_email: email,
        user_company: "",
        message: "Newsletter subscription request",
        reply_to: email,
        to_email: "stakweblimited@gmail.com",
        from_name: "Newsletter Subscriber",
        from_email: email,
      };

      console.log("Template params:", templateParams);

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Use the same template as contact form
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      if (result.status === 200) {
        toast({
          title: "Newsletter Subscription Successful!",
          description:
            "Thank you for subscribing to our newsletter. You'll receive updates soon.",
          variant: "default",
        });
        form.reset();
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Failed to subscribe",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#0A2647] text-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://api.dicebear.com/7.x/initials/png?seed=S&backgroundColor=0a2647&textColor=ff6b35&radius=0&size=128&scale=70"
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
                name="user_email"
                placeholder="Your email"
                required
                className="flex-1 px-4 py-2 bg-gray-800 text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
              />
              <Button
                type="submit"
                className="transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
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
