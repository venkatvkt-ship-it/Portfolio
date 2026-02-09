"use client";

import { Award, Zap, Package, Trophy } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useState } from "react";

const achievements = [
  {
    icon: Zap,
    metric: 70,
    suffix: "%",
    prefix: "~",
    label: "Reduction in Manual Effort",
    description:
      "Automated recruiter workflows through ATS automation, dramatically reducing repetitive manual tasks.",
  },
  {
    icon: Award,
    metric: 60,
    suffix: "%",
    prefix: "~",
    label: "Faster Workflow Speed",
    description:
      "Optimized application architecture and database queries to significantly improve overall processing speed.",
  },
  {
    icon: Package,
    metric: 7,
    suffix: "+",
    prefix: "",
    label: "Major Modules Delivered",
    description:
      "Independently developed and shipped over 7 major product modules for the Tresume SaaS platform.",
  },
  {
    icon: Trophy,
    metric: 0,
    suffix: "",
    prefix: "",
    label: "Intellectual Powerhouse of the Crew",
    description:
      "Recognized by the team for exceptional technical problem-solving and consistent high-quality delivery.",
    displayValue: "Award",
  },
];

function AnimatedNumber({
  value,
  prefix,
  suffix,
  displayValue,
  animate,
}: {
  value: number;
  prefix: string;
  suffix: string;
  displayValue?: string;
  animate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate || displayValue) return;
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [animate, value, displayValue]);

  if (displayValue) return <>{displayValue}</>;
  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
}

export function Achievements() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="px-6 py-24" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="mb-2 font-mono text-sm tracking-widest text-primary">
            05. Achievements
          </h2>
          <h3 className="mb-10 text-3xl font-bold text-foreground">
            Measurable Impact
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <div
              key={item.label}
              className={`rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:-translate-y-0.5 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${0.1 + i * 0.1}s` : "0s",
              }}
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">
                    <AnimatedNumber
                      value={item.metric}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      displayValue={item.displayValue}
                      animate={isVisible}
                    />
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {item.label}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
