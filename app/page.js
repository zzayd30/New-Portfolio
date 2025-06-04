"use client";

import React, { useEffect, useState } from 'react';
import { DotBackgroundDemo } from '@/component/Background';
import About from '@/component/About';
import Skills from '@/component/Skills';
import Projects from '@/component/Projects';
import Contact from '@/component/Contact';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from '@/component/footer';
import Predesign from '@/component/Predesign';

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Predesign />;
  }

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