"use client";

import { GridBackground } from "@/components/ui/background-grid";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { MovingBorder } from "@/components/ui/moving-border";
import { DitherShader } from "@/components/ui/dither-shader";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";
import { motion } from "framer-motion";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileText,
  IconDownload,
  IconCopy,
  IconCheck,
} from "@tabler/icons-react";
import { useState } from "react";
import Image from "next/image";

export default function ConnectPage() {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("zzimports@outlook.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative pt-16">
      <GridBackground />

      {/* Section 01 - Header */}
      <section className="py-32 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-xs text-neutral-600 tracking-widest">
                // CONNECT
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
                className="flex flex-col md:flex-row items-start md:items-center gap-8"
              >
                {/* Avatar with Dither Shader - reveals normal on hover */}
                <div
                  className="flex-shrink-0 relative group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="h-20 w-20 border border-neutral-700 overflow-hidden transition-all duration-300 group-hover:border-[#8B0000] group-hover:scale-105">
                    {/* Dither layer - fades out on hover */}
                    <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                      <DitherShader
                        src="/zack.png"
                        gridSize={2}
                        ditherMode="bayer"
                        colorMode="original"
                        invert={false}
                        animated={false}
                        threshold={0.5}
                        className="h-20 w-20"
                      />
                    </div>
                    {/* Normal image layer - fades in on hover */}
                    <Image
                      src="/zack.png"
                      alt="Zackary Zatizabal"
                      width={80}
                      height={80}
                      className={`h-20 w-20 object-cover object-top transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    />
                  </div>
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
                    className="absolute top-24 left-1/2 -translate-x-1/2 bg-black border border-neutral-800 px-4 py-2 whitespace-nowrap z-10"
                  >
                    <div className="absolute inset-x-10 -top-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-[#8B0000] to-transparent" />
                    <p className="font-mono text-sm font-bold text-white">ZACKARY ZATIZABAL</p>
                    <p className="font-mono text-xs text-neutral-400">Developer & Security Specialist</p>
                  </motion.div>
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                    CONNECT
                  </h1>
                  <p className="mt-4 text-neutral-500">
                    Get in touch. View credentials.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - Contact Methods */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl font-black text-neutral-800">02</span>
            <p className="font-mono text-xs text-neutral-600 tracking-widest">
              // CONTACT
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Primary Actions */}
            <div className="space-y-6">
              {/* Resume Card */}
              <Modal>
                <MovingBorder
                  duration={3000}
                  className="p-6"
                  containerClassName="w-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                      <IconFileText className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-xs text-neutral-600 mb-1">
                        DOCUMENT
                      </p>
                      <h3 className="text-xl font-bold text-white">
                        RESUME / CV
                      </h3>
                      <p className="text-neutral-500 text-sm mt-2">
                        PDF • Updated 2025
                      </p>
                      <div className="flex gap-3 mt-4">
                        <ModalTrigger className="px-4 py-2 border border-neutral-700 text-white font-mono text-xs hover:bg-neutral-900 transition-colors">
                          VIEW
                        </ModalTrigger>
                        <a
                          href="/images/Zackary-Zatizabal-Resume.pdf"
                          download
                          className="px-4 py-2 border border-neutral-700 text-white font-mono text-xs hover:bg-neutral-900 transition-colors inline-flex items-center gap-2"
                        >
                          <IconDownload className="w-4 h-4" />
                          DOWNLOAD
                        </a>
                      </div>
                    </div>
                  </div>
                </MovingBorder>

                <ModalBody className="max-w-5xl">
                  <ModalContent>
                    <h2 className="text-xl font-bold text-white mb-6">RESUME</h2>
                    <div className="bg-neutral-900 border border-neutral-800">
                      <iframe
                        src="/images/Zackary-Zatizabal-Resume.pdf"
                        className="w-full h-[70vh]"
                        title="Resume PDF"
                      />
                    </div>
                  </ModalContent>
                  <ModalFooter>
                    <a
                      href="/images/Zackary-Zatizabal-Resume.pdf"
                      download
                      className="px-6 py-3 bg-[#8B0000] text-white font-mono text-sm hover:bg-[#6B0000] transition-colors inline-flex items-center gap-2"
                    >
                      <IconDownload className="w-4 h-4" />
                      DOWNLOAD PDF
                    </a>
                  </ModalFooter>
                </ModalBody>
              </Modal>

              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com/in/xavier-zati"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-neutral-800 hover:border-neutral-700 transition-colors p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <IconBrandLinkedin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-xs text-neutral-600 mb-1">
                      PROFESSIONAL NETWORK
                    </p>
                    <h3 className="text-xl font-bold text-white">LINKEDIN</h3>
                    <p className="text-neutral-500 text-sm mt-2">
                      View professional profile →
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Right Column - Direct Contact */}
            <div className="space-y-6">
              {/* Email Section */}
              <div className="border border-neutral-800 p-6">
                <p className="font-mono text-xs text-neutral-600 mb-4 tracking-widest">
                  EMAIL
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <IconMail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xl md:text-2xl font-mono text-white">
                      <EncryptedText
                        text="zzimports@outlook.com"
                        scrambleDuration={1500}
                        delay={500}
                      />
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={copyEmail}
                    className="px-4 py-2 border border-neutral-700 text-white font-mono text-xs hover:bg-neutral-900 transition-colors inline-flex items-center gap-2"
                  >
                    {copied ? (
                      <>
                        <IconCheck className="w-4 h-4 text-green-500" />
                        COPIED
                      </>
                    ) : (
                      <>
                        <IconCopy className="w-4 h-4" />
                        COPY
                      </>
                    )}
                  </button>
                  <a
                    href="mailto:zzimports@outlook.com"
                    className="px-4 py-2 border border-neutral-700 text-white font-mono text-xs hover:bg-neutral-900 transition-colors"
                  >
                    SEND EMAIL →
                  </a>
                </div>

                <p className="text-neutral-600 text-xs mt-4">
                  Click to copy • Opens email client
                </p>
              </div>

              {/* GitHub Card */}
              <a
                href="https://github.com/zzatiz"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-neutral-800 hover:border-neutral-700 transition-colors p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <IconBrandGithub className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-xs text-neutral-600 mb-1">
                      CODE
                    </p>
                    <h3 className="text-xl font-bold text-white">GITHUB</h3>
                    <p className="text-neutral-500 text-sm mt-2">@zzatiz →</p>
                  </div>
                </div>
              </a>

              {/* YouTube Card */}
              <a
                href="https://www.youtube.com/channel/UCj7Wvl98o-812LTdeS3Hbwg"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-neutral-800 hover:border-neutral-700 transition-colors p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-neutral-700 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-xs text-neutral-600 mb-1">
                      VIDEO
                    </p>
                    <h3 className="text-xl font-bold text-white">YOUTUBE</h3>
                    <p className="text-neutral-500 text-sm mt-2">
                      Video content →
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 - CTA */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl font-black text-neutral-800">03</span>
            <p className="font-mono text-xs text-neutral-600 tracking-widest">
              // COLLABORATE
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              LET&apos;S BUILD SOMETHING
            </h2>
            <p className="text-neutral-500 mb-8">
              Available for freelance projects and collaborations.
            </p>
            <a
              href="mailto:zzimports@outlook.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-mono text-sm hover:bg-neutral-200 transition-colors"
            >
              START A PROJECT
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
