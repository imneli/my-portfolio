"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, SparklesIcon } from "lucide-react"
import { Marquee } from "@/components/magicui/marquee"
import { ServerCard } from "@/components/ServerCard.tsx"
import server from "@/components/ServerCard.tsx/server.data.json"
import { ShinyButton } from "@/components/magicui/shiny-button"
import { LineShadowText } from "@/components/magicui/line-shadow-text"
import { BorderBeam } from "@/components/magicui/border-beam"
import { PortfolioGridItem, PortfolioGrid } from "@/components/ui/bento-grid";

export default function Page() {

    const items = [
        {
          title: "Gamers Club",
          members: 65000,
          serverIcon: "/servers/gc.png",
          backgroundImage: "/banners/gc_banner.png",
          status: "online",
          discordServer: "https://discord.gg/gamersclub" 
        },
        {
          title: "Flakes Power",
          members: 85000,
          serverIcon: "/servers/flakespower.png",
          backgroundImage: "/banners/banner_flakes.png",
          status: "online",
          discordServer: "https://discord.gg/flakespower" 
        },
        {
          title: "VALORANT BR",
          members: 140000,
          serverIcon: "/banners/valorant.png",
          backgroundImage: "/banners/valorant.png",
          status: "online",
          discordServer: "https://discord.gg/valorant-br" 
        },
        {
          title: "Loud",
          members: 680000,
          serverIcon: "/servers/loud.jpg",
          backgroundImage: "/banners/loud.png",
          status: "online",
          discordServer: "https://discord.gg/loud" 
        },
      ];

  return (
    <div className="min-h-screen bg-[#141414] text-gray-200">
      <nav className="fixed top-0 w-full z-50 flex justify-center items-center backdrop-blur-sm">
      <div className="max-w-4xl w-full mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="hover:opacity-80">
          Início
        </Link>
        <div className="flex gap-8">
          <Link href="/portfolio" className="hover:opacity-80">
            Portfólio
          </Link>
          <Link href="/contato" className="hover:opacity-80">
            Contato
          </Link>
        </div>
      </div>
    </nav>

      <div className="relative h-[30vh] w-full">
        <Image
          src="/background.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={100} 
        />
        <div className="absolute inset-0" />
      </div>
      <section className="bg-[#141414]">
      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10 ">
        <div className="flex flex-col sm:items-start text-start items-center">
          <div className="w-32 h-32 rounded-lg overflow-hidden relative mb-6">
            <Image
              src="/wumpus.gif"
              alt="Profile picture"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold mb-8">
          <LineShadowText className="italic" shadowColor="gray">
            Bjorn
          </LineShadowText>
          </h1>

          <PortfolioGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <PortfolioGridItem
                    discordServer={item.discordServer}
                    key={i}
                    title={item.title}
                    members={item.members}
                    serverIcon={item.serverIcon}
                    backgroundImage={item.backgroundImage}
                    status={item.status}
                    className={i === 3 ? "md:col-span-2" : ""}
                />
            ))}
          </PortfolioGrid>
        </div>
      </div>
      </section>
    </div>
  )
}
