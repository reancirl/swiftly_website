"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";

const SERVICE_LINKS = [
  { href: "/services", label: "Overview", desc: "All three, compared" },
  { href: "/custom-development", label: "Custom Development", desc: "We build it for you" },
  { href: "/subscription", label: "Development Subscription", desc: "We build continuously" },
  {
    href: "/forward-deployed-engineering",
    label: "Forward Deployed Engineering",
    desc: "We build alongside you",
  },
];

const SERVICE_PREFIXES = [
  "/services",
  "/custom-development",
  "/subscription",
  "/forward-deployed-engineering",
];

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const servicesRef = React.useRef<HTMLLIElement | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the services dropdown on outside click / Escape.
  React.useEffect(() => {
    if (!servicesOpen) return;
    const onDown = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  const closeMobile = React.useCallback(() => setMobileOpen(false), []);
  const servicesActive = SERVICE_PREFIXES.some((p) => pathname.startsWith(p));
  // On the homepage, the hero is a full emerald band — let the navbar blend
  // into it at the top, then become a solid emerald bar on scroll.
  const onDarkHero = pathname === "/" && !scrolled;
  const darkBg = scrolled || onDarkHero;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-emerald-deep/95 backdrop-blur-md border-b border-gold-base/20"
          : onDarkHero
            ? "bg-emerald-deep border-b border-transparent"
            : "bg-cream/80 backdrop-blur-sm border-b border-transparent",
      )}
    >
      <Container size="xl">
        <nav
          aria-label="Primary"
          className="flex h-20 md:h-24 items-center justify-between"
        >
          <Link href="/" aria-label="Swiftlyph — home" className="flex items-center">
            <Logo variant={darkBg ? "dark" : "light"} size={56} priority />
          </Link>

          <ul className="hidden md:flex items-center gap-7">
            {/* Services dropdown */}
            <li
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
                className={cn(
                  "relative inline-flex items-center gap-1 text-sm font-medium tracking-tight transition-colors py-2",
                  darkBg
                    ? "text-cream hover:text-gold-light"
                    : "text-emerald-deep hover:text-emerald-mid",
                  servicesActive &&
                    "after:content-[''] after:absolute after:left-0 after:right-4 after:-bottom-0.5 after:h-px after:gold-gradient",
                )}
              >
                Services
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200",
                    servicesOpen && "rotate-180",
                  )}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full pt-3">
                  <ul className="w-80 rounded-sm border border-gold-base/30 bg-cream p-2 shadow-[0_24px_60px_-28px_rgba(0,98,65,0.5)]">
                    {SERVICE_LINKS.map((s) => {
                      const active = pathname === s.href;
                      return (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            onClick={() => setServicesOpen(false)}
                            className={cn(
                              "block rounded-sm px-4 py-3 transition-colors",
                              active
                                ? "bg-emerald-soft"
                                : "hover:bg-emerald-soft/60",
                            )}
                          >
                            <span className="block text-sm font-medium text-emerald-deep">
                              {s.label}
                            </span>
                            <span className="block text-xs text-ink-muted">
                              {s.desc}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>

            {NAV_LINKS.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative text-sm font-medium tracking-tight transition-colors py-2",
                      darkBg
                        ? "text-cream hover:text-gold-light"
                        : "text-emerald-deep hover:text-emerald-mid",
                      active &&
                        "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:gold-gradient",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <Button
              href="/contact"
              variant={darkBg ? "gold" : "primary"}
              size="sm"
            >
              Get started
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className={cn(
              "md:hidden inline-flex items-center justify-center h-10 w-10 rounded-sm",
              darkBg ? "text-cream" : "text-emerald-deep",
            )}
          >
            <Menu size={22} />
          </button>
        </nav>
      </Container>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-emerald-deep text-cream flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between h-20 px-6 border-b border-gold-base/20">
            <Logo variant="dark" size={52} />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center h-10 w-10 rounded-sm text-cream"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex-1 px-6 pt-10 overflow-y-auto">
            {/* Services group */}
            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="w-full flex items-center justify-between font-serif text-3xl tracking-tightish text-cream"
            >
              Services
              <ChevronDown
                size={22}
                className={cn(
                  "text-gold-light transition-transform",
                  mobileServicesOpen && "rotate-180",
                )}
              />
            </button>
            {mobileServicesOpen && (
              <ul className="mt-4 mb-2 space-y-3 border-l border-gold-base/30 pl-5">
                {SERVICE_LINKS.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      onClick={closeMobile}
                      className="block text-lg text-cream/90 hover:text-gold-light"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            <ul className="mt-8 space-y-6">
              {NAV_LINKS.map((link) => {
                const active = pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className={cn(
                        "block font-serif text-3xl tracking-tightish",
                        active ? "gold-gradient-text" : "text-cream",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="px-6 pb-10 pt-6 border-t border-gold-base/20">
            <Button
              href="/contact"
              variant="gold"
              size="lg"
              className="w-full"
              onClick={closeMobile}
            >
              Get started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
