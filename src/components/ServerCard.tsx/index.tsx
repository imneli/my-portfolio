import { Card, CardContent } from "@/components/ui/card";
import { Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import serversData from "./server.data.json";

export interface ServerData {
  name: string;
  members: string;
  imageUrl: string;
  link: string;
}

export function ServerCard() {
  return (
    <>
      {serversData.map((server, index) => (
        <Link href={server.link} key={index} target="_blank" rel="noopener noreferrer">
          <Card className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800 transition-colors">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 relative rounded-lg overflow-hidden">
                <Image
                  src={server.imageUrl}
                  alt={server.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 20vw, 10vw"
                />
              </div>
              <div>
                <h3 className="font-bold text-white">{server.name}</h3>
                <p className="text-sm text-gray-400">{server.members} membros</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}