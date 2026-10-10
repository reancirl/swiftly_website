import { Check, ArrowRight, Workflow } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { subscriptionPlan } from "@/lib/content";

type PricingCardProps = {
  /** Where the primary CTA points. */
  ctaHref?: string;
  ctaLabel?: string;
  className?: string;
};

/**
 * The single, prominent pricing card for the Development Subscription.
 * The one-workstream limitation is surfaced in the headline feature and the
 * clarifier note — never buried in fine print.
 */
export function PricingCard({
  ctaHref = "/contact?engagement=subscription",
  ctaLabel = "Start a subscription inquiry",
  className,
}: PricingCardProps) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-sm border border-gold-base/40 bg-emerald-deep text-cream shadow-[0_24px_60px_-28px_rgba(0,98,65,0.55)] " +
        (className ?? "")
      }
    >
      {/* gold top edge */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 gold-gradient"
      />

      <div className="p-8 md:p-10">
        <div className="flex items-center justify-between gap-4">
          <p className="label-eyebrow text-gold-light">{subscriptionPlan.name}</p>
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-gold-base/40 px-2.5 py-1 text-[0.7rem] uppercase tracking-[0.15em] text-gold-light">
            Flagship
          </span>
        </div>

        <div className="mt-6 flex items-end gap-2">
          <span className="font-serif text-5xl md:text-6xl tracking-display text-cream leading-none">
            {subscriptionPlan.price}
          </span>
          <span className="pb-1 text-cream/70 text-lg">
            {subscriptionPlan.period}
          </span>
        </div>

        {/* Primary feature — the one-workstream promise, front and center */}
        <div className="mt-7 flex items-start gap-3 rounded-sm border border-gold-base/30 bg-emerald-mid/30 p-4">
          <Workflow
            size={20}
            strokeWidth={1.5}
            className="mt-0.5 shrink-0 text-gold-light"
          />
          <div>
            <p className="font-serif text-lg text-cream leading-tight">
              {subscriptionPlan.primaryFeature}
            </p>
            <p className="mt-1.5 text-sm text-cream/75 leading-relaxed">
              {subscriptionPlan.summary}
            </p>
          </div>
        </div>

        <ul className="mt-8 space-y-3">
          {subscriptionPlan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-cream/90">
              <Check
                size={17}
                strokeWidth={2}
                className="mt-1 shrink-0 text-gold-light"
              />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 border-t border-gold-base/20 pt-6 text-sm italic text-cream/70 leading-relaxed">
          {subscriptionPlan.clarifier}
        </p>

        <div className="mt-8">
          <Button href={ctaHref} variant="gold" size="lg" className="w-full">
            {ctaLabel}
            <ArrowRight size={16} />
          </Button>
        </div>
        <p className="mt-4 text-center text-xs text-cream/55">
          No dedicated full-time developer. No hourly billing. One focused
          workstream.
        </p>
      </div>
    </div>
  );
}
