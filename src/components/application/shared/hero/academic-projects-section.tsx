"use client";

import { useRef } from "react";
import ModuleSectionWrapper from "../components/section-layout";
import {
  ExternalLink,
  Calendar,
  Building2,
  ChevronLeft,
  ChevronRight,
  University,
} from "lucide-react";
import Image from "next/image";

// === INTERFACE DOS PROJETOS ACADÊMICOS ===
interface IAcademicProject {
  title: string;
  company: string;
  year: string;
  description: string;
  image: string;
  url: string;
  techStack?: string[];
}

const projects: IAcademicProject[] = [
  {
    title: "MAX - Sistema de Gestão de almoxarifados hospitalares",
    company: "DASA - Diagnósticos da América S.A.",
    year: "2025",
    description:
      "Plataforma completa para gerenciamento de almoxarifados com integração a Chat-Bot, lançamentos por voz e imagem.",
    image: "/academic/max.jpg",
    url: "https://max-showcase.vercel.app/",
    techStack: [
      "Next.js",
      "OpenAi API",
      "PostgresSql",
      "React Native",
      "Nest.js",
    ],
  },
  {
    title: "Dashboard para consumo de métricas em Stream ",
    company: "Mahindra Racing",
    year: "2024",
    description:
      "Construção de diversos scripts para captação de métricas de transmissão das corridas de Formula-E em tempo real. ",
    image: "/academic/mahindra-racing.png",
    url: "https://site-mahindra.netlify.app/",
    techStack: ["Next.js", "TypeScript", "Python", "C"],
  },
];

const AcademicProjects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 460;
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
          academic_projects.fiap
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
        className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group min-w-[320px] max-w-[320px] md:min-w-[420px] md:max-w-[440px] snap-center flex-shrink-0 cursor-pointer"
          >
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 border border-white/20"></div>

            <div
              className="relative h-full bg-white border-2 border-black overflow-hidden flex flex-col
                            transition-transform duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1"
            >
              <div className="relative w-full h-48 bg-zinc-100 border-b-2 border-black overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 text-xs font-bold font-tech px-3 py-1.5 border-2 border-black bg-red-500 text-white uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <University size={16} />
                    <span>FIAP</span>
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white border-2 border-black p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ExternalLink className="w-4 h-4 text-black" />
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-xl font-bold text-black font-pixel leading-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-2 text-sm text-zinc-600 font-tech border-t-2 border-dashed border-zinc-300 pt-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span className="font-semibold">{project.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <p className="text-black font-tech text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.techStack && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono bg-black text-white px-2 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </ModuleSectionWrapper>
  );
};

export default AcademicProjects;
