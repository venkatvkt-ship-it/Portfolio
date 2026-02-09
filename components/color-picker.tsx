"use client";

import { useState } from "react";
import { Palette, X } from "lucide-react";

const themes = [
  { name: "Teal", hue: "166 72% 57%", bg: "#4fd1c5" },
  { name: "Blue", hue: "217 91% 60%", bg: "#3b82f6" },
  { name: "Amber", hue: "38 92% 50%", bg: "#f59e0b" },
  { name: "Rose", hue: "346 77% 60%", bg: "#f43f5e" },
  { name: "Green", hue: "142 71% 45%", bg: "#22c55e" },
  { name: "Orange", hue: "25 95% 53%", bg: "#f97316" },
];

function applyTheme(hsl: string) {
  const root = document.documentElement;
  root.style.setProperty("--primary", hsl);
  root.style.setProperty("--accent", hsl);
  root.style.setProperty("--ring", hsl);
  root.style.setProperty("--sidebar-primary", hsl);
  root.style.setProperty("--sidebar-ring", hsl);
  root.style.setProperty("--chart-1", hsl);
}

export function ColorPicker() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Teal");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-3 shadow-lg">
          <div className="flex items-center justify-between gap-4 px-1 pb-1">
            <span className="text-xs font-medium text-foreground">
              Accent Color
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Close color picker"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((theme) => (
              <button
                key={theme.name}
                type="button"
                onClick={() => {
                  applyTheme(theme.hue);
                  setActive(theme.name);
                }}
                className="group flex flex-col items-center gap-1.5"
                aria-label={`Switch to ${theme.name} theme`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-transform group-hover:scale-110 ${
                    active === theme.name
                      ? "border-foreground scale-110"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: theme.bg }}
                />
                <span className="text-[10px] text-muted-foreground">
                  {theme.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-primary shadow-lg transition-transform hover:scale-110"
        aria-label="Open color picker"
      >
        <Palette className="h-5 w-5" />
      </button>
    </div>
  );
}
