"use client";

import { GridBackground } from "@/components/ui/background-grid";
import { FocusCards } from "@/components/ui/focus-cards";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "@/components/ui/animated-modal";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nonsenseArt = [
  { title: "RED PLATED", src: "/images/redplated.png" },
  { title: "LUSHED", src: "/images/Lushed.png" },
  { title: "SCRIBBLES", src: "/images/scribbles.JPG" },
];

const animations = [
  { title: "CRICKET — LOOP", src: "/images/cricket.gif" },
  { title: "CROSS — LOOP", src: "/images/cross.gif" },
  { title: "P — LOOP", src: "/images/p.gif" },
];

export default function DesignPortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<{
    title: string;
    src: string;
  } | null>(null);

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
            <span className="font-mono text-xs text-neutral-400">Design</span>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <span className="text-[120px] font-black text-neutral-900 leading-none block">
                03
              </span>
            </div>
            <div className="col-span-12 md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                  DESIGN PORTFOLIO
                </h1>
                <p className="mt-4 text-neutral-500">
                  Visual works and creative projects.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Nonsense Art Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-mono text-xs text-neutral-600 tracking-widest mb-2">
              // SECTION 01
            </p>
            <h2 className="text-2xl font-bold text-white">NONSENSE ART</h2>
            <p className="text-neutral-500 mt-2">
              Abstract and experimental visual pieces
            </p>
          </div>

          <FocusCards
            cards={nonsenseArt.map((item) => ({
              ...item,
              onClick: () => setSelectedImage(item),
            }))}
          />
        </div>
      </section>

      {/* Animations Section */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-mono text-xs text-neutral-600 tracking-widest mb-2">
              // SECTION 02
            </p>
            <h2 className="text-2xl font-bold text-white">ANIMATIONS</h2>
            <p className="text-neutral-500 mt-2">Motion graphics and loops</p>
          </div>

          <FocusCards
            cards={animations.map((item) => ({
              ...item,
              onClick: () => setSelectedImage(item),
            }))}
          />
        </div>
      </section>

      {/* Other Works Section */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-mono text-xs text-neutral-600 tracking-widest mb-2">
              // SECTION 03
            </p>
            <h2 className="text-2xl font-bold text-white">OTHER WORKS</h2>
            <p className="text-neutral-500 mt-2">Additional creative projects</p>
          </div>

          {/* Video Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-neutral-800 overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/68hUynrpLvE?rel=0&theme=dark"
                  title="Art Collage Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 border-t border-neutral-800">
                <p className="font-mono text-xs text-neutral-600 mb-1">VIDEO</p>
                <p className="text-white font-bold">ART COLLAGE</p>
              </div>
            </div>

            <div className="border border-neutral-800 p-8 flex flex-col justify-center">
              <p className="font-mono text-xs text-neutral-600 mb-4">
                // MORE WORKS
              </p>
              <p className="text-neutral-500 leading-relaxed">
                Additional creative works including urban murals, notebook
                sketches, and collaborative projects are available upon request.
              </p>
              <a
                href="/connect"
                className="inline-flex items-center gap-2 mt-6 font-mono text-sm text-neutral-500 hover:text-white transition-colors"
              >
                GET IN TOUCH →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-neutral-400 hover:text-white font-mono text-sm"
          >
            CLOSE ×
          </button>
          <div className="max-w-5xl w-full">
            <div className="relative aspect-square md:aspect-video">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center mt-4 font-mono text-sm text-neutral-400">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
