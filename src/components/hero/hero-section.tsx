import { Container } from "@/components/layout/container";
import { heroContent } from "@/data/hero";

import { HeroHeading } from "./hero-heading";
import { HeroIntro } from "./hero-intro";

export function HeroSection() {
  return (
    <section
      id="home"
      data-portfolio-section
      aria-labelledby="hero-heading"
      className="chapter-section flex min-h-hero bg-background pt-navbar"
    >
      <Container size="display" className="flex min-h-hero-content flex-col py-layout">
        <div className="hero-stage grid gap-layout lg:grid-cols-editorial lg:items-center xl:gap-layout">
          <HeroHeading content={heroContent} />
          <HeroIntro content={heroContent} />
        </div>
      </Container>
    </section>
  );
}
