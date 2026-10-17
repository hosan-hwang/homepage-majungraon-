import { timeline } from "@/content/home";
import { Section } from "../ui/Section";
import { OwnerBadge } from "../ui/Badge";
import { TimelineStep } from "../TimelineStep";

export function Timeline() {
  return (
    <Section
      id="timeline"
      eyebrow={timeline.eyebrow}
      title={timeline.title}
      description={timeline.description}
    >
      <ol className="relative grid gap-4 sm:gap-0">
        {timeline.steps.map((step, index) => (
          <TimelineStep
            key={step.step}
            step={step.step}
            title={step.title}
            summary={step.summary}
            duration={step.duration}
            details={step.details}
            badge={<OwnerBadge owner={step.owner} />}
            isLast={index === timeline.steps.length - 1}
          />
        ))}
      </ol>

      <p className="mt-8 text-xs leading-relaxed text-ink-500">{timeline.footnote}</p>
    </Section>
  );
}
