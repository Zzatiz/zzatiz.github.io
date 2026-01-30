"use client";

import { GridBackground } from "@/components/ui/background-grid";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import {
  IconRocket,
  IconCode,
  IconPalette,
} from "@tabler/icons-react";

export default function PortfolioPage() {
  return (
    <div className="relative pt-16">
      <GridBackground />

      {/* Section 01 - Header */}
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-xs text-neutral-600 tracking-widest">
                // PORTFOLIO
              </p>
              <span className="text-[120px] font-black text-neutral-900 leading-none block">
                01
              </span>
            </div>
            <div className="col-span-12 md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                  PORTFOLIO
                </h1>
                <p className="mt-6 text-neutral-500 max-w-xl">
                  Professional ventures. Code. Design. A collection of projects and
                  experiments across different domains.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - Ventures */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl font-black text-neutral-800">02</span>
            <p className="font-mono text-xs text-neutral-600 tracking-widest">
              // VENTURES
            </p>
          </div>
          <BentoGrid className="md:auto-rows-[20rem]">
            <BentoGridItem
              title="STARTUPS"
              description="Professional ventures and founded companies"
              href="/portfolio/startups"
              className="md:col-span-3"
              icon={<IconRocket className="w-6 h-6 text-neutral-500 mb-4" />}
              header={
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/10 to-transparent" />
              }
            />
          </BentoGrid>
        </div>
      </section>

      {/* Section 03 - Code */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl font-black text-neutral-800">03</span>
            <p className="font-mono text-xs text-neutral-600 tracking-widest">
              // CODE
            </p>
          </div>
          <BentoGrid className="md:auto-rows-[20rem]">
            <BentoGridItem
              title="CODE PORTFOLIO"
              description="Open source projects and repositories"
              href="/portfolio/code"
              className="md:col-span-3"
              icon={<IconCode className="w-6 h-6 text-neutral-500 mb-4" />}
              header={
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-transparent" />
              }
            />
          </BentoGrid>
        </div>
      </section>

      {/* Section 04 - Art */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl font-black text-neutral-800">04</span>
            <p className="font-mono text-xs text-neutral-600 tracking-widest">
              // ART
            </p>
          </div>
          <BentoGrid className="md:auto-rows-[20rem]">
            <BentoGridItem
              title="DESIGN PORTFOLIO"
              description="Visual works and creative projects"
              href="/portfolio/design"
              className="md:col-span-3"
              icon={<IconPalette className="w-6 h-6 text-neutral-500 mb-4" />}
              header={
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/30 to-transparent" />
              }
            />
          </BentoGrid>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5+", label: "YEARS EXPERIENCE" },
              { value: "10+", label: "PROJECTS COMPLETED" },
              { value: "5", label: "GITHUB REPOS" },
              { value: "1", label: "STARTUP FOUNDED" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-black text-white">
                  {stat.value}
                </p>
                <p className="font-mono text-xs text-neutral-600 mt-2 tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
