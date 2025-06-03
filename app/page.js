import React from 'react';
import { DotBackgroundDemo } from '@/component/Background';
import About from '@/component/About';
import { BackgroundBeams } from '@/component/Background-Beam';
import Skills from '@/component/Skills';
import Projects from '@/component/Projects';
import Contact from '@/component/Contact';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  return (
    <>
      {/* <BackgroundBeams /> */}
      <DotBackgroundDemo />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ToastContainer />
    </>
  )
}
