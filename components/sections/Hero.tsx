import { hero, site } from "@/content/home";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 size-[34rem] rounded-full bg-brand-600/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -left-24 size-[28rem] rounded-full bg-brand-500/10 blur-3xl"
      />

      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-brand-200 ring-1 ring-inset ring-white/15">
              {hero.eyebrow}
            </span>

            <h1 className="mt-6 whitespace-pre-line text-3xl font-extrabold leading-[1.25] tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.2]">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {hero.description}
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {hero.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink-200 sm:text-base">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-brand-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} size="lg" variant="ghost">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <p className="mt-5 text-xs text-ink-400">{hero.noticeBadge}</p>
          </div>

          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 backdrop-blur-sm sm:p-8">
            <dl className="grid grid-cols-3 gap-4 border-b border-white/10 pb-6">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-xl font-extrabold text-white sm:text-2xl">{stat.value}</span>
                    <span className="mt-1 block text-xs leading-snug text-ink-400">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <p className="text-xs font-semibold text-ink-400">대표전화</p>
              <a
                href={site.phoneHref}
                className="mt-1 block text-2xl font-extrabold tracking-tight text-white hover:text-brand-200 sm:text-3xl"
              >
                {site.phone}
              </a>
              <p className="mt-3 text-xs leading-relaxed text-ink-400">{site.hours}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className={className}>
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
