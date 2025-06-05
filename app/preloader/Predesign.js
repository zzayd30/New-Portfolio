"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <motion.div
            key="splash"
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center text-black"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {/* Content fade in */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                Muhammad Zaid
              </h1>
              <h2 className="text-4xl md:text-7xl text-gray-400 mt-1">
                © Portfolio 2025
              </h2>
            </motion.div>

            {/* Bottom Left */}
            <motion.div
              className="absolute bottom-20 md:bottom-10 left-10 text-md sm:text-2xl text-gray-400"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Version 1
            </motion.div>

            {/* Bottom Right */}
            <motion.div
              className="absolute bottom-20 md:bottom-10 right-10 text-md sm:text-2xl text-gray-400 animate-pulse"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Loading...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && children}
    </>
  );
}
