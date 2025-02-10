import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function ContactDialog({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          {
            reply_to: formRef.current?.user_email.value,
            to_email: "stakweblimited@gmail.com",
            from_name: formRef.current?.user_name.value,
            from_email: formRef.current?.user_email.value,
          },
        );
        setOpen(false);
        alert("Message sent successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try WhatsApp instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button
            size="lg"
            className="text-lg px-8 py-6 transition-all duration-200"
            type="button"
          >
            Get Started
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle>Get Started with Stakweb</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input name="user_name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Input
              name="user_email"
              type="email"
              placeholder="Your email"
              required
            />
          </div>
          <div className="space-y-2">
            <Input name="user_company" placeholder="Company (optional)" />
          </div>
          <div className="space-y-2">
            <Textarea
              name="message"
              placeholder="Tell us about your project"
              className="min-h-[100px]"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#FF6B35] text-white hover:bg-[#FF8B5E] transition-colors duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
