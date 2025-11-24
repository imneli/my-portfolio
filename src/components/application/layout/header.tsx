"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const ApplicationHeader = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    { label: "Sobre", href: "#about" },
    { label: "Acadêmico", href: "#academic" },
    { label: "Experiência", href: "#experience" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsSheetOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed text-white top-0 w-full z-50 flex justify-center items-center backdrop-blur-sm bg-black/50 border-b border-white/10">
      <div className="max-w-4xl w-full mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex gap-2 z-50">
          <Link href="/" className="hover:opacity-80 text-lg font-bold">
            <Image
              src="/neli-icon.jpg"
              alt="Profile picture"
              width={100}
              height={100}
              className="w-8 h-8 rounded-md"
            />
          </Link>
        </div>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="hover:opacity-60 transition-opacity font-tech text-sm uppercase tracking-widest cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button className="p-2 -mr-2 text-white hover:opacity-70">
                <Menu className="w-8 h-8" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="top"
              className="w-full h-screen bg-black border-none text-white flex flex-col items-center justify-center gap-10"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <div className="hidden">
                <SheetTitle>Menu de Navegação</SheetTitle>
                <SheetDescription>Links do site</SheetDescription>
              </div>

              <div className="flex flex-col gap-12 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="font-tech text-3xl lowercase tracking-widest hover:text-zinc-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default ApplicationHeader;
