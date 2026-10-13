"use client";

import { usePathname } from "next/navigation";

/** Routes that render as focused, standalone pages — no global nav or footer. */
const FOCUSED_ROUTES = ["/waitlist"];

/**
 * Hides the global site chrome (Navbar / Footer) on focused routes. A nested
 * layout can't remove the parent's chrome, so we gate it here at the root.
 */
export function RouteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const focused = FOCUSED_ROUTES.some(
    (route) => pathname === route || pathname?.startsWith(`${route}/`),
  );
  if (focused) return null;
  return <>{children}</>;
}
