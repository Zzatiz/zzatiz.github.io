"use client";

import { GridBackground } from "@/components/ui/background-grid";
import { MovingBorder } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

export default function StartupsPage() {
  return (
    <div className="relative pt-16">
      <GridBackground />

      {/* Header */}
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/portfolio"
              className="font-mono text-xs text-neutral-600 hover:text-white transition-colors"
            >
              Portfolio
            </Link>
            <span className="text-neutral-700">/</span>
            <span className="font-mono text-xs text-neutral-400">Startups</span>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
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
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                  STARTUPS
                </h1>
                <p className="mt-4 text-neutral-500">
                  Ventures and companies I&apos;ve founded or co-founded.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Startup */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <MovingBorder
            duration={3000}
            className="p-8 md:p-12"
            containerClassName="w-full"
          >
            <div className="relative">
              {/* Company Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    SYNAPSE SOLUTIONS LTD.
                  </h2>
                  <div className="h-[2px] w-full bg-neutral-800 mt-4" />
                </div>
              </div>

              {/* Tagline */}
              <p className="text-lg text-neutral-400 mb-8">
                Innovative tech solutions for modern businesses
              </p>

              {/* Description */}
              <div className="space-y-4 text-neutral-500 mb-8">
                <p>
                  A technology company focused on providing cutting-edge
                  solutions for businesses. Specializing in web development,
                  system integration, and technical consulting.
                </p>
              </div>

              {/* Details */}
              <div className="bg-neutral-950 border border-neutral-800 p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-mono text-xs text-neutral-600 mb-1">
                      ROLE
                    </p>
                    <p className="text-white">Founder / Lead Developer</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-neutral-600 mb-1">
                      FOCUS
                    </p>
                    <p className="text-white">
                      Full Stack Development, Technical Consulting
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-neutral-600 mb-1">
                      STATUS
                    </p>
                    <p className="text-[#8B0000] font-mono">● ACTIVE</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://synapsesolutions.ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 text-white font-mono text-sm hover:bg-neutral-900 hover:border-[#8B0000] transition-colors"
              >
                VISIT WEBSITE
                <IconExternalLink className="w-4 h-4" />
              </a>
            </div>
          </MovingBorder>
        </div>
      </section>

      {/* Future Ventures */}
      <section className="py-16 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-neutral-600 tracking-widest mb-4">
            // MORE COMING SOON
          </p>
          <p className="text-neutral-500">
            Additional ventures and projects are currently in development.
          </p>
        </div>
      </section>
    </div>
  );
}
