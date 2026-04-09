import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/263784231146?text=Hello%20Power%20Milt!%20I%27d%20like%20to%20enquire%20about%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

export default WhatsAppButton;
