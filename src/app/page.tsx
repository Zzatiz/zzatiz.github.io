"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { GridBackground } from "@/components/ui/background-grid";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

export default function Home() {
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <div className="relative">
      <GridBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Name */}
          <TextGenerateEffect
            words="ZACKARY ZATIZABAL"
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.1em] text-white"
            duration={0.5}
          />

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8"
            onAnimationComplete={() => setShowSubtitle(true)}
          >
            {showSubtitle && (
              <p className="text-2xl md:text-3xl text-[#8B0000] font-mono">
                <EncryptedText
                  text="I, Zackary Zatizabal"
                  scrambleDuration={2000}
                  delay={0}
                />
              </p>
            )}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="mt-8 text-lg text-neutral-500 max-w-xl mx-auto"
          >
            A jack of all trades.
          </motion.p>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-x-4 gap-y-2"
          >
            {[
              "Full Stack Development",
              "Cybersecurity",
              "System Administration",
              "Graphic Design",
            ].map((service, index) => (
              <span key={service} className="text-neutral-600 text-sm font-mono">
                {service}
                {index < 3 && <span className="ml-4 text-neutral-700">/</span>}
              </span>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.a
            href="mailto:zzimports@outlook.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 0.5 }}
            className="inline-block mt-12 font-mono text-sm text-neutral-500 hover:text-white transition-colors border-b border-transparent hover:border-[#8B0000]"
          >
            zzimports@outlook.com
          </motion.a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-neutral-600 tracking-widest">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <IconChevronDown className="w-5 h-5 text-neutral-600" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-xs text-neutral-600 tracking-widest">
                // ABOUT
              </p>
              <span className="text-[120px] font-black text-neutral-900 leading-none">
                01
              </span>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                ZACKARY XAVIER ZATIZABAL
              </h2>
              <div className="flex gap-4 mb-8">
                <span className="font-mono text-xs text-neutral-500">
                  CYBERSECURITY
                </span>
                <span className="text-neutral-700">/</span>
                <span className="font-mono text-xs text-neutral-500">
                  SOFTWARE DEV
                </span>
                <span className="text-neutral-700">/</span>
                <span className="font-mono text-xs text-neutral-500">
                  GRAPHIC DESIGN
                </span>
              </div>
              <p className="text-neutral-400 leading-relaxed max-w-xl">
                Cybersecurity student with a strong foundation in both software
                and hardware technologies. Experienced in full-stack development,
                network and application security, and device troubleshooting.
                Passionate about offensive security and building secure,
                efficient, user-friendly solutions.
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 mt-8 font-mono text-sm text-neutral-500 hover:text-white transition-colors"
              >
                READ MORE
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-mono text-xs text-neutral-600 tracking-widest mb-4">
                // PORTFOLIO
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                SELECTED WORK
              </h2>
            </div>
            <a
              href="/portfolio"
              className="font-mono text-sm text-neutral-500 hover:text-white transition-colors"
            >
              VIEW ALL →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "STARTUPS",
                description: "Ventures and companies",
                href: "/portfolio/startups",
              },
              {
                title: "CODE",
                description: "Open source projects",
                href: "/portfolio/code",
              },
              {
                title: "DESIGN",
                description: "Visual works",
                href: "/portfolio/design",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group p-8 bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <p className="font-mono text-xs text-neutral-600 mb-2">
                  {item.description}
                </p>
                <h3 className="text-xl font-bold text-white group-hover:text-[#8B0000] transition-colors">
                  {item.title}
                </h3>
                <span className="block mt-4 text-neutral-600 group-hover:text-white transition-colors">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-neutral-600 tracking-widest mb-4">
            // CONTACT
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8">
            LET&apos;S WORK TOGETHER
          </h2>
          <a
            href="/connect"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono text-sm hover:bg-neutral-200 transition-colors"
          >
            GET IN TOUCH
            <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
