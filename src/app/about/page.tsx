"use client";

import { EncryptedText } from "@/components/ui/encrypted-text";
import { GridBackground } from "@/components/ui/background-grid";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative pt-16">
      <GridBackground />

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-xs text-neutral-600 tracking-widest">
                // ABOUT
              </p>
              <span className="text-[150px] font-black text-neutral-900 leading-none block">
                01
              </span>
            </div>

            {/* Right Column */}
            <div className="col-span-12 md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  <EncryptedText
                    text="ZACKARY XAVIER ZATIZABAL"
                    scrambleDuration={1500}
                    delay={500}
                  />
                </h1>

                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="font-mono text-xs text-neutral-500 tracking-wider">
                    CYBERSECURITY
                  </span>
                  <span className="text-neutral-700">/</span>
                  <span className="font-mono text-xs text-neutral-500 tracking-wider">
                    SOFTWARE DEVELOPMENT
                  </span>
                  <span className="text-neutral-700">/</span>
                  <span className="font-mono text-xs text-neutral-500 tracking-wider">
                    GRAPHIC DESIGN
                  </span>
                </div>

                <div className="space-y-6 text-neutral-400 leading-relaxed max-w-2xl">
                  <p>
                    Cybersecurity student at Western Governors University with a
                    strong foundation in both software and hardware technologies.
                    Experienced in full-stack development, network and application
                    security, and device troubleshooting.
                  </p>
                  <p>
                    I&apos;ve built multiple full-stack applications, utilities, and
                    automation tools, combining technical skill with creative
                    problem-solving. Over 10 years of Python experience, 4-5 years
                    with JavaScript/Node, and hands-on expertise across Linux,
                    Windows, macOS, and Android environments.
                  </p>
                  <p>
                    Skilled in graphic design, hardware repair including board-level
                    soldering, and managing multi-server Linux environments with 15+
                    VMs. Passionate about offensive security, biotech, and applied
                    hardware/software security—focused on building secure, efficient,
                    and user-friendly solutions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - Skills */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-4xl font-black text-neutral-800">02</span>
            <p className="font-mono text-xs text-neutral-600 tracking-widest">
              // EXPERTISE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "FULL STACK DEVELOPMENT",
                description:
                  "10+ years Python, 4-5 years JavaScript/Node. Building full-stack applications, CRM platforms, trading systems, and automation tools. Experienced with React, Next.js, and database administration (MariaDB, PostgreSQL).",
              },
              {
                title: "CYBERSECURITY",
                description:
                  "Network and application security, offensive security research, CVE tracking, and security hardening. Focus on building secure systems and investigating threats with tools like Burp Suite.",
              },
              {
                title: "IT SUPPORT & SYSADMIN",
                description:
                  "Managing multi-server Linux environments with 15+ VMs using Proxmox/VMware and Docker. Troubleshooting across Windows, Linux, macOS, and Android. Network services, VPN, firewalls, and cloud infrastructure (AWS/Azure/GCP).",
              },
              {
                title: "HARDWARE & DESIGN",
                description:
                  "Hardware repair including board-level soldering for smartphones, laptops, and consumer electronics. Graphic design with Adobe suite, UI/UX design, and brand identities.",
              },
            ].map((skill, index) => (
              <CardContainer key={skill.title} className="w-full">
                <CardBody className="bg-neutral-950 border border-neutral-800 p-8 h-full">
                  <CardItem translateZ={20}>
                    <p className="font-mono text-xs text-neutral-600 mb-2">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </CardItem>
                  <CardItem translateZ={40}>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {skill.title}
                    </h3>
                  </CardItem>
                  <CardItem translateZ={30}>
                    <p className="text-neutral-500 leading-relaxed">
                      {skill.description}
                    </p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03 - Philosophy */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-neutral-800">03</span>
                <p className="font-mono text-xs text-neutral-600 tracking-widest">
                  // APPROACH
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">
                METHODOLOGY
              </h2>
              <div className="space-y-8">
                <div className="border-l-2 border-[#8B0000] pl-6">
                  <h3 className="font-bold text-white mb-2">SYSTEMATIC</h3>
                  <p className="text-neutral-500">
                    Every project begins with thorough analysis. Understanding
                    the problem completely before writing a single line of code.
                  </p>
                </div>
                <div className="border-l-2 border-neutral-800 pl-6">
                  <h3 className="font-bold text-white mb-2">SECURE</h3>
                  <p className="text-neutral-500">
                    Security is not an afterthought. It&apos;s integrated into every
                    decision, from architecture to deployment.
                  </p>
                </div>
                <div className="border-l-2 border-neutral-800 pl-6">
                  <h3 className="font-bold text-white mb-2">SCALABLE</h3>
                  <p className="text-neutral-500">
                    Building for growth. Solutions that work today and can
                    handle tomorrow&apos;s demands without complete rewrites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
            WANT TO KNOW MORE?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-mono text-sm hover:bg-neutral-200 transition-colors"
            >
              VIEW PORTFOLIO
              <span>→</span>
            </a>
            <a
              href="/connect"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-700 text-white font-mono text-sm hover:bg-neutral-900 transition-colors"
            >
              GET IN TOUCH
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
