"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isClient ? (
        <div className="relative flex flex-col justify-center items-center">
          test
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          {/* Initial white background animation */}
          <div className="absolute inset-0 flex z-50">
            <div className="bg-color_1  flex-1 animate-slide-left"></div>
            <div className="bg-color_1  flex-1 animate-slide-right"></div>
          </div>

          {/* Beige background with logo animation */}
          <div className="absolute inset-0 bg-color_2 flex items-center justify-center">
            <Image
              src="/logo-salama-humberger-white.png" // Replace with your logo path
              alt="Logo"
              width={1000}
              height={1000}
              className="w-32 h-32 animate-scale-3d"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
