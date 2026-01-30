"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}) => {
  const Wrapper = href ? motion.a : motion.div;

  return (
    <Wrapper
      href={href}
      className={cn(
        "row-span-1 group/bento relative overflow-hidden",
        "bg-neutral-950 border border-neutral-800",
        "flex flex-col justify-between space-y-4 p-6",
        "hover:border-neutral-700 transition-colors duration-200",
        className
      )}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {header}
      <div className="relative z-10">
        {icon}
        <div className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-2">
          {description}
        </div>
        <div className="font-bold text-xl text-white group-hover/bento:text-white transition-colors duration-200">
          {title}
        </div>
      </div>
      <div className="absolute bottom-6 right-6 text-neutral-600 group-hover/bento:text-white transition-colors">
        →
      </div>
    </Wrapper>
  );
};
