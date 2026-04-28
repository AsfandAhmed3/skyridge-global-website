"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Accounting & Services",
    href: "/services",
    children: [
      { label: "Services Overview", href: "/services" },
      { label: "Migration Advisory", href: "/services/migration-advisory" },
      { label: "Business & Deal Advisory", href: "/services/business-advisory" },
      { label: "Wealth & Private Office", href: "/services/wealth-private-office" },
      { label: "Corporate Structuring", href: "/services/corporate-structuring" },
    ],
  },
  { label: "Industries", href: "/industries" },
  {
    label: "Compliance",
    href: "/compliance",
    children: [
      { label: "Compliance Overview", href: "/compliance" },
      { label: "CICC Framework", href: "/compliance/cicc-framework" },
      { label: "Privacy Policy", href: "/compliance/privacy-policy" },
      { label: "Terms of Service", href: "/compliance/terms-of-service" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company Overview", href: "/about" },
      { label: "Leadership & Team", href: "/about/team" },
    ],
  },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenLabel(null);
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-4">
        <div
          ref={navRef}
          className="flex items-center gap-6 rounded-2xl border border-border-subtle bg-surface/60 px-5 py-3 shadow-lg shadow-black/30"
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/60 bg-background/60">
              <Image src="/logo.png" alt="Skyridge Global" width={26} height={26} />
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold tracking-[0.3em] text-text-main">
                SKYRIDGE
              </div>
              <div className="text-[0.65rem] uppercase tracking-[0.4em] text-text-muted">
                Global
              </div>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-text-muted lg:flex">
            {navigation.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    type="button"
                    className="px-1 py-2 transition-colors hover:text-text-main"
                    aria-expanded={openLabel === item.label}
                    onClick={() =>
                      setOpenLabel((prev) =>
                        prev === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-1 py-2 transition-colors hover:text-text-main"
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && openLabel === item.label ? (
                  <div className="absolute left-0 top-9 w-64 rounded-xl border border-border-subtle bg-surface/95 p-3 shadow-xl backdrop-blur">
                    <div className="flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenLabel(null)}
                          className="rounded-lg px-3 py-3 text-[0.62rem] uppercase tracking-[0.2em] text-text-muted transition hover:bg-background/60 hover:text-text-main"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <Link href="/contact" className="btn-primary hidden h-10 lg:inline-flex">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
