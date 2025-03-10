import React from "react";
import Navbar from "../navigation/Navbar";
import Footer from "../sections/Footer";
import { ScrollToTop } from "../ui/scroll-to-top";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppChat } from "../ui/whatsapp-chat";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden w-full">
      <Navbar
        isMenuOpen={isMobileMenuOpen}
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ScrollToTop />
      <Toaster />
      <WhatsAppChat />
    </div>
  );
};

export default Layout;
