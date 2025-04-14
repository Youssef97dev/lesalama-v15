"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Gallery from "./Gallery";
import Footer from "@/components/Footer";
import Mapbox from "@/components/Mapbox";
import SocialsMobile from "@/components/SocialsMobile";
import NavbarMobile from "@/components/NavbarMobile";

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
        <div className="relative flex flex-col justify-center items-center">
          <SocialsMobile />
          <NavbarMobile />
          <Gallery />
          <Footer />
          <Mapbox />
        </div>
      )}
    </>
  );
};

export default Loader;
