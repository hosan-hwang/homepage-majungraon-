import { faq } from "@/content/home";
import { Section } from "../ui/Section";
import { Accordion } from "../Accordion";

export function Faq() {
  return (
    <Section id="faq" eyebrow={faq.eyebrow} title={faq.title} description={faq.description}>
      <Accordion items={faq.items} defaultOpenIndex={0} />
    </Section>
  );
}
