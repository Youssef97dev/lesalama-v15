"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";

const Navbar = () => {
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
    <nav
      className={`fixed hidden lg:block top-0 left-0 w-full z-20 px-7 bg-color_1`}
    >
      <div className="w-full flex justify-between items-center bg-color_3 px-20 mt-5 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-salama-humberger.png"
            alt="le salama logo"
            width={76}
            height={76}
            className="cursor-pointer"
          />
        </Link>

        {/* Menu */}
        <div className="flex justify-center items-center gap-6 text-[#000000] text-[15.2px] font-extralight">
          <Link
            href="#event"
            className="cursor-pointer p-2 hover:border-b border-black"
          >
            {t("navbar.events")}
          </Link>
          <Link
            href="https://www.lesalamamarrakech.com/menu/"
            target="_blank"
            className="cursor-pointer p-2 hover:border-b border-black"
          >
            {t("navbar.menu")}
          </Link>
          <Link
            href="#gallery"
            className="cursor-pointer p-2 hover:border-b border-black"
          >
            {t("navbar.gallery")}
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
    </nav>
  );
};

export default Navbar;
