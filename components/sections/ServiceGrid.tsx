import { services } from "@/content/home";
import { Section } from "../ui/Section";
import { OwnerBadge } from "../ui/Badge";
import { ServiceCard } from "../ServiceCard";

export function ServiceGrid() {
  return (
    <Section
      id="services"
      tone="muted"
      eyebrow={services.eyebrow}
      title={services.title}
      description={services.description}
    >
      <div className="mb-8 flex flex-col gap-2 rounded-xl border border-ink-200 bg-white p-4 sm:flex-row sm:items-center sm:gap-6">
        {services.legend.map((item) => (
          <div key={item.owner} className="flex items-center gap-2.5">
            <OwnerBadge owner={item.owner} />
            <span className="text-xs leading-relaxed text-ink-600">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((item) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            description={item.description}
            owner={item.owner}
            features={item.features}
          />
        ))}
      </div>
    </Section>
  );
}
