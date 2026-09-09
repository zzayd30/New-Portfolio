"use client";

import { useEffect, useState } from "react";

import type { PortfolioSection } from "@/types/navigation";

export function useActiveSection(sections: PortfolioSection[]) {
  const [activeId, setActiveId] = useState<PortfolioSection["id"]>(sections[0].id);

  useEffect(() => {
    const visibility = new Map<PortfolioSection["id"], number>();
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id as PortfolioSection["id"], entry.intersectionRatio);
        });

        const visibleSection = [...visibility.entries()].reduce<
          [PortfolioSection["id"], number] | undefined
        >((current, candidate) => (!current || candidate[1] > current[1] ? candidate : current), undefined);

        if (visibleSection && visibleSection[1] > 0) {
          setActiveId(visibleSection[0]);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75] },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections]);

  return activeId;
}
