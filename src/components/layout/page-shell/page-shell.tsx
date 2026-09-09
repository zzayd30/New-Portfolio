"use client";

import type { ReactNode } from "react";

import { Navbar } from "@/components/layout/navbar/navbar";
import { SectionProgress } from "@/components/layout/section-progress/section-progress";
import { portfolioSections } from "@/data/navigation";
import { useActiveSection } from "@/hooks/use-active-section";

interface PageShellProps {
  children?: ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  const activeId = useActiveSection(portfolioSections);
  const activeIndex = Math.max(
    portfolioSections.findIndex((section) => section.id === activeId),
    0,
  );
  const activeSection = portfolioSections[activeIndex];

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <SectionProgress
        activeSection={activeSection}
        activeIndex={activeIndex}
        totalSections={portfolioSections.length}
        isHome={activeId === "home"}
      /> */}
    </>
  );
}
