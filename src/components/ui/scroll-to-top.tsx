import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 z-50 bg-[#FF6B35] hover:bg-[#FF8B5E] text-white rounded-full shadow-lg w-10 h-10"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
}
