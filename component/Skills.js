"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { styles } from "@/app/styles";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: "HTML", src: "/images/html-5.png" },
    { name: "CSS", src: "/images/css-3.png" },
    { name: "JavaScript", src: "/images/js.png" },
    { name: "Tailwind CSS", src: "/images/tailwind.svg" },
    { name: "Next.js", src: "/assets/icons8-nextjs-96.png" },
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
        const isMobile = window.innerWidth <= 768; // Tailwind's md breakpoint

        const ctx = gsap.context(() => {
            // Headings
            gsap.fromTo(
                ".skills-headings p",
                { opacity: 0, y: -20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#skills-page",
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                }
            );

            gsap.fromTo(
                ".skills-headings h2",
                { opacity: 0, y: -20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#skills-page",
                        start: "top 85%",
                        toggleActions: isMobile
                            ? "play none none none"
                            : "play reverse play reverse",
                    },
                }
            );

            // Skill cards
            gsap.fromTo(
                ".skill-card",
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#skills-page",
                        start: "top 85%",
                        toggleActions: isMobile
                            ? "play none none none"
                            : "play reverse play reverse",
                    },
                }
            );
        });

        setTimeout(() => {
            ScrollTrigger.refresh(); // Refresh positions after layout settles
        }, 100);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div id="skills-page" className="ml-4 sm:ml-16 mb-12">
                <div className="skills-headings">
                    <p className={`${styles.sectionSubText}`}>My Skills</p>
                    <h2 className={`${styles.sectionHeadText}`}>Languages.</h2>
                </div>
            </div>

            <section>
                <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
                    {skills.map((skill) => (
                        <div className="skill-card w-20 h-20 sm:w-28 sm:h-28" key={skill.name}>
                            <img
                                src={skill.src}
                                alt={skill.name}
                                className="tech-icon hover:scale-110 transition delay-75 w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Skills;