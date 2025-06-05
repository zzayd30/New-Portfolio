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

      <div id="Home" className="relative overflow-hidden flex h-screen w-full items-center justify-center bg-black dark:bg-white">
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

        <section className="relative w-full h-screen flex flex-col md:flex-row px-4 md:px-24">
          {/* Left side content */}
          <motion.div
            className="flex flex-col justify-center items-start w-full md:w-1/2 pt-24"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-row items-start gap-5">
              <div className="flex flex-col justify-center items-center">
                <div className="w-5 h-5 rounded-full bg-white" />
                <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-white to-black" />
              </div>
              <div>
                <h1 className={`${styles.heroHeadText} text-white`}>
                  Hi, I'm <span className="text-gray-400">Zaid</span>
                </h1>
                <span className="text-2xl md:text-3xl text-white">I am&nbsp;</span>
                <span ref={typedRef} className="text-2xl md:text-3xl text-gray-400"></span>
                <p className={`${styles.heroSubText} w-3/4 mt-4 text-white`}>
                  Transform Your Online Presence with Custom Web Solutions and More
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side content */}
          <motion.div
            className="flex justify-center items-center w-full md:w-1/2 md:pt-24"
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
