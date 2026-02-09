"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Software Engineer",
  "Angular Developer",
  "Node.js Developer",
  "Full Stack Developer",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setText(
          isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 animate-fade-in font-mono text-sm tracking-widest text-primary">
          Hi, my name is
        </p>
        <h1 className="mb-4 animate-fade-up text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Venkataramanan S
        </h1>
        <h2 className="mb-6 flex items-center justify-center text-2xl font-semibold text-muted-foreground sm:text-3xl lg:text-4xl">
          <span className="border-r-2 border-primary pr-1 animate-typing-cursor">
            {text}
          </span>
        </h2>
        <p
          className="mx-auto mb-10 max-w-xl text-pretty leading-relaxed text-muted-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          Building scalable SaaS applications and automation-driven solutions.
          Experienced in production-grade systems, REST APIs, and workflow
          optimization.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-primary bg-transparent px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/10"
          >
            Contact Me
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:text-primary hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-all hover:text-primary hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
