"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skillCategories = [
  {
    label: "Frontend",
    skills: ["Angular", "TypeScript", "RxJS", "Angular Material", "SCSS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Database",
    skills: ["SQL Server", "Query Optimization"],
  },
  {
    label: "Automation",
    skills: ["ATS Automation", "AI Workflow Integration"],
  },
  {
    label: "Security",
    skills: ["JWT Authentication", "Role-Based Access Control"],
  },
  {
    label: "Deployment",
    skills: ["Linux", "PM2", "NGINX", "AWS EC2", "Azure"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Postman", "Jira", "VS Code"],
  },
];

export function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="px-6 py-24" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="mb-2 font-mono text-sm tracking-widest text-primary">
            03. Skills
          </h2>
          <h3 className="mb-10 text-3xl font-bold text-foreground">
            Technologies I Work With
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <div
              key={category.label}
              className={`rounded-lg border border-border bg-card p-5 transition-all duration-500 hover:border-primary/40 hover:-translate-y-0.5 ${
                isVisible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: isVisible ? `${0.05 + i * 0.07}s` : "0s",
              }}
            >
              <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                {category.label}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
