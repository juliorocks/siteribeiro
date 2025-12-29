
import { MessageCircle } from "lucide-react";

export const WhatsAppFloatingButton = () => (
    <a
        href="https://wa.me/5532998119181?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 hover:bg-[#20bd5a] group"
        aria-label="Falar no WhatsApp"
    >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40" />
        <MessageCircle size={32} fill="currentColor" className="relative z-10" />
    </a>
);

