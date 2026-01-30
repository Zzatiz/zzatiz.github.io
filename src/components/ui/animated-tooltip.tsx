"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TooltipItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export const AnimatedTooltip = ({
  items,
  size = "default",
  href,
  grayscale = false,
}: {
  items: TooltipItem[];
  size?: "small" | "default" | "large";
  href?: string;
  grayscale?: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const target = event.target as HTMLElement;
      const halfWidth = target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  const sizeClasses = {
    small: "h-8 w-8",
    default: "h-14 w-14",
    large: "h-32 w-32",
  };

  // For small size (navbar), show tooltip below; for others, show above
  const tooltipPosition = {
    small: "top-12", // Below the image
    default: "-top-16",
    large: "-top-20",
  };

  // Adjust animation direction based on position
  const animationY = size === "small" ? -20 : 20;

  return (
    <>
      {items.map((item) => {
        const content = (
          <div
            className="group relative"
            key={item.name}
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: animationY, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: animationY, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className={`absolute ${tooltipPosition[size]} left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center bg-black border border-neutral-800 px-4 py-2 text-xs shadow-xl`}
                >
                  {/* Accent lines - position changes based on tooltip position */}
                  {size === "small" ? (
                    <>
                      <div className="absolute inset-x-10 -top-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-[#8B0000] to-transparent" />
                      <div className="absolute -top-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-[#8B0000] to-transparent" />
                      <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
                    </>
                  )}
                  <div className="relative z-30 text-base font-bold text-white font-mono">
                    {item.name}
                  </div>
                  <div className="text-xs text-neutral-400 font-mono">
                    {item.designation}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <Image
              onMouseMove={handleMouseMove}
              height={size === "large" ? 128 : size === "small" ? 32 : 56}
              width={size === "large" ? 128 : size === "small" ? 32 : 56}
              src={item.image}
              alt={item.name}
              className={`relative !m-0 ${sizeClasses[size]} border border-neutral-700 object-cover object-top !p-0 transition duration-300 group-hover:z-30 group-hover:scale-105 group-hover:border-[#8B0000] ${grayscale ? "grayscale hover:grayscale-0" : ""}`}
            />
          </div>
        );

        if (href) {
          return (
            <Link href={href} key={item.id}>
              {content}
            </Link>
          );
        }

        return content;
      })}
    </>
  );
};

// Single avatar tooltip for simpler use cases
export const AvatarTooltip = ({
  name,
  designation,
  image,
  size = "default",
  href,
  grayscale = false,
}: {
  name: string;
  designation: string;
  image: string;
  size?: "small" | "default" | "large";
  href?: string;
  grayscale?: boolean;
}) => {
  return (
    <AnimatedTooltip
      items={[{ id: 1, name, designation, image }]}
      size={size}
      href={href}
      grayscale={grayscale}
    />
  );
};
