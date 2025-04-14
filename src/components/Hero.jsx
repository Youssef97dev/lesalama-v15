"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const images = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/yakitd32v7jwvcvm45s2",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/salama_20-min_m92cvb",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/po692czexw9alolb2qll",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/s9ddjvzdlmsosy5zywop",
];

const mobileImages = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/g6rzpp98zct8gcxlsexv",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/aqahxx69j3zioo0uwvrq",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/olx3popyo3msqjowhbl5",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/usuix6tsgjhreciq8pcf",
];

const Hero = () => {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-screen lg:h-[97vh] w-full bg-color_3 px-0 lg:px-20">
      <div className="w-full h-full relative block lg:hidden">
        {mobileImages.map((src, index) => (
          <div
            key={index}
            className={`absolute rounded-md inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="w-full h-full relative hidden lg:block">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        ))}
        <div className="absolute -bottom-8 right-1/2 left-1/2 flex justify-center items-center z-10">
          <Link
            href="https://www.sevenrooms.com/explore/lesalamamarrakech/reservations/create/search/"
            target="_blank"
            className="text-white bg-color_1 rounded-md py-5 px-10"
          >
            {t("navbar.book")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
