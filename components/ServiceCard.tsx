import type { ServiceOwner } from "@/content/home";
import { OwnerBadge } from "./ui/Badge";

type ServiceCardProps = {
  title: string;
  description: string;
  owner: ServiceOwner;
  features: readonly string[];
};

export function ServiceCard({ title, description, owner, features }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold leading-snug text-ink-900">{title}</h3>
        <OwnerBadge owner={owner} />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink-600">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-ink-100 pt-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="rounded-md bg-ink-50 px-2 py-1 text-xs font-medium text-ink-600"
          >
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
