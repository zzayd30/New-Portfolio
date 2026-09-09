"use client";

import { Download, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { primaryNavigation } from "@/data/navigation";
import { motionTokens } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const shouldReduceMotion = useReducedMotion();
  const [isFloating, setIsFloating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function updateNavbarState() {
      setIsFloating(window.scrollY > motionTokens.scroll.navbarTrigger);
    }

    updateNavbarState();
    window.addEventListener("scroll", updateNavbarState, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbarState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <motion.header
      layout
      transition={{
        duration: shouldReduceMotion ? 0 : motionTokens.duration.slow,
        ease: motionTokens.easing.editorial,
      }}
      style={{
        backgroundColor: isFloating ? "var(--primary)" : "transparent",
      }}
      className={cn(
        "navbar-shell fixed z-navbar border transition-[background-color,border-color,border-radius,box-shadow,left,right,top] duration-motion-slow ease-editorial",
        isFloating
          ? "left-mobile right-mobile top-mobile rounded-theme-pill border-primary bg-primary px-layout py-component-gap text-primary-foreground shadow-floating"
          : "inset-x-0 top-0 w-full rounded-none border-transparent bg-transparent shadow-none",
      )}
    >
      <div
        className={cn(
          "items-center",
          isFloating
            ? "grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-layout"
            : "mx-auto flex max-w-display justify-between gap-layout px-page-gutter py-component-gap",
        )}
      >
        <a
          href="#home"
          aria-label="Back to the top"
          className="font-heading text-heading font-medium tracking-heading transition-opacity duration-motion-fast ease-editorial hover:opacity-60"
        >
          Zaid.
        </a>
        <nav
          aria-label="Primary navigation"
          className={cn("hidden md:block", isFloating && "justify-self-center")}
        >
          <ul className="flex items-center gap-control-x">
            {primaryNavigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={cn(
                    "whitespace-nowrap font-body text-small font-medium tracking-body transition-colors duration-motion-fast ease-editorial",
                    isFloating
                      ? "text-primary-foreground/75 hover:text-primary-foreground focus-visible:text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground focus-visible:text-foreground",
                  )}
                >
                  {item.navigationLabel}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {isFloating ? (
          <a
            href="/resume/Muhammad-Zaid-CV-2026.pdf"
            download
            className="group hidden justify-self-end items-center gap-control-x rounded-theme-pill border border-primary-foreground/70 px-control-x py-control-y font-label text-label uppercase tracking-label text-primary-foreground transition-colors duration-motion-fast ease-editorial hover:bg-primary-foreground hover:text-foreground md:inline-flex"
          >
            <span>Download resume</span>
            <Download
              aria-hidden="true"
              className="size-icon transition-transform duration-motion-fast ease-editorial group-hover:translate-y-icon-nudge"
            />
          </a>
        ) : null}
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
          className={cn(
            "col-start-3 justify-self-end rounded-theme-sm p-control-y transition-colors duration-motion-fast ease-editorial md:hidden",
            isFloating
              ? "text-primary-foreground hover:bg-primary-foreground/15"
              : "text-foreground hover:bg-muted",
          )}
        >
          {isMenuOpen ? <X aria-hidden="true" className="size-icon" /> : <Menu aria-hidden="true" className="size-icon" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : motionTokens.duration.normal }}
              onClick={closeMenu}
              className="fixed inset-0 z-navbar-overlay bg-foreground/20 md:hidden"
            />
            <motion.aside
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: shouldReduceMotion ? 0 : motionTokens.duration.slow,
                ease: motionTokens.easing.editorial,
              }}
              className={cn(
                "fixed inset-y-0 right-0 z-navbar-drawer flex w-navbar-menu flex-col border-l px-layout py-layout md:hidden",
                isFloating
                  ? "border-primary-foreground/20 bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-between border-b pb-component-gap",
                  isFloating ? "border-primary-foreground/20" : "border-border",
                )}
              >
                <a
                  href="#home"
                  aria-label="Back to the top"
                  onClick={closeMenu}
                  className={cn(
                    "font-heading text-heading font-medium tracking-heading transition-opacity duration-motion-fast ease-editorial hover:opacity-60",
                    isFloating ? "text-primary-foreground" : "text-foreground",
                  )}
                >
                  Zaid.
                </a>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={closeMenu}
                  className={cn(
                    "flex size-control-height items-center justify-center rounded-theme-sm transition-colors duration-motion-fast ease-editorial",
                    isFloating
                      ? "text-primary-foreground hover:bg-primary-foreground/15"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  <X aria-hidden="true" className="size-icon" />
                </button>
              </div>
              <nav aria-label="Mobile primary navigation" className="mt-layout">
                <ul className="flex flex-col gap-layout">
                  {primaryNavigation.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={closeMenu}
                        className={cn(
                          "font-heading text-heading transition-opacity duration-motion-fast ease-editorial hover:opacity-60",
                          isFloating ? "text-primary-foreground" : "text-foreground",
                        )}
                      >
                        {item.navigationLabel}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <a
                href="/resume/Muhammad-Zaid-CV-2026.pdf"
                download
                onClick={closeMenu}
                className={cn(
                  "mt-auto inline-flex items-center justify-center gap-control-x rounded-theme-pill border px-component-gap py-control-y font-label text-label uppercase transition-colors duration-motion-fast ease-editorial",
                  isFloating
                    ? "border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
                    : "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground",
                )}
              >
                Download resume
                <Download aria-hidden="true" className="size-icon" />
              </a>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
