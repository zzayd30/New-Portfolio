"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import github from "../public/images/icons8-github-240.png";
import ClothEase from "../public/images/ClothEase.jpg";
import CodeEase from "../public/images/CodeEase.jpg";
import ChatEase from "../public/images/ChatEase.jpg";
import { styles } from "../app/styles";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    const cardRef = useRef(null);
    useEffect(() => {
        if (typeof window === "undefined") return;
        const el = cardRef.current;
        const isMobile = window.innerWidth < 768;

        gsap.fromTo(
            el,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: isMobile ? 0.8 : 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: isMobile ? undefined : "top center",
                    toggleActions: isMobile ? "play none none none" : undefined,
                    scrub: isMobile ? false : 1,
                    markers: false,
                },
            }
        );
    }, []);

    return (
        <div ref={cardRef} className="project-card w-full max-w-sm">
            <div className="bg-tertiary border hover:scale-[1.02] cursor-pointer transition-transform duration-200 border-gray-400 p-5 rounded-2xl w-full">
                <div className="relative w-full aspect-[3/2] md:aspect-[16/9]">
                    <Image
                        src={image}
                        alt="project_image"
                        fill
                        className="object-cover object-left rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <Image src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[20px] sm:text-[22px] md:text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-justify text-[14px] sm:text-[15px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className="text-[13px] sm:text-[14px] font-semibold bg-white px-2 py-1 rounded-xl hover:animate-pulse"
                        >
                            {tag.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const projects = [
    {
        name: "ClothEase",
        description:
            "A full-stack e-commerce platform for clothing shopping built using the MERN stack. Includes features like product browsing, cart management, and secure checkout. Also features an admin panel for inventory and order control.",
        tags: [
            { name: "MongoDb", color: "white" },
            { name: "Express.js", color: "white" },
            { name: "React.js", color: "white" },
            { name: "Node.js", color: "white" },
        ],
        image: ClothEase,
        source_code_link: "https://github.com/zzayd30/ClothEase-Front-End",
    },
    {
        name: "CodeEase",
        description:
            "A MERN stack web app for managing software agency projects and team collaboration. Supports task assignment, progress tracking, and team updates in real time. Features a responsive UI to enhance project visibility and coordination.",
        tags: [
            { name: "MongoDb", color: "white" },
            { name: "Express.js", color: "white" },
            { name: "React.js", color: "white" },
            { name: "Node.js", color: "white" },
        ],
        image: CodeEase,
        source_code_link: "https://github.com/zzayd30/CodeEase-Front-End",
    },
    {
        name: "ChatEase",
        description:
            "A real-time chatting platform built with the MERN stack and WebSocket integration. Enables seamless instant messaging with a clean and responsive user interface. Designed for smooth, engaging conversations in a modern web environment.",
        tags: [
            { name: "MongoDb", color: "white" },
            { name: "Express.js", color: "white" },
            { name: "React.js", color: "white" },
            { name: "Sockets", color: "white" },
        ],
        image: ChatEase,
        source_code_link: "https://github.com/zzayd30/ChatEase-Front-End",
    },
];

const Works = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.fromTo(
            ".works-container p",
            { opacity: 0, y: -20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".works-container",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );

        gsap.fromTo(
            ".works-container h2",
            { opacity: 0, y: -20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".works-container",
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <>
            <div id="Projects" className="works-container">
                <p className={`${styles.sectionSubText}`}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </div>
            <div className="works-container mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");