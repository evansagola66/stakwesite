import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function WhatsAppChat() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/254715881328", "_blank");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed bottom-24 right-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-10 h-10"
      onClick={handleWhatsAppClick}
    >
      <MessageSquare className="h-5 w-5" />
    </Button>
  );
}
