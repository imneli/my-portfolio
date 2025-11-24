"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppCTA = () => {
  const whatsappNumber = "5511974022204";
  const message = encodeURIComponent(
    "Olá! Vi seu portfólio e gostaria de conversar."
  );

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>

        <button
          onClick={handleClick}
          className="relative flex items-center justify-center p-4 
                     bg-[#25D366] border-2 border-black text-black
                     transition-transform duration-75
                     active:translate-x-1 active:translate-y-1" 
          aria-label="Enviar mensagem no WhatsApp"
        >
          <FaWhatsapp className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppCTA;
