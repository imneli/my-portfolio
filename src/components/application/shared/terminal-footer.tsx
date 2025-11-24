"use client";

import { Github, Linkedin, Twitter, Terminal, Instagram } from "lucide-react";

const TerminalFooter = () => {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const socialLinks = [
    { name: "github", icon: Github, url: "https://github.com/imneli" },
    {
      name: "linkedin",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/matheusmontovaneli/",
    },
    {
      name: "instagram",
      icon: Instagram,
      url: "https://www.instagram.com/theuwsx/",
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t-2 border-white/10">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Terminal Header */}
        <div className="relative group mb-6">
          <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
          <div className="relative bg-[#1a1a1a] border-2 border-green-400">
            {/* Terminal Title Bar */}
            <div className="bg-green-400 border-b-2 border-green-500 px-4 py-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-black" />
              <span className="font-tech font-bold text-xs text-black uppercase">
                footer.terminal
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-3">
              {/* User prompt */}
              <div className="flex items-start gap-2">
                <span className="text-green-400 flex-shrink-0">
                  user@neli:~$
                </span>
                <span className="text-white">whoami</span>
              </div>

              {/* Command output */}
              <div className="pl-6 space-y-2">
                <div className="flex flex-wrap gap-4 text-zinc-400">
                  <span>
                    PWD:{" "}
                    <span className="text-white">/home/neli/portfolio</span>
                  </span>
                  <span>
                    SHELL: <span className="text-white">/bin/zsh</span>
                  </span>
                  <span>
                    UPTIME: <span className="text-white">{currentDate}</span>
                  </span>
                </div>
              </div>

              {/* Social links command */}
              <div className="flex items-start gap-2 pt-2">
                <span className="text-green-400 flex-shrink-0">
                  user@neli:~$
                </span>
                <span className="text-white">./projects</span>
              </div>

              <div className="pl-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-zinc-500">./</span>
                    <span className="group-hover/link:underline">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>

              <div className="flex items-start gap-2 pt-2">
                <span className="text-green-400 flex-shrink-0">
                  user@neli:~$
                </span>
                <span className="text-zinc-500">█</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5">
          <p className="font-tech text-xs text-zinc-500">
            © {currentYear} Matheus Montovaneli. All rights reserved.
          </p>

          <div className="flex items-center gap-4 font-mono text-xs text-zinc-600">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "#about")}
              className="hover:text-green-400 transition-colors cursor-pointer"
            >
              ./about
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="hover:text-green-400 transition-colors cursor-pointer"
            >
              ./projects
            </a>
            <a
              href="#experience"
              onClick={(e) => scrollToSection(e, "#experience")}
              className="hover:text-green-400 transition-colors cursor-pointer"
            >
              ./experience
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="hover:text-green-400 transition-colors cursor-pointer"
            >
              ./contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TerminalFooter;
