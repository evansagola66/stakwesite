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
import { useState } from "react";

export function ContactDialog() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-[#FF6B35] text-white hover:bg-[#FF8B5E] text-lg px-8 py-6 transition-all duration-300"
          type="button"
        >
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Started with Stakweb</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Input placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Input type="email" placeholder="Your email" required />
          </div>
          <div className="space-y-2">
            <Input placeholder="Company (optional)" />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Tell us about your project"
              className="min-h-[100px]"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#FF6B35] text-white hover:bg-[#FF8B5E]"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
