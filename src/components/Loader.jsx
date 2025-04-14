"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SocialsMobile from "./SocialsMobile";
import NavbarMobile from "./NavbarMobile";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Show from "./Show";
import Culinary from "./Culinary";
import Footer from "./Footer";
import Mapbox from "./Mapbox";
import MobileAccordion from "./MobileAccordion";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isClient && (
        <div className="relative p-0 lg:p-7 w-full h-full flex flex-col justify-start items-center">
          <SocialsMobile />
          <NavbarMobile />
          <Navbar />
          <Hero />
          <About />
          <MobileAccordion />
          <Show />
          <Culinary />
          <Footer />
          <Mapbox />
        </div>
      )}
    </>
  );
};

export default Loader;
