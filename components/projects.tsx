"use client";

import { ExternalLink, Github, Folder } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    title: "ATS Automation Platform",
    description:
      "End-to-end applicant tracking system automating recruiter workflows, reducing manual effort by ~70% through intelligent pipeline management and automated candidate processing.",
    tech: ["Angular", "Node.js", "SQL Server", "REST APIs", "JWT Auth"],
    github: "#",
    live: "#",
  },
  {
    title: "AI-Powered Candidate Screening",
    description:
      "AI-integrated workflow for automated candidate screening that analyzes resumes against job requirements, significantly improving recruiter efficiency and time-to-hire.",
    tech: ["Angular", "Express.js", "AI Integration", "RxJS", "SCSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Resume Relevancy Scoring System",
    description:
      "Intelligent scoring engine that evaluates resume-to-job relevancy using weighted criteria, enabling recruiters to prioritize top candidates faster.",
    tech: ["TypeScript", "Node.js", "SQL Server", "REST APIs"],
    github: "#",
    live: "#",
  },
  {
    title: "Recruiter Dashboard & SaaS Modules",
    description:
      "Comprehensive dashboard with 7+ independently delivered modules including analytics, workflow management, and role-based access control for recruitment teams.",
    tech: ["Angular Material", "Node.js", "RBAC", "PM2", "NGINX"],
    github: "#",
    live: "#",
  },
];

export function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="px-6 py-24" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="mb-2 font-mono text-sm tracking-widest text-primary">
            02. Projects
          </h2>
          <h3 className="mb-10 text-3xl font-bold text-foreground">
            Featured Work
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_hsl(var(--primary)/0.08)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${0.1 + i * 0.1}s` : "0s",
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <Folder className="h-10 w-10 text-primary transition-transform group-hover:rotate-[-6deg]" />
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <h4 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h4>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
