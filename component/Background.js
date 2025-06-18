"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { styles } from "@/app/styles";
import Navbar from "./Navbar";
import Typed from "typed.js";
import { OrbitingCirclesDemo } from "@/components/magicui/orbiting-circle-demo";
import { motion } from "framer-motion";

export function DotBackgroundDemo() {
  const typedRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["\xa0a Computer Scientist.", "\xa0a MERN Stack Developer."],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current && scrollTop > 100) {
        setShowNavbar(false);
      } else if (scrollTop < lastScrollTop.current) {
        setShowNavbar(true);
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        style={{ position: "fixed", width: "100%", top: 0, zIndex: 20 }}
      >
        <Navbar />
      </motion.div>

      <div id="Home" className="relative overflow-hidden flex h-[130vh] md:h-screen w-full items-center justify-center bg-black dark:bg-white">
        {/* Dotted Background */}
        <motion.div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
        />

        {/* Radial Fade Mask */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <section className="relative w-full min-h-screen flex flex-col md:flex-row px-4 sm:px-6 md:px-12 lg:px-24">
          {/* Left side content */}
          <motion.div
            className="flex flex-col justify-center items-start w-full md:w-1/2 md:pt-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-row items-start gap-5">
              <div className="flex flex-col justify-center items-center">
                <div className="w-4 h-4 rounded-full bg-white" />
                <div className="w-1 sm:h-60 h-40 bg-gradient-to-b from-white to-black" />
              </div>
              <div>
                <h1 className={`${styles.heroHeadText} text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl`}>
                  Hi, I'm <span className="text-gray-400">Zaid</span>
                </h1>
                <div className="flex flex-wrap text-2xl sm:text-2xl md:text-3xl text-white">
                  I am&nbsp;
                  <span ref={typedRef} className="text-gray-400" />
                </div>
                <p className={`${styles.heroSubText} w-[90%] sm:w-4/5 mt-4 text-white text-sm sm:text-base`}>
                  Transform Your Online Presence with Custom Web Solutions and More
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side content */}
          <motion.div
            className="flex justify-center items-center w-full md:w-1/2 md:pt-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <OrbitingCirclesDemo />
          </motion.div>
        </section>

      </div>
    </>
  );
}
