"use client";

import React from "react";
import { motion } from "framer-motion";

const Predesign = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-black text-white relative px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Center Content */}
      <motion.div
        className="text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Muhammad Zaid
        </h1>
        <h2 className="text-xl sm:text-xl md:text-7xl text-gray-400 mt-1">
          © Portfolio 2025
        </h2>
      </motion.div>

      {/* Bottom Left: Version */}
      <motion.div
        className="absolute bottom-10 left-10 text-md sm:text-2xl text-gray-400"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Version 1
      </motion.div>

      {/* Bottom Right: Loading... */}
      <motion.div
        className="absolute bottom-10 right-10 text-md sm:text-2xl text-gray-400 animate-pulse"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Loading...
      </motion.div>
    </motion.div>
  );
};

export default Predesign;