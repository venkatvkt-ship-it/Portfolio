"use client";

import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "venkat@example.com",
    href: "mailto:venkat@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/venkat-s",
    href: "https://linkedin.com/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/venkat-s",
    href: "https://github.com/",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Send a message",
    href: "https://wa.me/",
  },
];

export function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="px-6 py-24" ref={ref}>
      <div
        className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="mb-2 font-mono text-sm tracking-widest text-primary">
          06. Contact
        </h2>
        <h3 className="mb-4 text-3xl font-bold text-foreground">
          Get In Touch
        </h3>
        <p className="mb-12 leading-relaxed text-muted-foreground">
          I&apos;m currently open to new opportunities and always happy to
          connect. Whether you have a question or just want to say hi, feel free
          to reach out.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-all duration-500 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_hsl(var(--primary)/0.08)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isVisible ? `${0.2 + i * 0.1}s` : "0s",
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">
                  {link.label}
                </p>
                <p className="text-sm text-muted-foreground">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <a
          href="mailto:venkat@example.com"
          className={`mt-10 inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
          style={{
            transitionDelay: isVisible ? "0.6s" : "0s",
            transitionDuration: "0.5s",
          }}
        >
          Say Hello
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
