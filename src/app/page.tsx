import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";

const Portfolio = () => {
  const communities = [
    { name: "Bonfire", members: "50,000", icon: "🔥" },
    { name: "VALORANT - BR", members: "150,000", icon: "🎮" },
    // Add more communities as needed
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <div 
        className="h-[50vh] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/cliff-background.jpg')"
        }}
      >
        <div className="absolute top-0 w-full p-4 flex justify-between">
          <a href="#" className="text-white hover:text-gray-300">Início</a>
          <div className="space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Portfólio</a>
            <a href="#" className="text-white hover:text-gray-300">Contato</a>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-lg overflow-hidden">
                <img 
                  src="/api/placeholder/96/96"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Locutor</h1>
                <p className="text-zinc-400">Administrator & Community Leader</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <p className="text-zinc-300">
                Olá! Me chamo Leandro e tenho 24 anos. Sou um entusiasta apaixonado em construir, 
                crescer e gerenciar grandes comunidades para jogos, organizações e marcas.
              </p>
              <p className="text-zinc-300">
                Estou há 9 anos desenvolvendo, gerenciando e criando soluções para comunidades 
                no Discord e atualmente trabalho como Administrador, Líder de equipe e Moderador.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Comunidades</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {communities.map((community) => (
                  <Card key={community.name} className="bg-zinc-800 border-zinc-700">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{community.icon}</span>
                        <span>{community.name}</span>
                      </div>
                      <Badge variant="secondary">
                        {community.members} members
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Marquee Section */}
            <div className="py-8">
              <Marquee className="space-x-4">
                {Array(10).fill("Discord • Community • Gaming • Moderation • ").map((text, i) => (
                  <span key={i} className="text-zinc-500">{text}</span>
                ))}
              </Marquee>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Portfolio;