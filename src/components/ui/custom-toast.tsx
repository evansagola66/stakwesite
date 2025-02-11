import { CheckCircle2, XCircle } from "lucide-react";
import { toast } from "./use-toast";

export const showSuccessToast = (title: string, description?: string) => {
  toast({
    title,
    description,
    duration: 5000,
    className: "bg-white border-green-500 border-l-4",
    icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
  });
};

export const showErrorToast = (title: string, description?: string) => {
  toast({
    title,
    description,
    duration: 5000,
    variant: "destructive",
    className: "bg-white border-red-500 border-l-4",
    icon: <XCircle className="w-5 h-5 text-red-500" />,
  });
};
