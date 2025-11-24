"use client";

import { useState } from "react";
import ModuleSectionWrapper from "../components/section-layout";
import { Mail, Send, User, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio: Mensagem de ${formData.name}`;
    const body = `Nome: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensagem:%0D%0A${formData.message}`;

    window.location.href = `mailto:contatodoneli@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <ModuleSectionWrapper className="flex flex-col gap-8">
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-xl font-pixel uppercase tracking-widest text-white">
          contact_me.send
        </h2>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 border border-white/20"></div>

        <div className="relative bg-white border-2 border-black p-8 md:p-10 transition-all duration-200 ">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-black">
            <div className="bg-green-400 border-2 border-black p-2">
              <Mail className="w-6 h-6 text-black" />
            </div>
            <div>
              <h3 className="text-2xl font-pixel text-black">
                Envie uma mensagem
              </h3>
              <p className="text-sm font-tech text-zinc-600 mt-1">
                Responderei o mais breve possível!
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 font-tech font-bold text-sm text-black uppercase"
              >
                <User className="w-4 h-4" />
                Nome
              </label>
              <div className="relative group/input">
                <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="relative w-full bg-white border-2 border-black px-4 py-3 font-tech text-black focus:outline-none focus:-translate-x-0.5 focus:-translate-y-0.5 transition-transform"
                  placeholder="Seu nome completo"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center gap-2 font-tech font-bold text-sm text-black uppercase"
              >
                <Mail className="w-4 h-4" />
                Email
              </label>
              <div className="relative group/input">
                <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="relative w-full bg-white border-2 border-black px-4 py-3 font-tech text-black focus:outline-none focus:-translate-x-0.5 focus:-translate-y-0.5 transition-transform"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="flex items-center gap-2 font-tech font-bold text-sm text-black uppercase"
              >
                <MessageSquare className="w-4 h-4" />
                Mensagem
              </label>
              <div className="relative group/input">
                <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="relative w-full bg-white border-2 border-black px-4 py-3 font-tech text-black focus:outline-none focus:-translate-x-0.5 focus:-translate-y-0.5 transition-transform resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="group/btn relative inline-block w-full focus:outline-none"
            >
              <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
              <div className="relative bg-green-400 border-2 border-black px-6 py-4 transition-transform duration-75 group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5 group-active/btn:translate-x-1 group-active/btn:translate-y-1">
                <div className="flex items-center justify-center gap-3 font-tech font-bold text-base text-black">
                  <Send className="w-5 h-5" />
                  <span>ENVIAR MENSAGEM</span>
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </ModuleSectionWrapper>
  );
};

export default ContactSection;
