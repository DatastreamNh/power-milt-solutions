import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/263714704101?text=Hello%20Power%20Milt!%20I%27d%20like%20to%20enquire%20about%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Say hi on WhatsApp"
    className="fixed bottom-6 right-6 z-50 pl-2 pr-4 h-14 rounded-full bg-[#25D366] text-white flex items-center gap-2 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
  >
    <span className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
      <MessageCircle className="h-5 w-5" />
    </span>
    <span className="text-sm font-semibold tracking-tight">Say hi on WhatsApp</span>
  </a>
);

export default WhatsAppButton;
