import { cn } from "@/lib/utils";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PortfolioGridProps {
  className?: string;
  children?: React.ReactNode;
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  className,
  children,
}) => {
  return (
    <div className="w-full bg-[#141414] min-h-screen relative">
      <div className="relative pt-24 max-w-4xl mx-auto">
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

interface PortfolioGridItemProps {
  className?: string;
  title: string;
  members: number;
  serverIcon: string;
  backgroundImage: string;
  status?: "online" | "offline" | string;
  discordServer: string;
}

const PortfolioGridItem: React.FC<PortfolioGridItemProps> = ({
  className,
  title,
  members,
  serverIcon,
  backgroundImage,
  status = "online",
  discordServer,
}) => {
  return (
    <Link 
      href={discordServer}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative bg-[#1A1A1A] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl block",
        className
      )}
    >
      {/* Server Banner */}
      <div className="h-24 w-full relative overflow-hidden">
        <Image
          src={backgroundImage}
          alt={`${title} banner`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1A1A]" />
      </div>

      {/* Server Content */}
      <div className="p-4">
        {/* Server Icon */}
        <div className="relative -mt-12 mb-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-4 border-[#1A1A1A] shadow-lg">
            <Image
              src={serverIcon}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div
            className={cn(
              "absolute bottom-0 right-0 w-4 h-4 rounded-full border-4 border-[#1A1A1A]",
              status === "online" ? "bg-green-500" : "bg-gray-500"
            )}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
              {title}
            </h3>
            <span
              className={cn(
                "px-2 py-1 rounded-full text-xs font-medium",
                status === "online"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-gray-500/10 text-gray-400"
              )}
            >
              {status}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <div className="flex -space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-gray-700 border-2 border-[#1A1A1A] items-center flex justify-center"
                >
                  <User size={16} />
                </div>
              ))}
            </div>
            <p>{members.toLocaleString()} members</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { PortfolioGrid, PortfolioGridItem };