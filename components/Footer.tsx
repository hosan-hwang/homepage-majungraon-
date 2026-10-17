import Link from "next/link";
import { footer, site } from "@/content/home";
import { Container } from "./ui/Container";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-300">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-9" />
              <div>
                <p className="text-lg font-extrabold leading-tight text-white">{site.legalName}</p>
                <p className="text-[11px] tracking-widest text-ink-400">{site.englishName}</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-ink-400">{site.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">{footer.description}</p>
            <a
              href={site.phoneHref}
              className="mt-5 inline-block text-xl font-extrabold text-white hover:text-brand-200"
            >
              {site.phone}
            </a>
            <p className="mt-1 text-xs text-ink-500">{site.hours}</p>
          </div>

          {footer.linkGroups.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <p className="text-sm font-bold text-white">{group.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => {
                  const isInternal = link.href.startsWith("/");
                  return (
                    <li key={link.href}>
                      {isInternal ? (
                        <Link href={link.href} className="text-sm text-ink-400 transition-colors hover:text-white">
                          {link.label}
                        </Link>
                      ) : (
                        <a href={link.href} className="text-sm text-ink-400 transition-colors hover:text-white">
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-ink-800 pt-8">
          <p className="text-sm font-bold text-white">{footer.business.heading}</p>
          <dl className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {footer.business.rows.map((row) => (
              <div key={row.label} className="flex gap-2 text-xs leading-relaxed">
                <dt className="shrink-0 text-ink-500">{row.label}</dt>
                <dd className="text-ink-300">{row.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-xs leading-relaxed text-ink-500">{footer.disclaimer}</p>

          <div className="mt-6 flex flex-col gap-2 border-t border-ink-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-ink-500">{footer.copyright}</p>
            <Link
              href="/privacy"
              className="text-xs font-semibold text-ink-300 underline underline-offset-2 hover:text-white"
            >
              개인정보처리방침
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
