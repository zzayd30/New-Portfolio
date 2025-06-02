"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { styles } from "../app/styles";
import { navLinks } from "../constants";
import menu from "../public/assets/menu.svg";
import close from "../public/assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-transparent`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" legacyBehavior>
          <a
            className="flex text-white transition delay-75 hover:bg-white hover:text-black hover:scale-110 rounded-md px-2 py-1 items-center gap-2"
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
                  setToggle(false); // Close menu after click
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