import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChevronRight, SparklesIcon } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { ServerCard } from "@/components/ServerCard.tsx";

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
        <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
          <div className="flex flex-col sm:items-start text-start items-center">
            <div className="w-32 h-32 rounded-lg overflow-hidden relative mb-6">
              <Image
                src="/wumpus.gif"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold mb-8">Bjorn - Contato</h1>
            <Card className="w-full bg-[#141414] border-zinc-800">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-200">Nome <span className='text-red-600 font-semibold'>*</span></Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      className="bg-zinc-800 border-zinc-700 text-gray-200 placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-200">Email <span className='text-red-600 font-semibold'>*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-zinc-800 border-zinc-700 text-gray-200 placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-200">Assunto <span className='text-red-600 font-semibold'>*</span></Label>
                    <Input
                      id="subject"
                      placeholder="Assunto da mensagem"
                      className="bg-zinc-800 border-zinc-700 text-gray-200 placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-200">Mensagem <span className='text-red-600 font-semibold'>*</span></Label>
                    <Textarea
                      id="message"
                      placeholder="Sua mensagem aqui..."
                      className="min-h-[150px] bg-zinc-800 border-zinc-700 text-gray-200 placeholder:text-gray-400"
                    />
                  </div>
                  

                  <Button className="w-full">
                    Enviar mensagem
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
              
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">
            Você pode me encontrar por aqui...
          </h2>
          <Button variant="default" className='hidden xl:flex'>
        <Link href="/portfolio" className="flex items-center gap-2">
            Mais servidores
            <SparklesIcon className="-me-1 opacity-60" size={16} aria-hidden="true" />
        </Link>
        </Button>
        </div>
        <Marquee pauseOnHover>
          <ServerCard />
        </Marquee>
        <Button variant="default" className="text-white xl:hidden flex w-full mt-4">
          Mais servidores
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}