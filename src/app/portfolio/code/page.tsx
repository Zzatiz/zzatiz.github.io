"use client";

import { GridBackground } from "@/components/ui/background-grid";
import { Carousel, CarouselCard } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

const repos = [
  {
    name: "Gepetto-Browser",
    language: "HTML",
    description: "Captcha + CF solving, human replicating, HTTP proxy-able puppeteer fork",
    url: "https://github.com/zzatiz/Gepetto-Browser",
  },
  {
    name: "CustomFriend",
    language: "Python",
    description: "AI Telegram chatbot that responds intelligently with voice messages",
    url: "https://github.com/zzatiz/CustomFriend",
  },
  {
    name: "SnP-predictor",
    language: "Python",
    description: "Predicts daily S&P 500 changes by analyzing top shareholder movements",
    url: "https://github.com/zzatiz/SnP-predictor",
  },
  {
    name: "linuxRemote",
    language: "Python",
    description: "Remote control system for Linux computers",
    url: "https://github.com/zzatiz/linuxRemote",
  },
  {
    name: "InstagramReporter",
    language: "Python",
    description: "Puppeteer-based Instagram account reporter via Telegram",
    url: "https://github.com/zzatiz/InstagramReporter",
  },
  {
    name: "frontDoorScraper",
    language: "Python",
    description: "Scrapes front door images from addresses in a CSV",
    url: "https://github.com/zzatiz/frontDoorScraper",
  },
  {
    name: "scrapbook-font",
    language: "Python",
    description: "Cool scrapbook-style font generator",
    url: "https://github.com/zzatiz/scrapbook-font",
  },
  {
    name: "stockboard",
    language: "Python",
    description: "Stock tracking dashboard",
    url: "https://github.com/zzatiz/stockboard",
  },
  {
    name: "keylogger",
    language: "JavaScript",
    description: "Proof-of-concept keylogger for educational purposes",
    url: "https://github.com/zzatiz/keylogger",
  },
  {
    name: "workers-sdkzz",
    language: "TypeScript",
    description: "Non-browser open workers SDK",
    url: "https://github.com/zzatiz/workers-sdkzz",
  },
  {
    name: "zzcrypter",
    language: "C#",
    description: "Cryptography utility tool",
    url: "https://github.com/zzatiz/zzcrypter",
  },
  {
    name: "schoolstuff",
    language: "Java",
    description: "School projects and assignments from various years",
    url: "https://github.com/zzatiz/schoolstuff",
  },
  {
    name: "zzatiz.github.io",
    language: "HTML",
    description: "Personal portfolio site",
    url: "https://github.com/zzatiz/zzatiz.github.io",
  },
  {
    name: "DDAEnforcer",
    language: "Other",
    description: "Track 2 to NFC utility",
    url: "https://github.com/zzatiz/DDAEnforcer",
  },
  {
    name: "neocrypter",
    language: "Other",
    description: "Cryptography cheat sheet program with Vigenere, B-crypt, and custom runPE",
    url: "https://github.com/zzatiz/neocrypter",
  },
  {
    name: "stealthy-scraping-tools",
    language: "Other",
    description: "Minimal tools for conducting stealthy web scraping",
    url: "https://github.com/zzatiz/stealthy-scraping-tools",
  },
];

const languageColors: Record<string, string> = {
  HTML: "text-orange-500",
  Python: "text-blue-500",
  JavaScript: "text-yellow-500",
  TypeScript: "text-blue-400",
  "C#": "text-purple-500",
  Java: "text-red-500",
  Other: "text-neutral-500",
};

export default function CodePortfolioPage() {
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
            <span className="font-mono text-xs text-neutral-400">Code</span>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <span className="text-[120px] font-black text-neutral-900 leading-none block">
                02
              </span>
            </div>
            <div className="col-span-12 md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                  CODE PORTFOLIO
                </h1>
                <p className="mt-4 text-neutral-500">
                  Open source projects and experiments.
                </p>
                <a
                  href="https://github.com/zzatiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 font-mono text-sm text-neutral-500 hover:text-white transition-colors"
                >
                  <IconBrandGithub className="w-4 h-4" />
                  github.com/zzatiz →
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <Carousel
            items={repos.map((repo, index) => (
              <CarouselCard key={repo.name}>
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-mono text-xs text-neutral-600 mb-2">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-2xl font-bold text-white">
                        {repo.name}
                      </h3>
                    </div>
                    <span
                      className={`font-mono text-xs px-3 py-1 border border-neutral-800 ${
                        languageColors[repo.language] || "text-neutral-400"
                      }`}
                    >
                      {repo.language}
                    </span>
                  </div>

                  <div className="h-[1px] bg-neutral-800" />

                  <p className="text-neutral-500 leading-relaxed">
                    {repo.description}
                  </p>

                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 text-white font-mono text-sm hover:bg-neutral-900 hover:border-[#8B0000] transition-colors"
                  >
                    VIEW ON GITHUB
                    <IconExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </CarouselCard>
            ))}
          />
        </div>
      </section>

      {/* All Projects List */}
      <section className="py-16 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-mono text-xs text-neutral-600 tracking-widest mb-8">
            // ALL REPOSITORIES
          </p>

          <div className="space-y-4">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border border-neutral-800 hover:border-neutral-700 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-xs ${
                      languageColors[repo.language] || "text-neutral-400"
                    }`}
                  >
                    {repo.language}
                  </span>
                  <span className="text-white font-mono">{repo.name}</span>
                </div>
                <span className="text-neutral-600 group-hover:text-white transition-colors">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
