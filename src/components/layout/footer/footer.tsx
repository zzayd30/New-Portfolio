import { ArrowUpRight, ArrowUp } from "lucide-react";

import { contactContent } from "@/data/contact";
import { primaryNavigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="site-footer border-t border-border">
      <div className="mx-auto w-full max-w-display px-page-gutter">
        <div className="footer-grid">
          <div>
            <a
              href="#home"
              className="font-heading text-heading font-medium tracking-heading transition-opacity duration-motion-fast ease-editorial hover:opacity-60"
            >
              Zaid.
            </a>
            <p className="mt-component-gap max-w-prose text-small text-muted-foreground">
              Software engineer building dependable full-stack and AI-powered products.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
              Explore
            </p>
            <ul className="mt-component-gap footer-nav-list">
              {primaryNavigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-small text-foreground transition-opacity duration-motion-fast ease-editorial hover:opacity-60"
                  >
                    {item.navigationLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
              Connect
            </p>
            <ul className="mt-component-gap footer-nav-list">
              <li>
                <a
                  href={`mailto:${contactContent.email}`}
                  className="inline-flex items-center gap-control-x text-small text-foreground transition-opacity duration-motion-fast ease-editorial hover:opacity-60"
                >
                  Email
                  <ArrowUpRight aria-hidden="true" className="size-icon" />
                </a>
              </li>
              {contactContent.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-control-x text-small text-foreground transition-opacity duration-motion-fast ease-editorial hover:opacity-60"
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden="true" className="size-icon" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom border-t border-border">
          <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Zaid
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-control-x font-label text-label uppercase tracking-label text-foreground transition-opacity duration-motion-fast ease-editorial hover:opacity-60"
          >
            Back to top
            <ArrowUp
              aria-hidden="true"
              className="size-icon transition-transform duration-motion-fast ease-editorial group-hover:-translate-y-icon-nudge"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
