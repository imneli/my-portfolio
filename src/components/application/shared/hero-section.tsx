"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface HeroSectionProps {
  backgroundSrc: string;
  children: ReactNode;
  className?: string
}

export default function HeroSection({
  backgroundSrc,
  children,
  className
}: HeroSectionProps) {
  return (
    <div className={`min-h-screen bg-[#101010] text-gray-200 pb-20 relative`}>
      {/* Grid Pattern Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '-1px -1px'
        }}
      />

      <div className="relative h-[40vh] md:h-[40vh] w-full">
        <Image
          src={backgroundSrc}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0" />
      </div>

      <section className="bg-[#101010] relative">
        <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
          {children}
        </div>
      </section>
    </div>
  );
}
