import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Stakweb offer?",
      answer:
        "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, cloud solutions, cybersecurity, and digital marketing.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise solution could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various maintenance and support packages to ensure your digital solutions remain up-to-date and perform optimally. Our team is always available for technical support and updates.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing models including project-based, hourly rates, and retainer options. Each solution is customized to your specific needs, and we provide detailed quotes after understanding your requirements.",
    },
    {
      question: "How do you ensure project security and confidentiality?",
      answer:
        "We implement industry-standard security protocols and sign NDAs to protect your intellectual property. Our team follows strict security guidelines and best practices throughout the development process.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Find answers to common questions about our services and
                processes.
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border rounded-lg bg-white px-4"
                  >
                    <AccordionTrigger className="text-left hover:text-[#FF6B35] transition-colors py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* Image Column */}
          <div className="relative lg:sticky lg:top-20">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional consultant"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
