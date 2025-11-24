"use client";

import { useRef } from "react";
import ModuleSectionWrapper from "../components/section-layout";
import {
  Github,
  ExternalLink,
  Code2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

interface IPersonalProject {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack: string[];
}

const projects: IPersonalProject[] = [
  {
    title: "Lead Scrapper and Capture",
    description:
      "Projeto pessoal para procura de possíveis clientes utilizando Webhooks do Discord e Google Maps para atrair clientes",
    image: "/assets/lead-scrapper.png",
    githubUrl: "https://github.com/imneli/lead-capture",
    techStack: ["Scrapping", "JavaScript"],
  },
  {
    title: "Proxy Validator Tool",
    description:
      "Uma ferramenta de monitoramento e validação de proxies que coleta, valida e gerencia automaticamente listas de proxies de múltiplas fontes. Oferece validação em tempo real, integração com o Discord e CLI.",
    image: "/assets/proxy-validator.png",
    githubUrl: "https://github.com/imneli/proxy-validator-tool",
    techStack: ["JavaScript", "Node.js", "Socket.io"],
  },
];

const PersonalProjects = () => {
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
          personal_projects.dev
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
          <div
            key={index}
            className="relative group min-w-[320px] max-w-[340px] md:min-w-[420px] md:max-w-[440px] snap-center flex-shrink-0"
          >
            {/* Shadow layer */}
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 border border-white/20"></div>

            {/* Main card */}
            <div
              className="relative h-full bg-white border-2 border-black flex flex-col
                            transition-all duration-200 group-hover:-translate-y-1 group-hover:-translate-x-1"
            >
              {/* Image Section */}
              <div className="relative w-full h-44 md:h-48 bg-zinc-100 border-b-2 border-black overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Project type badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 text-xs font-bold font-tech px-3 py-1.5 border-2 border-black bg-purple-500 text-white uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <Code2 size={16} />
                    <span>Personal</span>
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-xl font-bold text-black font-pixel leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-black font-tech text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 border-t-2 border-dashed border-zinc-300 pt-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono bg-black text-white px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-block flex-1 focus:outline-none"
                    >
                      <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                      <div className="relative bg-white border-2 border-black px-4 py-2.5 transition-transform duration-75 group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5 group-active/btn:translate-x-1 group-active/btn:translate-y-1">
                        <div className="flex items-center justify-center gap-2 font-tech font-bold text-sm text-black">
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </div>
                      </div>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-block flex-1 focus:outline-none"
                    >
                      <div className="absolute inset-0 bg-black translate-x-1 translate-y-1"></div>
                      <div className="relative bg-green-400 border-2 border-black px-4 py-2.5 transition-transform duration-75 group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5 group-active/btn:translate-x-1 group-active/btn:translate-y-1">
                        <div className="flex items-center justify-center gap-2 font-tech font-bold text-sm text-black">
                          <ExternalLink className="w-4 h-4" />
                          <span>Preview</span>
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ModuleSectionWrapper>
  );
};

export default PersonalProjects;
