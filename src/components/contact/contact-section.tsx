"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import { Container } from "@/components/layout/container";
import { contactContent } from "@/data/contact";
import { motionTokens } from "@/lib/motion";

import { ContactDetails } from "./contact-details";
import { ContactForm } from "./contact-form";
import { ContactGraphic } from "./contact-graphic";

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();
  const contactRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start 65%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, motionTokens.spring.gentle);

  return (
    <section
      id="contact"
      data-portfolio-section
      aria-labelledby="contact-heading"
      className="chapter-section border-t border-border py-section"
    >
      <Container size="display">
        <div className="grid gap-layout lg:grid-cols-editorial lg:items-start xl:gap-section-gap">
          <div className="about-profile contact-profile lg:col-span-4 lg:self-start">
            <ContactGraphic />
            <div className="about-profile-content relative z-10">
              <motion.p
                initial={{ opacity: 0, y: motionTokens.distance.small }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : motionTokens.duration.normal,
                  ease: motionTokens.easing.editorial,
                }}
                className="font-mono text-label uppercase tracking-label text-muted-foreground"
              >
                {contactContent.sectionNumber} / {contactContent.eyebrow}
              </motion.p>
              <div className="mt-layout">
                <p className="font-mono text-label uppercase tracking-label text-muted-foreground">
                  Start a conversation
                </p>
                <h2
                  id="contact-heading"
                  className="mt-layout text-heading font-medium tracking-heading text-balance"
                >
                  {contactContent.heading}
                </h2>
              </div>
            </div>
          </div>
          <div ref={contactRef} className="contact-timeline lg:col-span-8 lg:col-start-5">
            <div aria-hidden="true" className="contact-timeline-track" />
            <motion.div
              aria-hidden="true"
              style={{ scaleY: shouldReduceMotion ? 1 : scaleY }}
              className="contact-timeline-progress"
            />
            <motion.div
              initial={{ opacity: 0, y: motionTokens.distance.normal }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: shouldReduceMotion ? 0 : motionTokens.duration.slow,
                ease: motionTokens.easing.editorial,
              }}
              className="contact-content"
            >
              <ContactDetails content={contactContent} />
              <div className="mt-section-gap border-t border-border pt-section-gap">
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
