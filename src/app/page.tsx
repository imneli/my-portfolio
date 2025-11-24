"use client";

import NameLayer from "@/components/application/shared/name-layer";
import HeroSection from "@/components/application/shared/hero-section";
import GroupMedia from "@/components/application/shared/group-media";
import AboutMe from "@/components/application/shared/hero/about-me";
import SectionTitle from "@/components/application/shared/components/section-title";
import Experiences from "@/components/application/shared/hero/experience-section";
import AcademicProjects from "@/components/application/shared/hero/academic-projects-section";
import PersonalProjects from "@/components/application/shared/hero/personal-projects-section";
import ContactSection from "@/components/application/shared/hero/contact-section";

export default function Page() {
  return (
    <HeroSection backgroundSrc="/banners/xadrez-bg.jpg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-center sm:items-start">
          <NameLayer />
        </div>

        <div className="flex justify-center sm:justify-end">
          <GroupMedia />
        </div>
      </div>

      <div id="about">
        <SectionTitle title="Sobre mim" />
        <AboutMe />
      </div>

      <div id="academic">
        <SectionTitle variant="accent" title="Projetos Acadêmicos" />
        <AcademicProjects />
      </div>

      <div id="experience">
        <SectionTitle variant="secondary" title="Experiências Profissionais" />
        <Experiences />
      </div>

      <div id="projects">
        <SectionTitle variant="primary" title="Projetos Pessoais" />
        <PersonalProjects />
      </div>

      <div id="contact">
        <SectionTitle variant="yellow" title="Contato" />
        <ContactSection />
      </div>
    </HeroSection>
  );
}
