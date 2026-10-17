import { cn } from "@/lib/cn";

/** 명함과 동일한 쇼핑백 + 미소 심볼 (public/logo.svg와 같은 도형) */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 30" aria-hidden className={cn("size-8", className)}>
      <path
        d="M6.2 4.3 H23.8 L25.4 25.4 H4.6 Z"
        fill="#ffffff"
        stroke="#24242b"
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
      <circle cx="10.4" cy="10.6" r="1.5" fill="#c87932" />
      <circle cx="19.6" cy="10.6" r="1.5" fill="#c87932" />
      <path
        d="M10.4 13.7 C10.6 20.1 19.4 20.1 19.6 13.7"
        fill="none"
        stroke="#c87932"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
