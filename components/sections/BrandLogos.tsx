/* eslint-disable @next/next/no-img-element */
import { brands } from "@/content/home";
import { Section } from "../ui/Section";

export function BrandLogos() {
  return (
    <Section id="brands" eyebrow={brands.eyebrow} title={brands.title} description={brands.description}>
      <div className="grid gap-8 lg:grid-cols-3">
        {brands.groups.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-bold text-ink-900">{group.category}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {group.items.map((brand) => (
                <li
                  key={brand.name}
                  className="flex h-20 items-center justify-center rounded-xl border border-ink-200 bg-white px-4 grayscale transition-all hover:grayscale-0"
                >
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-9 w-auto max-w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-center text-sm font-semibold text-ink-500">{brand.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs leading-relaxed text-ink-500">{brands.footnote}</p>
    </Section>
  );
}
