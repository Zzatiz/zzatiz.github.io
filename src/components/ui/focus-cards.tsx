"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const FocusCards = ({
  cards,
  className,
}: {
  cards: {
    title: string;
    src: string;
    onClick?: () => void;
  }[];
  className?: string;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

const Card = ({
  card,
  index,
  hovered,
  setHovered,
}: {
  card: {
    title: string;
    src: string;
    onClick?: () => void;
  };
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    onClick={card.onClick}
    className={cn(
      "relative aspect-square overflow-hidden cursor-pointer transition-all duration-300 ease-out border border-neutral-800",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}
  >
    <Image
      src={card.src}
      alt={card.title}
      fill
      className="object-cover absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/60 flex items-end p-6 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div>
        <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
          View
        </p>
        <p className="text-xl font-bold text-white">{card.title}</p>
      </div>
    </div>
  </div>
);
