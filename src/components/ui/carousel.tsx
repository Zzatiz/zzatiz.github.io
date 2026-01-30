"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type CarouselContextProps = {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  scrollNext: () => void;
  scrollPrev: () => void;
};

const CarouselContext = createContext<CarouselContextProps | undefined>(
  undefined
);

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const scrollPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <CarouselContext.Provider
      value={{ currentIndex, setCurrentIndex, scrollNext, scrollPrev }}
    >
      <div className="relative w-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="h-10 w-10 border border-neutral-700 flex items-center justify-center disabled:opacity-30 hover:bg-neutral-900 transition-colors"
            >
              <IconArrowLeft className="h-5 w-5 text-neutral-400" />
            </button>
            <button
              onClick={scrollNext}
              className="h-10 w-10 border border-neutral-700 flex items-center justify-center disabled:opacity-30 hover:bg-neutral-900 transition-colors"
            >
              <IconArrowRight className="h-5 w-5 text-neutral-400" />
            </button>
          </div>
          <div className="font-mono text-sm text-neutral-500">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </div>
        </div>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              {items[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2 mt-6 justify-center">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-1 transition-all duration-300",
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-4 bg-neutral-700 hover:bg-neutral-600"
              )}
            />
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a Carousel");
  }
  return context;
};

export const CarouselCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-neutral-950 border border-neutral-800 p-8",
        className
      )}
    >
      {children}
    </div>
  );
};
