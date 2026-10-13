import { Container } from "@/components/layout/Container";
import { GoldDivider } from "@/components/brand/GoldDivider";
import { Reveal } from "@/components/brand/Reveal";
import { philippineAdvantages } from "@/lib/content";

export function PhilippineAdvantage() {
  return (
    <section
      aria-labelledby="ph-heading"
      className="py-20 md:py-28 bg-emerald-soft border-t border-gold-base/20"
    >
      <Container size="xl">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="label-eyebrow gold-gradient-text">Where we work</p>
            <h2
              id="ph-heading"
              className="mt-4 font-serif text-3xl md:text-5xl tracking-display text-emerald-deep leading-[1.1]"
            >
              Global standards.
              <br />
              <span className="italic gold-gradient-text">Philippine advantage.</span>
            </h2>
            <GoldDivider width="medium" className="mt-8" />
            <p className="mt-8 text-ink-muted leading-relaxed max-w-md">
              Swiftly is based in Iligan, Philippines. Our operating base is how
              we offer expert-led engineering at an accessible international
              price — high-quality work and an efficient model, not cheap
              outsourcing.
            </p>
          </div>

          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {philippineAdvantages.map((item) => (
              <li
                key={item.title}
                className="border border-gold-base/30 rounded-sm p-7 bg-cream"
              >
                <h3 className="font-serif text-xl text-emerald-deep tracking-tightish">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
