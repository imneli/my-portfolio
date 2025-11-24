"use client"; // Importante para usar useRef e onClick no Next.js

import { useRef } from "react";
import ModuleSectionWrapper from "../components/section-layout";
import {
  Briefcase,
  Calendar,
  MapPin,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// === SEUS DADOS MOCKADOS ===
interface IExperience {
  role: string;
  period: string;
  company: string;
  type: "FULL-TIME" | "CONTRACT" | "FREELANCE";
  location: string;
  description: string;
  techStack: string[];
}

const data: IExperience[] = [
  {
    role: "Junior Front-end Developer",
    period: "Jun 2025 - Present",
    company: "Baraúna Soluções Biológicas",
    type: "FULL-TIME",
    location: "São Paulo, SP (Remote)",
    description:
      "Atuei na refatoração completa da plataforma (React), otimizando performance e criando um Design System interno. Desenvolvi também a solução mobile com funcionamento offline e fila de dados, garantindo operação contínua no agronegócio.",
    techStack: ["React", "TypeScript", "C#"],
  },
  {
    role: "Front-end Developer",
    period: "Jun 2024 - Jun 2025",
    company: "Mini Groups LTDA",
    type: "CONTRACT",
    location: "Remote",
    description:
      "Alavanquei a plataforma do zero aos 10k+ usuários. Atuei no front-end e criei endpoints críticos no backend, implementando gamificação e chat em tempo real.",
    techStack: ["React", "Node.js", "Docker", "SEO"],
  },
  {
    role: "Fullstack Developer",
    period: "Jun 2024 - Ago 2024",
    company: "Spooner Transport",
    type: "FREELANCE",
    location: "Vancouver, Canada (Remote)",
    description:
      "Desenvolvi uma Landing Page integrada a uma API personalizada para envio de pedidos de transporte. A solução digitalizou o processo de solicitações da transportadora sediada em Vancouver.",

    techStack: ["React", "Node.js", "API Rest", "Styled Components"],
  },
  {
    role: "Web Developer",
    period: "2 Week Sprint",
    company: "Trend Vision",
    type: "FREELANCE",
    location: "Remote",
    description:
      "Desenvolvi uma Landing Page de captação de usuários para enviar para a plataforma de vendas do produto final.",
    techStack: ["React", "Tailwind", "Typescript"],
  },
];

const Experiences = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <ModuleSectionWrapper className="flex flex-col gap-8">
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-xl font-pixel uppercase tracking-widest text-white">
          experience_log.json
        </h2>

        <div className="hidden md:flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="group relative inline-block focus:outline-none"
            aria-label="Scroll Left"
          >
            <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
            <div className="relative bg-white border-2 border-black p-2 transition-transform duration-75 group-active:translate-x-1 group-active:translate-y-1">
              <ChevronLeft className="w-6 h-6 text-black" />
            </div>
          </button>

          <button
            onClick={() => scroll("right")}
            className="group relative inline-block focus:outline-none"
            aria-label="Scroll Right"
          >
            <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
            <div className="relative bg-white border-2 border-black p-2 transition-transform duration-75 group-active:translate-x-1 group-active:translate-y-1">
              <ChevronRight className="w-6 h-6 text-black" />
            </div>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex  overflow-x-auto pb-8 gap-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
      >
        {data.map((xp, index) => (
          <div
            key={index}
            className="relative  group min-w-[320px] max-w-[350px] snap-center flex-shrink-0"
          >
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 border border-white/20"></div>

            <div
              className="relative pointer-events-none h-full bg-white border-2 border-black p-6 flex flex-col justify-between 
                            transition-transform duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span
                    className={`text-xs font-bold font-tech px-2 py-1 border border-black uppercase
                    ${
                      xp.type === "FULL-TIME"
                        ? "bg-blue-200"
                        : xp.type === "CONTRACT"
                        ? "bg-yellow-200"
                        : "bg-green-200"
                    } text-black`}
                  >
                    {xp.type}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black font-pixel leading-tight">
                    {xp.role}
                  </h3>
                  <p className="text-lg font-bold text-zinc-600 font-tech mt-1">
                    @{xp.company}
                  </p>
                </div>

                <div className="flex flex-col gap-1 text-sm text-zinc-500 font-tech border-t-2 border-dashed border-zinc-300 pt-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{xp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{xp.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-black font-tech text-sm leading-relaxed">
                  {xp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {xp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono bg-black text-white px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ModuleSectionWrapper>
  );
};

export default Experiences;
