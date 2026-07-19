import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nethmi Thambawita | Portfolio",
  description:
    "Associate Software Engineer & Full-Stack Developer — MERN stack, .NET Core, and mobile app development.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-dvh bg-black text-white antialiased">
        {/* Global background layers */}
        <div className="fixed inset-0 -z-20 aurora-bg" />
        <div className="fixed inset-0 -z-10 grid-bg opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent_70%)]" />
        <div className="fixed inset-0 -z-10 noise" />

        {/* App content */}
        {children}
      </body>
    </html>
  );
}
