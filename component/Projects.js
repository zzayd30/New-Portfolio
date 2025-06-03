"use client"
import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project2 from "../public/images/project2.jpg";
import github from "../public/images/icons8-github-240.png"
import { styles } from "../app/styles";
import Image from "next/image";
import { SectionWrapper } from "../hoc";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;

        // ScrollTrigger for animating project cards with stagger
        gsap.fromTo(
            el,
            {
                opacity: 0,
                y: 100, // Start off-screen
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",  // Trigger when the top of the element hits the bottom of the viewport
                    end: "top center",    // End when the top reaches the center of the viewport
                    scrub: true,          // Smoothly sync scroll and animation
                    markers: false,       // Set to `true` to see debug markers
                },
            }
        );
    }, []);

    return (
        <div ref={cardRef}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary  border border-gray-400 p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
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
                            <Image
                                src={github}
                                alt="source code"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex text-white flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </div>
    );
};

const projects = [
    {
        name: "ClothEase",
        description:
            "A full-stack e-commerce platform for clothing shopping built using the MERN stack. Includes features like product browsing, cart management, and secure checkout. Also features an admin panel for inventory and order control.",
        tags: [
            {
                name: "react",
                color: "white",
            },
            {
                name: "tailwind",
                color: "white",
            },
            {
                name: "node",
                color: "white",
            },
            {
                name: "mongodb",
                color: "white",
            },
        ],
        image: project2,
        source_code_link: "https://github.com/zzayd30/ClothEase-Front-End",
    },
    {
        name: "CodeEase",
        description:
            "A MERN stack web app for managing software agency projects and team collaboration. Supports task assignment, progress tracking, and team updates in real time. Features a responsive UI to enhance project visibility and coordination.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "emailJs",
                color: "green-text-gradient",
            },
            {
                name: "Gsap",
                color: "pink-text-gradient",
            },
        ],
        image: project2,
        source_code_link: "https://github.com/zzayd30/CodeEase-Front-End",
    },
    {
        name: "ChatEase",
        description:
            "A real-time chatting platform built with the MERN stack and WebSocket integration. Enables seamless instant messaging with a clean and responsive user interface. Designed for smooth, engaging conversations in a modern web environment.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "white-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
        ],
        image: project2,
        source_code_link: "https://github.com/zzayd30/ChatEase-Front-End",
    },
];

const Works = () => {
    useEffect(() => {
        // Stagger effect for project cards
        gsap.fromTo(
            ".project-card", // Select all project cards
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.1, // Stagger delay of 0.3 seconds between each card
                scrollTrigger: {
                    trigger: ".works-container",
                    start: "top bottom",  // Trigger when the top of the container reaches the bottom
                    end: "top center",
                    scrub: true,
                    markers: false, // Set to true to see debug markers
                },
            }
        );
    }, []);

    return (
        <>
            <div>
                <p className={`${styles.sectionSubText}`}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </div>

            <div className="w-full flex">
                <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                </p>
            </div>

            <div className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
                {projects.map((project, index) => (
                    <div key={`project-${index}`} className="project-card">
                        <ProjectCard index={index} {...project} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
