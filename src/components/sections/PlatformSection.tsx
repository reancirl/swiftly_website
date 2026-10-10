import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/brand/Reveal";
import { FishIcon } from "@/components/brand/FishIcon";
import { platformSteps } from "@/lib/content";

export function PlatformSection() {
  return (
    <section
      aria-labelledby="platform-heading"
      className="relative overflow-hidden bg-emerald-deep text-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -right-10 opacity-[0.06]"
      >
        <FishIcon size={420} color="current" className="text-cream" />
      </div>

      <Container size="xl" className="relative py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow text-gold-light">Our platform</p>
          <h2
            id="platform-heading"
            className="mt-5 font-serif text-3xl md:text-5xl tracking-display leading-[1.08] text-cream"
          >
            Not another Trello board.
            <br />
            <span className="gold-gradient-text italic">A smarter way to build.</span>
          </h2>
          <p className="mt-6 text-cream/80 leading-relaxed">
            Most subscription studios run the client experience on a generic
            Trello or Linear board. We are building our own AI-assisted workflow
            platform — from request to release, in one intelligent workspace.
            Human engineers lead every build; AI helps us prepare, implement,
            and test faster.
          </p>
        </Reveal>

        <Reveal
          stagger={0.07}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold-base/20 border border-gold-base/20 rounded-sm overflow-hidden"
        >
          {platformSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.n} className="bg-emerald-deep p-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center h-11 w-11 rounded-sm border border-gold-base/40 text-gold-light">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                  <span className="label-eyebrow text-gold-light">
                    Step {step.n}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-xl text-cream tracking-tightish">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-cream/75 leading-relaxed">
                  {step.body}
                </p>
              </div>
            );
          })}
        </Reveal>

        <p className="mt-10 max-w-2xl text-sm text-cream/60 leading-relaxed">
          We are actively building this platform. AI assists throughout the
          development lifecycle, but it does not autonomously ship production
          software — human engineering oversight remains essential to every
          release.
        </p>
      </Container>
    </section>
  );
}
