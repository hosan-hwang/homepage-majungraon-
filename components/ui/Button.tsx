import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700",
  secondary: "bg-ink-900 text-white hover:bg-ink-800",
  outline: "bg-white text-ink-900 ring-1 ring-inset ring-ink-200 hover:bg-ink-50",
  ghost: "bg-white/10 text-white ring-1 ring-inset ring-white/25 hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

type StyleProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = StyleProps & { href: string } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof StyleProps | "href"
  >;

type ButtonAsButton = StyleProps & { href?: never } & Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    keyof StyleProps
  >;

/** 링크(href 있음)와 버튼(href 없음) 양쪽으로 쓰는 공통 CTA 컴포넌트 */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  if (typeof props.href === "string") {
    const { href, variant = "primary", size = "md", className, children, ...rest } = props;
    const classes = cn(base, variants[variant], sizes[size], className);
    const isInternal = href.startsWith("/") && !href.startsWith("//");

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { href: _href, variant = "primary", size = "md", className, children, ...rest } = props;
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}
