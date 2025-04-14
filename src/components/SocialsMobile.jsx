"use client";
import { useEffect } from "react";
import Link from "next/link";
import {
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaSquareEnvelope,
} from "react-icons/fa6";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";

const SocialsMobile = () => {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);
  return (
    <div className="w-full flex justify-between items-center bg-color_3 text-color_1 px-10  lg:hidden">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo-salama.png"
          alt="le salama logo"
          width={150}
          height={150}
          className="cursor-pointer mx-2"
        />
      </Link>
      <div className="w-full flex justify-end items-center">
        <Link target="_blank" href="mailto:reservations@lesalamamarrakech.com">
          <FaSquareEnvelope size={25} className="cursor-pointer" />
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/lesalamamarrakech/"
        >
          <FaSquareInstagram size={25} className="cursor-pointer" />
        </Link>
        <Link target="_blank" href="http://wa.me/212675480018">
          <FaSquareWhatsapp size={25} className="cursor-pointer" />
        </Link>
        <div
          className="pl-3"
          onClick={() => changeLanguage(t("navbar.lang_text"))}
        >
          <Image
            src={t("navbar.lang_logo")}
            alt="le salama language"
            width={150}
            height={150}
            className="cursor-pointer w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialsMobile;
