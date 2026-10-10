import { Container } from "@/components/layout/Container";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { faqs as allFaqs, type Faq } from "@/lib/content";

type FaqSectionProps = {
  faqs?: Faq[];
  heading?: string;
  eyebrow?: string;
};

export function FaqSection({
  faqs = allFaqs,
  heading = "The short answers.",
  eyebrow = "Common questions",
}: FaqSectionProps) {
  return (
    <section
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 border-t border-gold-base/20"
    >
      <Container size="md">
        <div className="text-center max-w-2xl mx-auto">
          <p className="label-eyebrow gold-gradient-text">{eyebrow}</p>
          <h2
            id="faq-heading"
            className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
          >
            {heading}
          </h2>
        </div>
        <Accordion className="mt-14">
          {faqs.map((f) => (
            <AccordionItem key={f.q} question={f.q}>
              <p>{f.a}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
