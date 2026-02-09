"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const experiences = [
  {
    role: "Software Engineer",
    company: "ASTA CRS Pvt Ltd (Tresume Division)",
    period: "2022 - Present",
    highlights: [
      "Developed and maintained production-grade SaaS application modules for the Tresume recruitment platform.",
      "Architected scalable Angular frontend with modular, reusable components and lazy-loaded routes.",
      "Built and integrated RESTful APIs using Node.js and Express.js for candidate, job, and workflow management.",
      "Implemented ATS automation features reducing manual recruiter effort by ~70%.",
      "Delivered 7+ major modules independently with JWT-based authentication and role-based access control.",
      "Optimized SQL Server queries improving overall application performance.",
    ],
  },
  {
    role: "Trainee Engineer",
    company: "Protech Soft Technologies",
    period: "2021 - 2022",
    highlights: [
      "Built foundational skills in Angular and Node.js through hands-on project work.",
      "Contributed to frontend development of internal tools and client-facing applications.",
      "Gained experience in REST API integration and database operations.",
      "Collaborated with senior developers on performance improvements and workflow optimization.",
    ],
  },
];

export function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="px-6 py-24" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="mb-2 font-mono text-sm tracking-widest text-primary">
            04. Experience
          </h2>
          <h3 className="mb-10 text-3xl font-bold text-foreground">
            Where I&apos;ve Worked
          </h3>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-0 top-0 hidden w-px bg-border transition-all duration-1000 md:block md:left-[140px] ${
              isVisible ? "h-full" : "h-0"
            }`}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.role + exp.company}
                className={`relative flex flex-col gap-4 transition-all duration-600 md:flex-row ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
                style={{
                  transitionDelay: isVisible ? `${0.2 + i * 0.2}s` : "0s",
                }}
              >
                {/* Period */}
                <div className="shrink-0 md:w-[140px]">
                  <span className="font-mono text-sm text-primary">
                    {exp.period}
                  </span>
                </div>

                {/* Dot on timeline */}
                <div
                  className={`absolute left-[-5px] top-1.5 hidden h-2.5 w-2.5 rounded-full bg-primary transition-all duration-500 md:left-[136px] md:block ${
                    isVisible ? "scale-100" : "scale-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${0.3 + i * 0.2}s` : "0s",
                  }}
                />

                {/* Content */}
                <div className="flex-1 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40 md:ml-6">
                  <h4 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h4>
                  <p className="mb-4 text-sm text-primary">{exp.company}</p>
                  <ul className="flex flex-col gap-2">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
