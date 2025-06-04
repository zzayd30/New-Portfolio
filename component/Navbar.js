"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { styles } from "../app/styles";
import menu from "../public/assets/menu.svg";
import close from "../public/assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "Home", title: "Home" },
    { id: "About", title: "About" },
    { id: "skills-page", title: "Skills" },
    { id: "Projects", title: "Projects" },
    { id: "Contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // adjust as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX}
        w-full flex items-center py-5 fixed top-0 z-20
        transition-all duration-300
        ${scrolled ? "bg-transparent bg-opacity-90 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" legacyBehavior>
          <a
            className="flex text-white hover:animate-pulse rounded-md px-2 py-1 items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
              setToggle(false);
            }}
          >
            <p className="text-3xl font-bold cursor-pointer flex">Zaid</p>
            <p className="text-gray-400 text-4xl font-bold cursor-pointer flex">.</p>
          </a>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-6">
          {navLinks.map((nav) => (
            <li key={nav.id} onClick={() => setActive(nav.title)}>
              <a
                href={`#${nav.id}`}
                className="text-secondary text-[18px] font-medium px-2 py-1 rounded-md transition-transform duration-150 ease-in-out hover:scale-110 active:scale-90 hover:bg-white hover:text-black"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close.src : menu.src}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Dropdown */}
          <div
            className={`${toggle ? "flex" : "hidden"
              } p-6 black-gradient absolute top-20 right-4 min-w-[160px] z-10 rounded-xl flex-col gap-4`}
          >
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="text-secondary text-[18px] font-medium px-2 py-1 rounded-md hover:bg-white hover:text-black transition"
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                {nav.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;