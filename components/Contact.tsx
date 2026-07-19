"use client";

import {
  Github as GitHub,
  Linkedin as LinkedinIcon,
  Mail,
  Send,
  Phone,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Container from "@/components/Container";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitting) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError(true);
      setTimeout(() => setError(false), 4000);
      return;
    }

    try {
      setSubmitting(true);

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        publicKey,
      );

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-500/25 to-transparent" />
      <Container>
        {/* Header */}
        <div className="mb-12 text-center sm:mb-16 lg:text-left">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
            {"// contact"}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&rsquo;s build{" "}
            <span className="text-emerald-400">something impactful</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-400 sm:text-base lg:mx-0">
            Open to full-time roles, collaborations, and software
            opportunities. Let&rsquo;s connect and create something meaningful.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-5 lg:grid-cols-12 lg:gap-20">
          {/* Left Links */}
          <Reveal className="md:col-span-2 lg:col-span-5">
            <div className="space-y-4 lg:sticky lg:top-24">
              <a
                href="mailto:thambawitanethmi@gmail.com"
                aria-label="Send email"
                title="Send email"
                className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-black/40 p-4 backdrop-blur-xl transition hover:border-emerald-400 hover:shadow-[0_0_22px_rgba(16,185,129,0.14)]"
              >
                <Mail size={18} className="text-emerald-400" />
                <span className="text-sm text-gray-300">Email</span>
              </a>

              <a
                href="tel:+94713365646"
                aria-label="Call phone"
                title="Call phone"
                className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-black/40 p-4 backdrop-blur-xl transition hover:border-emerald-400 hover:shadow-[0_0_22px_rgba(16,185,129,0.14)]"
              >
                <Phone size={18} className="text-emerald-400" />
                <span className="text-sm text-gray-300">Phone</span>
              </a>

              <a
                href="https://github.com/NethmiThambawita"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-black/40 p-4 backdrop-blur-xl transition hover:border-emerald-400 hover:shadow-[0_0_22px_rgba(16,185,129,0.14)]"
              >
                <GitHub size={18} className="text-emerald-400" />
                <span className="text-sm text-gray-300">GitHub Profile</span>
              </a>

              <a
                href="https://www.linkedin.com/in/nethmi-thambawita/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-black/40 p-4 backdrop-blur-xl transition hover:border-emerald-400 hover:shadow-[0_0_22px_rgba(16,185,129,0.14)]"
              >
                <LinkedinIcon size={18} className="text-emerald-400" />
                <span className="text-sm text-gray-300">LinkedIn Profile</span>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-black/40 p-4 backdrop-blur-xl">
                <MapPin size={18} className="text-emerald-400" />
                <span className="text-sm text-gray-300">
                  Dehiwala, Sri Lanka
                </span>
              </div>
            </div>
          </Reveal>
          {/* Form */}
          <Reveal delay={0.08} className="md:col-span-3 lg:col-span-7">
            <form
              onSubmit={submit}
              className="space-y-4 rounded-2xl border border-emerald-500/20 bg-black/40 p-6 backdrop-blur-xl transition hover:shadow-[0_0_34px_rgba(16,185,129,0.10)] lg:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-emerald-500/20 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />

                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="Your email"
                  className="w-full rounded-lg border border-emerald-500/20 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
              </div>

              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-emerald-500/20 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />

              <button
                type="submit"
                disabled={submitting}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 active:scale-95 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative z-10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:tracking-wide">
                  {submitting
                    ? "Sending..."
                    : sent
                      ? "Message sent ✓"
                      : error
                        ? "Couldn't send — try again"
                        : "Send message"}
                </span>

                <Send
                  size={14}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-y-1 group-hover:rotate-12"
                />
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
