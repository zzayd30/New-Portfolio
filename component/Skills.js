"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: "HTML", src: "/images/html-5.png" },
    { name: "CSS", src: "/images/css-3.png" },
    { name: "JavaScript", src: "/images/js.png" },
    { name: "Tailwind CSS", src: "/images/tailwind.svg" },
    { name: "Next.js", src: "/images/icons8-nextjs-96.png" },
    { name: "MongoDB", src: "/images/icons8-mongo-db-96.png" },
    { name: "Express.js", src: "/images/express.svg" },
    { name: "React.js", src: "/images/icons8-react-480.png" },
    { name: "Node.js", src: "/images/nodejs.svg" },
    { name: "SQL Server", src: "/images/icons8-sql-server-240.png" },
    { name: "My SQL", src: "/images/icons8-my-sql-480.png" },
    { name: "Python", src: "/images/icons8-python-480.png" },
    { name: "C", src: "/images/c.svg" },
    { name: "C++", src: "/images/c-.png" },
    { name: "GitHub", src: "/images/icons8-github-240.png" },
    { name: "Git", src: "/images/icons8-git-480.png" },
];

const Skills = () => {
    useEffect(() => {
        gsap.fromTo(
            "#skills-page",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
            }
        );

        gsap.fromTo(
            ".skill-card",
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: "#skills-page",
                    start: "top 80%",
                    toggleActions: "play none none reset",
                    once: false,
                },
            }
        );

        ScrollTrigger.refresh();
    }, []);

    return (
        <div
            id="skills-page"
            className="min-h-screen flex items-center justify-center flex-col gap-y-8 py-16 text-white"
        >
            <h1 className="text-4xl font-bold text-center text-white">My Skills</h1>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 w-11/12 max-w-6xl">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="skill-card bg-gray-950 border border-gray-400 rounded-lg p-2 flex items-center justify-center flex-col gap-y-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg hover:shadow-white"
                    >
                        <img
                            alt={skill.name}
                            src={skill.src}
                            width={80}
                            height={80}
                            loading="lazy"
                            className="object-contain hover:scale-110 hover:transition delay-75 aspect-square h-10 sm:h-12 md:h-16 lg:h-20"
                        />
                        <span className="text-xs text-gray-300 sm:text-sm md:text-base font-medium">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;