import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, ArrowLeft, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Web Development Excellence",
    description: "Creating powerful, scalable web applications",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=800&q=80",
  },
  {
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&w=800&q=80",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable and reliable cloud solutions",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&w=800&q=80",
  },
];

export function DemoVideoDialog() {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="group px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-colors">
          <span className="text-white group-hover:text-white/90 flex items-center gap-2">
            Our Work
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-black/95 border-gray-800">
        <div className="absolute right-4 top-4 z-50">
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
          >
            <X className="w-5 h-5 text-white group-hover:text-white" />
          </button>
        </div>
        <DialogHeader>
          <DialogTitle className="text-white">
            Stakweb Technology Solutions
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Explore our innovative solutions and success stories
          </DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-white/80">
                  {slides[currentSlide].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
