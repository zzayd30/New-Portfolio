import { ArrowUpRight } from "lucide-react";

import type { ContactContent } from "@/types/contact";

interface ContactDetailsProps {
  content: ContactContent;
}

export function ContactDetails({ content }: ContactDetailsProps) {
  return (
    <div>
      <p className="text-body text-muted-foreground">{content.invitation}</p>
      <dl className="mt-layout border-y border-border">
        <div className="py-component-gap">
          <dt className="font-mono text-label uppercase tracking-label text-muted-foreground">Email</dt>
          <dd className="mt-control-y">
            <a
              href={`mailto:${content.email}`}
              className="text-small text-foreground transition-opacity duration-motion-fast ease-editorial hover:opacity-60"
            >
              {content.email}
            </a>
          </dd>
        </div>
        <div className="border-t border-border py-component-gap">
          <dt className="font-mono text-label uppercase tracking-label text-muted-foreground">Location</dt>
          <dd className="mt-control-y text-small text-foreground">{content.location}</dd>
        </div>
      </dl>
      <ul className="mt-layout flex flex-wrap gap-x-layout gap-y-control-y">
        {content.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-control-x font-label text-label uppercase tracking-label text-foreground transition-opacity duration-motion-fast ease-editorial hover:opacity-60"
            >
              {link.label}
              <ArrowUpRight
                aria-hidden="true"
                className="size-icon transition-transform duration-motion-fast ease-editorial group-hover:-translate-y-icon-nudge group-hover:translate-x-icon-nudge"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
