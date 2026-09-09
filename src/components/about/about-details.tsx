import { Download } from "lucide-react";

import type { AboutContent } from "@/types/about";

import { AboutDetail } from "./about-detail";

interface AboutDetailsProps {
  content: AboutContent;
}

export function AboutDetails({ content }: AboutDetailsProps) {
  return (
    <div className="about-context lg:col-span-4 lg:col-start-9">
      <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
        Professional context
      </p>
      <dl className="mt-layout border-t border-border">
        {content.details.map((detail, index) => (
          <AboutDetail key={detail.label} detail={detail} index={index} />
        ))}
      </dl>
      <a
        href={content.resume.href}
        download={content.resume.filename}
        className="group mt-layout inline-flex items-center gap-control-x font-label text-label uppercase tracking-label text-foreground transition-opacity duration-motion-fast ease-editorial hover:opacity-60"
      >
        {content.resume.label}
        <Download
          aria-hidden="true"
          className="size-icon transition-transform duration-motion-fast ease-editorial group-hover:translate-y-icon-nudge"
        />
      </a>
    </div>
  );
}
