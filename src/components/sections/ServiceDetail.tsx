import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { showSuccessToast, showErrorToast } from "@/components/ui/custom-toast";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formRef.current) {
        const result = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            user_name: formRef.current?.user_name.value,
            user_email: formRef.current?.user_email.value,
            user_company: formRef.current?.user_company.value,
            message: formRef.current?.message.value,
            service_name: service?.title,
            reply_to: formRef.current?.user_email.value,
            to_email: "stakweblimited@gmail.com",
            from_name: formRef.current?.user_name.value,
            from_email: formRef.current?.user_email.value,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        );

        if (result.status === 200) {
          showSuccessToast(
            "Request sent successfully!",
            `We'll get back to you about ${service?.title} services soon.`,
          );
          formRef.current.reset();
        } else {
          throw new Error("Failed to send request");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      showErrorToast(
        "Failed to send request",
        "Please try WhatsApp instead or try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#0A2647]">
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />

        <div className="container mx-auto px-4">
          <Button
            asChild
            variant="ghost"
            className="group mb-8 text-white hover:text-white hover:bg-white/10 backdrop-blur-sm"
          >
            <Link to="/services" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Services
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <service.icon className="w-12 h-12 text-[#FF6B35]" />
                <h1 className="text-4xl font-bold text-white">
                  {service.title}
                </h1>
              </div>

              <p className="text-xl text-gray-300">{service.description}</p>

              <div className="space-y-6 mt-8">
                <h2 className="text-2xl font-semibold text-white">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start space-x-3 bg-white/5 p-4 rounded-lg"
                    >
                      <ArrowRight className="w-5 h-5 text-[#FF6B35] mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Contact Form Section */}
          <div className="mt-16 max-w-xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Get Started with {service.title}
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  name="user_company"
                  placeholder="Company (optional)"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent min-h-[120px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#FF6B35] text-white hover:bg-[#FF8B5E] text-lg py-6 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
