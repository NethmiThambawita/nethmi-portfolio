"use client";

import {
  Cpu,
  ShieldCheck,
  Smartphone,
  FileText,
  Users,
  Database,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Container from "@/components/Container";

const highlights = [
  {
    icon: Cpu,
    title: "Full-Stack Development",
    text: "Building web and mobile applications across the MERN stack, .NET Core, and RESTful APIs.",
  },
  {
    icon: ShieldCheck,
    title: "API Security & QA",
    text: "Hands-on experience identifying auth vulnerabilities and running QA/UAT with Postman and SoapUI.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Cross-platform React Native apps with offline-first architecture and biometric authentication.",
  },
  {
    icon: Database,
    title: "Data & Reporting",
    text: "Memory-efficient reporting pipelines handling 60,000+ row datasets with Python and ClosedXML.",
  },
  {
    icon: Users,
    title: "Agile Collaboration",
    text: "Partnering with cross-functional teams through stand-ups, sprint planning, and code reviews.",
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    text: "Preparing SRS, design specs, and SOWs for client-facing enterprise engagements.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <Container>
        {/* HEADER */}
        <div className="mb-12 text-center lg:text-left">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
            {"// about me"}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Building <span className="text-emerald-400">reliable systems</span>{" "}
            across web & mobile
          </h2>
        </div>

        {/* TOP GRID */}
        <div className="grid gap-10 lg:grid-cols-12">
          {/* IMAGE */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-emerald-500/30 bg-black/10 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.4)] sm:h-72 sm:w-72">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Nethmi Thambawita"
                  src="/profile-photo.jpg"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-emerald-500/10 blur-2xl" />
            </div>
          </div>

          {/* ABOUT TEXT */}
          <Reveal className="lg:col-span-8">
            <div className="rounded-2xl border border-emerald-500/20 bg-black/40 p-7 backdrop-blur-xl sm:p-8 lg:p-10">
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                I&rsquo;m an{" "}
                <span className="text-white">Associate Software Engineer</span>{" "}
                with 1.5+ years of experience building{" "}
                <span className="text-white">full-stack web and mobile solutions</span>{" "}
                for enterprise clients in banking and academic research.
                <br />
                <br />
                I&rsquo;ve delivered a real-time call center reporting dashboard
                processing 60,000+ row datasets and a cross-platform React
                Native field-data application with offline-first architecture
                and biometric authentication for a university research
                platform.
                <br />
                <br />
                Proficient across the{" "}
                <span className="text-emerald-400">
                  MERN stack, .NET Core, and RESTful API design
                </span>
                , with hands-on experience in API security testing, QA/UAT
                methodologies, and technical documentation for client-facing
                engagements. Co-authored an IEEE-published research paper on
                device anomaly detection.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* EXPERIENCE */}
          <Reveal>
            <div className="rounded-2xl border border-emerald-500/20 bg-black/30 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-400/30 text-emerald-400">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Work Experience
                </h3>
              </div>

              <div className="space-y-10">
                {/* ITEM 1 */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="relative flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
                    <div className="flex-1 w-px bg-emerald-500/30 mt-2" />
                  </div>

                  <div>
                    <p className="text-sm text-emerald-400">July 2025 - Present</p>
                    <h4 className="text-white font-semibold mt-1">
                      Associate Software Engineer
                    </h4>
                    <p className="text-gray-400 text-sm">
                      DMS Electronics (Pvt) Ltd. &middot; Full Time, On Site
                    </p>

                    <ul className="mt-2 text-sm text-gray-400 list-disc ml-4 space-y-1">
                      <li>
                        Built an admin dashboard (React.js, Node.js, TypeScript,
                        MongoDB) to manage user access accounts.
                      </li>
                      <li>
                        Resolved HSM Authentication Server vulnerabilities and
                        led end-to-end QA of password authentication APIs.
                      </li>
                      <li>
                        Enhanced and maintained Linux-based Asterisk
                        applications integrated with agent call management
                        systems.
                      </li>
                      <li>
                        Investigated and resolved production issues, managed
                        deployments, and delivered client-specific
                        enhancements.
                      </li>
                      <li>
                        Managed client demos, stakeholder communication, and
                        SRS/Design/SOW/CR/UAT documentation across the
                        delivery lifecycle.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="relative flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full border-2 border-emerald-400 bg-black" />
                  </div>

                  <div>
                    <p className="text-sm text-emerald-400">Nov 2024 - June 2025</p>

                    <h4 className="text-white font-semibold mt-1">
                      Software Engineer Trainee
                    </h4>

                    <p className="text-gray-400 text-sm">
                      DMS Electronics (Pvt) Ltd. &middot; Full Time, On Site
                    </p>

                    <ul className="mt-2 text-sm text-gray-400 list-disc ml-4 space-y-1">
                      <li>
                        Developed a React Native field-survey app with
                        offline-first sync and biometric authentication.
                      </li>
                      <li>
                        Built a real-time call center reporting dashboard with
                        12 report modules and live KPI polling.
                      </li>
                      <li>
                        Performed unit testing for IVR applications using C#
                        and UI testing with Cypress.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* EDUCATION */}
          <Reveal>
            <div className="rounded-2xl border border-emerald-500/20 bg-black/30 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-400/30 text-emerald-400">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>

              <div className="space-y-10">
                {/* UNI */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="relative flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
                    <div className="flex-1 w-px bg-emerald-500/30 mt-2" />
                  </div>

                  <div>
                    <p className="text-sm text-emerald-400">
                      2022 - 2026 &middot; Completed
                    </p>
                    <h4 className="text-white font-semibold mt-1">
                      BSc (Hons) in Information Technology
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Sri Lanka Institute of Information Technology (SLIIT)
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-400/20">
                        IEEE Published Research
                      </span>
                      <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-400/20">
                        GPA 2.83
                      </span>
                    </div>
                  </div>
                </div>

                {/* A/L */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="relative flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full border-2 border-emerald-400 bg-black" />
                    <div className="flex-1 w-px bg-emerald-500/30 mt-2" />
                  </div>

                  <div>
                    <p className="text-sm text-emerald-400">2021</p>
                    <h4 className="text-white font-semibold mt-1">
                      G.C.E Advanced Level
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Dharmashoka College, Ambalangoda
                    </p>
                    <div className="mt-2">
                      <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-400/20">
                        Stream: Physical Science
                      </span>
                    </div>
                  </div>
                </div>

                {/* O/L */}
                <div className="flex gap-4 sm:gap-5">
                  <div className="relative flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full border-2 border-emerald-400 bg-black" />
                  </div>

                  <div>
                    <p className="text-sm text-emerald-400">2017</p>
                    <h4 className="text-white font-semibold mt-1">
                      G.C.E Ordinary Level
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Dharmashoka College, Ambalangoda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((h, idx) => (
            <Reveal key={h.title} delay={0.08 * idx}>
              <div className="rounded-2xl border border-emerald-500/20 bg-black/30 p-6 backdrop-blur-xl transition hover:scale-[1.02] hover:border-emerald-400 hover:shadow-[0_0_28px_rgba(16,185,129,0.10)] lg:p-7">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400">
                  <h.icon size={20} />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">
                  {h.title}
                </h3>

                <p className="text-sm text-gray-400">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
