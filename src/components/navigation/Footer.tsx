import Link from "next/link";
import { Globe, MessageCircle, Send } from "lucide-react";

const services = [
  "Investment Migration",
  "Wealth Advisory",
  "Corporate Structuring",
  "Private Office",
  "Asset Protection",
];

const serviceLinks = [
  { label: "Investment Migration", href: "/services/migration-advisory" },
  { label: "Wealth Advisory", href: "/services/wealth-private-office" },
  { label: "Corporate Structuring", href: "/services/corporate-structuring" },
  { label: "Private Office", href: "/services/wealth-private-office" },
  { label: "Asset Protection", href: "/services" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about/team" },
  { label: "Insights", href: "/insights" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface/60">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr]">
        <div className="space-y-4">
          <div className="text-lg font-semibold tracking-[0.3em]">SKYRIDGE</div>
          <p className="text-sm leading-6 text-text-muted">
            Bespoke migration and business advisory for ultra-high-net-worth
            individuals navigating complex international landscapes.
          </p>
          <div className="flex items-center gap-3 text-sm text-text-muted">
            {[Globe, MessageCircle, Send].map((Icon, index) => (
              <span
                key={index}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-text-muted"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Services
          </div>
          <ul className="space-y-2 text-text-muted">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-text-muted transition hover:text-text-main"
                  >
                    {item.label}
                  </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <div className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Company
          </div>
          <ul className="space-y-2">
            {company.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-text-muted transition hover:text-text-main"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <div className="text-xs uppercase tracking-[0.3em] text-text-muted">
            Global Coverage
          </div>
          <p className="text-sm leading-6 text-text-muted">
            Advisory support for cross-border mandates and international mobility planning.
          </p>
        </div>

          <div className="space-y-3 text-sm">
            <div className="text-xs uppercase tracking-[0.3em] text-text-muted">
              Office
            </div>
            <p className="text-sm leading-6 text-text-muted">
              2030 Bristol Circle, Suite 210
              <br />
              Oakville, ON L6H 0H2
              <br />
              Canada
            </p>
          </div>
      </div>

      <div className="border-t border-border-subtle">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 text-[0.65rem] uppercase tracking-[0.2em] text-text-muted md:flex-row md:items-center md:justify-between">
          <span>© 2026 Skyridge Global. All rights reserved.</span>
          <div className="flex flex-wrap gap-4">
            <Link href="/compliance/privacy-policy">Privacy Policy</Link>
            <Link href="/compliance/terms-of-service">Terms of Service</Link>
            <Link href="/compliance/cicc-framework">Regulatory Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
