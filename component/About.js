"use client";

import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import gsap from "gsap";
// Dynamically import ScrollTrigger to avoid SSR issues
const ScrollTrigger =
    typeof window !== "undefined"
        ? require("gsap/ScrollTrigger").ScrollTrigger
        : null;

import { styles } from "../app/styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const Tilt = dynamic(() => import("react-parallax-tilt"), { ssr: false });

if (typeof window !== "undefined" && gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        title: "Full-Stack Developer",
        img: "/assets/web.jpg",
    },
    {
        title: "Frontend Developer",
        img: "/assets/frontendpic.jpg",
    },
    {
        title: "Backend Developer",
        img: "/assets/backendpic.jpg",
    },
];


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

const ServiceCard = ({ index, title, img }) => {
    const cardRef = useRef(null);

    // Define animation inline so the dependency object is stable
    useGsap(
        cardRef,
        {
            from: { opacity: 0, y: 100, scale: 0.8 },
            to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
        },
        index * 0.2
    );

    return (
        <Tilt className="w-full max-w-[250px]">
            <div
                ref={cardRef}
                className="bg-black p-[2px] rounded-[20px] shadow-md hover:shadow-xl transition duration-300"
            >
                <div className="bg-black border border-gray-400 backdrop-blur-md rounded-[20px] py-6 px-6 min-h-[280px] flex flex-col justify-evenly items-center hover:scale-[1.03] transition-transform duration-300">
                    <img
                        src={img}
                        alt={title}
                        className="w-24 h-24 object-contain mb-4 hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="text-white text-[20px] font-semibold text-center tracking-wide">
                        {title}
                    </h3>
                </div>
            </div>
        </Tilt>
    );
};

const About = () => {
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const profilePicRef = useRef(null);
    const resumeBtnRef = useRef(null);

    // Heading Animation
    useGsap(headingRef, {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
    });

    // Paragraph Animation
    useGsap(
        paragraphRef,
        {
            from: { opacity: 0, y: 50 },
            to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        },
        0.3
    );

    // Profile Picture Animation
    useGsap(profilePicRef, {
        from: { opacity: 0, x: 50, scale: 0.9 },
        to: { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" },
    });

    useGsap(resumeBtnRef, {
        from: { opacity: 0, y: 30, scale: 0.9 },
        to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
    }, 0.5);


    return (
        <>
            <div className="flex flex-col bg-gray-950 rounded-lg p-16 lg:flex-row items-start gap-10">
                {/* Left Content: Heading + Paragraph */}
                <div className="flex-1">
                    <div ref={headingRef}>
                        <p className={styles.sectionSubText}>Introduction</p>
                        <h2 className={styles.sectionHeadText}>Overview.</h2>
                    </div>

                    <p
                        ref={paragraphRef}
                        className="mt-4 text-secondary text-[17px] max-w-xl leading-[30px]"
                    >
                        I'm a passionate software developer with hands-on experience in JavaScript and a strong command of modern frameworks like React, Node.js, and Firebase. I’ve built real-world projects ranging from video calling apps to e-commerce platforms and chat systems. I'm a fast learner who loves solving problems and building intuitive, scalable solutions. Whether it's a web app, a smart system, or a creative idea—let's bring it to life together!
                    </p>
                    <div ref={resumeBtnRef} className="mt-4">
                        <a href="/Muhammad-Zaid-CV.pdf" download>
                            <InteractiveHoverButton>Download Resume</InteractiveHoverButton>
                        </a>
                    </div>

                </div>

                {/* Right Content: Image Container */}
                <div
                    ref={profilePicRef}
                    className="flex justify-center items-center lg:w-[40%] h-[400px] lg:h-[70vh]"
                >
                    <img
                        src="/assets/Profile-Pic.jpg"
                        alt="Profile Picture"
                        className="w-full h-full object-cover border-4 border-[#182032] ring-4 ring-gray-400 cursor-pointer transition ease-in-out duration-300 hover:scale-[1.12] rounded-lg"
                    />
                </div>
            </div>

            {/* Service Cards */}
            {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div> */}
        </>
    );
};

export default SectionWrapper(About, "about");
