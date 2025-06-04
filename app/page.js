"use client";

import { DotBackgroundDemo } from '@/component/Background';
import About from '@/component/About';
import Skills from '@/component/Skills';
import Projects from '@/component/Projects';
import Contact from '@/component/Contact';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from '@/component/footer';

export default function Page() {

  return (
    <>
      <DotBackgroundDemo />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}