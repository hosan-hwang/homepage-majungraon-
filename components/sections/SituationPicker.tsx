"use client";

import { useId, useState } from "react";
import { situations } from "@/content/home";
import { cn } from "@/lib/cn";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export function SituationPicker() {
  const [activeId, setActiveId] = useState(situations.items[0].id);
  const baseId = useId();
  const active = situations.items.find((item) => item.id === activeId) ?? situations.items[0];

  return (
    <Section
      id="situations"
      tone="muted"
      align="center"
      eyebrow={situations.eyebrow}
      title={situations.title}
      description={situations.description}
    >
      <div role="tablist" aria-label={situations.title} className="grid gap-3 sm:grid-cols-3">
        {situations.items.map((item) => {
          const isActive = item.id === active.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${item.id}`}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "rounded-2xl border p-5 text-left transition-all",
                isActive
                  ? "border-brand-600 bg-white shadow-lg shadow-brand-600/10 ring-1 ring-brand-600"
                  : "border-ink-200 bg-white/60 hover:border-ink-300 hover:bg-white",
              )}
            >
              <span
                className={cn(
                  "block text-base font-bold sm:text-lg",
                  isActive ? "text-brand-700" : "text-ink-900",
                )}
              >
                {item.label}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-ink-600">{item.summary}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${active.id}`}
        aria-labelledby={`${baseId}-tab-${active.id}`}
        className="mt-6 rounded-2xl border border-ink-200 bg-white p-6 sm:p-8"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <ul className="grid flex-1 gap-3 text-left sm:grid-cols-3 lg:gap-6">
            {active.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-600"
                />
                <span className="text-sm leading-relaxed text-ink-700">{point}</span>
              </li>
            ))}
          </ul>
          <Button href={active.cta.href} size="lg" className="shrink-0">
            {active.cta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
