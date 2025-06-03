"use client";
import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import gsap from "gsap";
const ScrollTrigger = typeof window !== "undefined" ? require("gsap/ScrollTrigger").ScrollTrigger : null;
import { SectionWrapper } from "../hoc";
const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });
if (typeof window !== "undefined" && gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
}
const useGsap = (elementRef, animation, delay = 0) => {
    useEffect(() => {
        if (elementRef.current && typeof window !== "undefined") {
            gsap.fromTo(
                elementRef.current,
                animation.from,
                {
                    ...animation.to,
                    delay,
                    scrollTrigger: {
                        trigger: elementRef.current,
                        start: "top bottom",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, [elementRef, animation, delay]);
};

const About = () => {
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const profilePicRef = useRef(null);
    const resumeBtnRef = useRef(null);

    useGsap(headingRef, { from: { opacity: 0, x: -50 }, to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" } });
    useGsap(paragraphRef, { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" } }, 0.3);
    useGsap(profilePicRef, { from: { opacity: 0, x: 50, scale: 0.9 }, to: { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" } });
    useGsap(resumeBtnRef, { from: { opacity: 0, y: 30, scale: 0.9 }, to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" } }, 0.5);

    return (
        <div id="About" className="w-full overflow-x-hidden">
            <div className="bg-gray-400 rounded-lg flex flex-col lg:flex-row items-start gap-10 lg:gap-20 p-6 md:p-10">
                {/* Left Column */}
                <div className="flex-1">
                    <div ref={headingRef}>
                        <p className="sm:text-[18px] text-[14px] text-black uppercase tracking-wider">Introduction</p>
                        <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
                    </div>
                    <p ref={paragraphRef} className="mt-4 text-black text-[17px] max-w-2xl leading-[30px]">
                        I'm a passionate software developer with hands-on experience in JavaScript and a strong command of modern frameworks like React, Node.js, and Firebase. I’ve built real-world projects ranging from video calling apps to e-commerce platforms and chat systems. I'm a fast learner who loves solving problems and building intuitive, scalable solutions. Whether it's a web app, a smart system, or a creative idea—let's bring it to life together!
                    </p>
                    <div ref={resumeBtnRef} className="mt-4">
                        <a href="/Muhammad-Zaid-CV.pdf" download>
                            <InteractiveHoverButton>Download Resume</InteractiveHoverButton>
                        </a>
                    </div>
                </div>

                {/* Right Column - Profile Image */}
                <div ref={profilePicRef} className="w-full max-w-md h-[400px] md:h-[500px] mx-auto lg:mx-0">
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg group transition-all duration-500">
                        <div className="absolute inset-0 border-4 border-gray-400 rounded-xl group-hover:border-gray-200 transition-all duration-500 z-10" />
                        <div className="absolute inset-1 rounded-xl ring-4 ring-black z-0" />
                        <img
                            src="/assets/Profile-Pic.jpg"
                            alt="Profile Picture"
                            className="w-full h-full object-cover border-4 border-black rounded-xl relative z-20 group-hover:scale-[1.05] transition-transform duration-500 ease-in-out"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(About, "about");