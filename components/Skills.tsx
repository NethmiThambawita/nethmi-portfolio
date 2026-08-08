import Reveal from "@/components/Reveal";
import Container from "@/components/Container";

import {
  SiJavascript,
  SiTypescript,
  SiSharp,
  SiHtml5,
  SiCss,
  SiPhp,
  SiPython,
  SiOpenjdk,

  SiReact,

  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiSpringboot,

  SiMongodb,
  SiMysql,

  SiGit,
  SiDocker,
  SiFigma,
  SiPostman,

  SiCypress,

  SiPandas,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { Database, Smartphone, FileSpreadsheet } from "lucide-react";

export default function Skills() {
  const groups = [
    {
      title: "Languages",
      items: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "C#", icon: SiSharp },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss },
        { name: "PHP", icon: SiPhp },
        { name: "Java", icon: SiOpenjdk },
        { name: "Python", icon: SiPython },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React.js", icon: SiReact },
        { name: "React Native", icon: Smartphone },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: ".NET Core", icon: SiDotnet },
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "REST APIs", icon: SiPostman },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "SQL Server (SSMS)", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "MySQL", icon: SiMysql },
        { name: "SQLite", icon: Database },
      ],
    },
    {
      title: "Testing & QA",
      items: [
        { name: "Postman", icon: SiPostman },
        { name: "SoapUI", icon: VscAzure },
        { name: "Cypress", icon: SiCypress },
        { name: "UAT/QA Methodology", icon: Database },
      ],
    },
    {
      title: "Tools, Data & DevOps",
      items: [
        { name: "Git", icon: SiGit },
        { name: "Docker", icon: SiDocker },
        { name: "Figma", icon: SiFigma },
        { name: "Pandas", icon: SiPandas },
        { name: "openpyxl", icon: FileSpreadsheet },
        { name: "Vercel", icon: SiVercel },
        { name: "Render", icon: SiRender },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

      <Container>
        {/* Header */}
        <div className="mb-14 text-center lg:text-left">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
            {"// skills"}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="text-emerald-400">Tech Stack</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/5 bg-black/30 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/20 hover:shadow-lg hover:shadow-emerald-500/5">
                <h3 className="mb-6 font-mono text-sm uppercase tracking-wider text-emerald-400">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300 transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-white"
                      >
                        <Icon size={14} className="text-emerald-300" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
