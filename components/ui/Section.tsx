import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  tone?: "default" | "muted" | "dark";
  align?: "left" | "center";
  className?: string;
  headerClassName?: string;
  children: React.ReactNode;
};

const toneStyles: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-white text-ink-900",
  muted: "bg-ink-50 text-ink-900",
  dark: "bg-ink-950 text-white",
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  tone = "default",
  align = "left",
  className,
  headerClassName,
  children,
}: SectionProps) {
  const isDark = tone === "dark";
  const hasHeader = Boolean(eyebrow || title || description);

  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", toneStyles[tone], className)}>
      <Container>
        {hasHeader && (
          <div
            className={cn(
              "max-w-2xl",
              align === "center" && "mx-auto text-center",
              "mb-10 sm:mb-14",
              headerClassName,
            )}
          >
            {eyebrow && (
              <p
                className={cn(
                  "text-sm font-semibold tracking-wide",
                  isDark ? "text-brand-300" : "text-brand-600",
                )}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={cn(
                  "mt-3 text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl",
                  isDark ? "text-white" : "text-ink-900",
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-4 text-base leading-relaxed sm:text-lg",
                  isDark ? "text-ink-300" : "text-ink-600",
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
