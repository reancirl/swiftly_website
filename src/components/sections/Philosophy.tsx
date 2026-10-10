import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/brand/Reveal";
import { FishIcon } from "@/components/brand/FishIcon";
import { principles, lessMore } from "@/lib/content";

export function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden bg-emerald-deep text-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 opacity-[0.05]"
      >
        <FishIcon size={360} color="current" className="text-cream" />
      </div>

      <Container size="xl" className="relative py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow text-gold-light">The Swiftly way</p>
          <h2
            id="philosophy-heading"
            className="mt-5 font-serif text-3xl md:text-5xl tracking-display leading-[1.08] text-cream"
          >
            We move swiftly by{" "}
            <span className="gold-gradient-text italic">focusing on what matters.</span>
          </h2>
          <p className="mt-6 text-cream/80 leading-relaxed">
            Swiftly does not mean reckless. It means disciplined, thoughtful
            progress — building the right thing, cutting the rest, and letting
            experienced judgment lead the way AI assists.
          </p>
        </Reveal>

        {/* Less / More typographic transitions */}
        <Reveal
          stagger={0.1}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-y border-gold-base/20 py-12"
        >
          {lessMore.map((pair) => (
            <div key={pair.less}>
              <p className="font-serif text-2xl md:text-3xl text-cream/45 tracking-tightish line-through decoration-gold-base/40 decoration-1">
                {pair.less}
              </p>
              <p className="mt-2 font-serif text-2xl md:text-3xl gold-gradient-text tracking-tightish">
                {pair.more}
              </p>
            </div>
          ))}
        </Reveal>

        {/* Three principles */}
        <Reveal
          stagger={0.1}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title}>
                <div className="flex items-center justify-center h-12 w-12 rounded-sm border border-gold-base/40 text-gold-light">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-cream tracking-tightish">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-cream/75 leading-relaxed">
                  {p.body}
                </p>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}
