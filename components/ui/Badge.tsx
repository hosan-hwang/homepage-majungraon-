import { cn } from "@/lib/cn";
import type { ServiceOwner } from "@/content/home";
import { services } from "@/content/home";

const ownerStyles: Record<ServiceOwner, string> = {
  direct: "bg-brand-50 text-brand-700 ring-brand-200",
  partner: "bg-ink-100 text-ink-700 ring-ink-200",
};

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "brand";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset",
        tone === "brand" ? "bg-brand-50 text-brand-700 ring-brand-200" : "bg-ink-100 text-ink-700 ring-ink-200",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** '직접서비스' / '파트너' 뱃지. 라벨 텍스트는 content/home.ts 에서 관리합니다. */
export function OwnerBadge({ owner, className }: { owner: ServiceOwner; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset",
        ownerStyles[owner],
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("size-1.5 rounded-full", owner === "direct" ? "bg-brand-500" : "bg-ink-400")}
      />
      {services.badgeLabels[owner]}
    </span>
  );
}
