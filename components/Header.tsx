import Link from "next/link";
import { nav, site } from "@/content/home";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { LogoMark } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <LogoMark />
          <span className="text-lg font-extrabold tracking-tight text-ink-900">{site.legalName}</span>
          <span className="hidden text-xs text-ink-500 sm:inline">{site.tagline}</span>
        </Link>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-7 lg:flex">
          {nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden text-sm font-bold text-ink-900 sm:inline"
            aria-label={`전화 상담 ${site.phone}`}
          >
            {site.phone}
          </a>
          <Button href={nav.cta.href} className="hidden sm:inline-flex">
            {nav.cta.label}
          </Button>
        </div>
      </Container>
    </header>
  );
}
