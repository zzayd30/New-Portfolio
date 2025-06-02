"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef } from "react";
import { styles } from "@/app/styles";
import Navbar from "./Navbar";
import Typed from "typed.js";
import { OrbitingCirclesDemo } from "@/components/magicui/orbiting-circle-demo";

export function DotBackgroundDemo() {
  const typedRef = useRef(null);

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
  return (
    <>
      <Navbar />
      <div className="relative flex h-screen w-full items-center justify-center bg-black dark:bg-white">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <section className="relative w-full h-screen flex flex-col md:flex-row px-4 md:px-12">
          {/* Left side content */}
          <div className="flex flex-col justify-center items-start w-full md:w-1/2 pt-24">
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
                <span
                  ref={typedRef}
                  className="text-2xl md:text-3xl text-gray-400"
                ></span>
                <p className={`${styles.heroSubText} mt-4 text-white`}>
                  Transform Your Online Presence
                  <br />
                  with Custom Web Solutions
                </p>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="flex justify-center items-center w-full md:w-1/2 md:pt-24">
            <OrbitingCirclesDemo />
          </div>
        </section>
      </div>
    </>
  );
}
