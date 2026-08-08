import Reveal from "@/components/Reveal";
import Container from "@/components/Container";
import { Cloud, Award, Database, BrainCircuit } from "lucide-react";

const certifications = [
  {
    icon: Cloud,
    title: "AWS Academy Graduate — Cloud Web Application Builder",
    issuer: "Amazon Web Services",
    date: "Sep 2025",
  },
  {
    icon: Award,
    title: "Highly Available Web Applications",
    issuer: "Amazon Web Services",
    date: "Sep 2025",
  },
  {
    icon: Database,
    title: "SQL (Basic & Intermediate)",
    issuer: "HackerRank",
    date: "Jun 2024",
  },
  {
    icon: BrainCircuit,
    title: "AI/ML Engineer — Stage 1",
    issuer: "SLIIT",
    date: "Jan 2024",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

      <Container>
        <div className="mb-14 text-center lg:text-left">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
            {"// certifications"}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Credentials & <span className="text-emerald-400">Training</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/5 bg-black/30 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/20 hover:shadow-lg hover:shadow-emerald-500/5">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400">
                  <cert.icon size={20} />
                </div>

                <h3 className="mb-1 text-sm font-semibold text-white">
                  {cert.title}
                </h3>

                <p className="text-xs text-gray-400">{cert.issuer}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-emerald-400">
                  {cert.date}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
