"use client";

import { MapPin, Briefcase, FileCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="px-6 py-24" ref={ref}>
      <div
        className={`mx-auto max-w-4xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="mb-2 font-mono text-sm tracking-widest text-primary">
          01. About Me
        </h2>
        <h3 className="mb-8 text-3xl font-bold text-foreground">Who I Am</h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="mb-4 leading-relaxed text-muted-foreground">
              I&apos;m a Software Engineer with ~3 years of experience building
              production-grade SaaS applications and automation-driven systems. I
              specialize in Angular and Node.js, with strong expertise in REST
              API development, authentication systems, scalable frontend
              architecture, and workflow automation.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m passionate about solving complex problems through clean,
              efficient code and building systems that improve operational
              efficiency. Currently based in Dubai, UAE with a valid work visa
              and available for immediate joining.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: MapPin,
                title: "Location",
                value: "Dubai, UAE",
                delay: 0.1,
              },
              {
                icon: Briefcase,
                title: "Experience",
                value: "~3 Years",
                delay: 0.2,
              },
              {
                icon: FileCheck,
                title: "Status",
                value: "Immediate Joiner",
                delay: 0.3,
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all duration-500 hover:border-primary/40 hover:-translate-y-0.5 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${item.delay}s` : "0s",
                }}
              >
                <item.icon className="h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
