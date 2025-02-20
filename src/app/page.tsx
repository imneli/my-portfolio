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

export default function Page() {
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
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300 items-start">
            <p>
            Olá! Me chamo <strong>Pedro</strong> e tenho 21 anos. Sou um entusiasta apaixonado em construir, crescer e gerenciar grandes comunidades para jogos, organizações e marcas. Estou há 2 anos desenvolvendo, gerenciando e criando soluções para comunidades no Discord e atualmente trabalho como <strong>Administrador</strong>, Líder de equipe e Moderador.
            </p>
            <p>
            Hoje em dia eu tenho a honra de liderar a maior comunidade da América do Sul no Discord, que já somam mais de 700.000 membros. Além de todas essas atividades de gerenciamento e moderação, também adoro oferecer outros serviços personalizados para o Discord. Se você precisar de um servidor conforme suas necessidades, estou aqui para ajudar!
            </p>
            <p>
            Também forneço minha experiência para colaborar voluntariamente com projetos que acredito valer a pena.
            </p>
          </div>
        </div>
      </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex justify-between items-center mb-8 ">
          <h2 className="text-xl font-semibold">
            Você pode me encontrar por aqui...
          </h2> 
          <Button variant="default" className="hidden xl:flex">
            <Link href="/portfolio" className="items-center gap-2 hidden xl:flex">
              Meu portfólio 
              <SparklesIcon className="-me-1 opacity-60" size={16} aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <Marquee pauseOnHover > 
         <ServerCard />
        </Marquee>
        <Button variant="default" className="text-white xl:hidden flex w-full mt-4">
          <Link href="/portfolio" className="flex items-center gap-2">
            Meu portfólio
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
