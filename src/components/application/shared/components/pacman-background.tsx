"use client";

import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface Ghost extends Position {
  color: string;
  id: number;
}

const PacmanBackground = () => {
  const [pacmanPos, setPacmanPos] = useState<Position>({ x: -50, y: 50 });
  const [ghosts, setGhosts] = useState<Ghost[]>([
    { x: -150, y: 50, color: "#FF0000", id: 1 }, // Blinky (vermelho)
    { x: -200, y: 50, color: "#FFB8FF", id: 2 }, // Pinky (rosa)
    { x: -250, y: 50, color: "#00FFFF", id: 3 }, // Inky (ciano)
    { x: -300, y: 50, color: "#FFB851", id: 4 }, // Clyde (laranja)
  ]);
  const [dots, setDots] = useState<Position[]>([]);

  // Gera dots no início
  useEffect(() => {
    const newDots: Position[] = [];
    for (let i = 0; i < 30; i++) {
      newDots.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }
    setDots(newDots);
  }, []);

  // Animação do Pacman e fantasmas
  useEffect(() => {
    const interval = setInterval(() => {
      setPacmanPos((prev) => {
        const newX = prev.x + 0.5;
        if (newX > 110) return { x: -50, y: Math.random() * 80 + 10 };
        return { x: newX, y: prev.y };
      });

      setGhosts((prev) =>
        prev.map((ghost) => {
          const newX = ghost.x + 0.45;
          if (newX > 110) {
            return { ...ghost, x: -50, y: Math.random() * 80 + 10 };
          }
          return { ...ghost, x: newX };
        })
      );

      // "Come" os dots quando o Pacman passa
      setDots((prev) =>
        prev.filter((dot) => {
          const distance = Math.sqrt(
            Math.pow(dot.x - pacmanPos.x, 2) + Math.pow(dot.y - pacmanPos.y, 2)
          );
          return distance > 3;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [pacmanPos.x, pacmanPos.y]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
      {/* Dots */}
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
        />
      ))}

      {/* Pacman */}
      <div
        className="absolute w-12 h-12 transition-all duration-100 ease-linear"
        style={{
          left: `${pacmanPos.x}%`,
          top: `${pacmanPos.y}%`,
        }}
      >
        <div className="relative w-full h-full">
          {/* Corpo do Pacman */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Corpo amarelo */}
              <circle cx="50" cy="50" r="45" fill="#FFFF00" />

              {/* Boca animada */}
              <path
                d="M 50 50 L 85 20 A 45 45 0 0 1 85 80 Z"
                fill="#1a1a1a"
                className="animate-[chomp_0.3s_ease-in-out_infinite]"
              />

              {/* Olho */}
              <circle cx="50" cy="30" r="5" fill="#000" />
            </svg>
          </div>
        </div>
      </div>

      {/* Fantasmas */}
      {ghosts.map((ghost) => (
        <div
          key={ghost.id}
          className="absolute w-10 h-10 transition-all duration-100 ease-linear"
          style={{
            left: `${ghost.x}%`,
            top: `${ghost.y}%`,
          }}
        >
          <svg viewBox="0 0 100 120" className="w-full h-full">
            {/* Corpo do fantasma */}
            <path
              d="M 10 60 Q 10 10, 50 10 Q 90 10, 90 60 L 90 110 L 75 95 L 60 110 L 50 95 L 40 110 L 25 95 L 10 110 Z"
              fill={ghost.color}
              stroke="#000"
              strokeWidth="2"
            />

            {/* Olhos brancos */}
            <ellipse cx="35" cy="40" rx="8" ry="12" fill="white" />
            <ellipse cx="65" cy="40" rx="8" ry="12" fill="white" />

            {/* Pupilas */}
            <circle cx="35" cy="42" r="4" fill="#000" />
            <circle cx="65" cy="42" r="4" fill="#000" />
          </svg>
        </div>
      ))}

      {/* CSS personalizado para animação da boca */}
      <style jsx>{`
        @keyframes chomp {
          0%, 100% {
            d: path("M 50 50 L 85 20 A 45 45 0 0 1 85 80 Z");
          }
          50% {
            d: path("M 50 50 L 95 50 A 45 45 0 0 1 95 50 Z");
          }
        }
      `}</style>
    </div>
  );
};

export default PacmanBackground;