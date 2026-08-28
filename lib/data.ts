import type { Project } from "@/types/project";

const data: { projects: Project[] } = {
  projects: [
    {
      id: 1,
      name: "Call Detail Reporting Application",
      description:
        "Real-time call center reporting dashboard integrating four SQL Server databases with primary/fallback failover, 12 report modules, and live KPI polling. Engineered memory-efficient Excel/CSV export handling 60,000+ row datasets with ClosedXML.",
      category: "client",
      collaboration: "individual",
      featured: true,
      techStack: ["ASP.NET Core MVC", "C#", ".NET 4.8", "Razor Views", "Microsoft SQL Server", "IIS"],
      image: "/projects/call-detail-reporting.png",
    },
    {
      id: 2,
      name: "Research Data Collection App",
      description:
        "Cross-platform React Native app for bird, bivalve, and phenology field surveys, with offline-first SQLite storage, background sync, biometric authentication, and GPS-based observation capture.",
      category: "client",
      collaboration: "individual",
      featured: true,
      techStack: ["React Native", "React Native Paper", "Node.js", "Express.js", "MongoDB", "SQLite", "Docker"],
      image: "/projects/research-data-app.png",
    },
    {
      id: 3,
      name: "AI-Driven Device Anomaly Detection (Reclaim)",
      description:
        "IEEE-published final year research project: a web-based device tracking system that detects anomalous device movement and predicts high-risk loss/theft locations using machine learning.",
      category: "research",
      collaboration: "group",
      featured: true,
      techStack: ["React.js", "Node.js", "MongoDB", "Python", "Flask"],
      github: "https://github.com/Minukweerakoon/Reclaim-",
      image: "/projects/reclaim.jpg",
      imagePosition: "50% 35%",
      video: "/projects/reclaim-demo.mp4",
    },
    {
      id: 4,
      name: "Zero Waste Web Application",
      description:
        "Waste management platform connecting citizens, waste collection services, and recycling centers, with streamlined collection requests and stakeholder communication.",
      category: "personal",
      collaboration: "group",
      featured: false,
      techStack: ["React.js (Vite)", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/NethmiThambawita/ZeroWasteHub-ITPM",
      image: "/projects/zerowaste.png",
    },
    {
      id: 5,
      name: "PAWS Pet Care Web Application",
      description:
        "Full-stack platform for animal purchase appointments, event creation, and an online pet shop module with inventory, order, and sales management for administrators.",
      category: "personal",
      collaboration: "group",
      featured: false,
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/NethmiThambawita/PawsPetCare",
      image: "/projects/paws.png",
    },
    {
      id: 6,
      name: "Serendib Trails — Sri Lanka Travel Website",
      description:
        "Client-ready marketing website for a private Sri Lanka travel agency, with a cinematic hero, tour packages, destination gallery, testimonials, and an inquiry-focused contact flow. Reviewed for desktop, tablet, and mobile responsiveness and basic SEO.",
      category: "personal",
      collaboration: "individual",
      featured: true,
      techStack: ["React.js", "Tailwind CSS", "Vite", "JavaScript/JSX"],
      github: "https://github.com/NethmiThambawita/Travelco",
      live: "https://serendib-trails.netlify.app/",
      image: "/projects/serendib-trails.png",
    },
  ],
};

export default data;
