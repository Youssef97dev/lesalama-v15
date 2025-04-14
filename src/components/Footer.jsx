"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full lg:h-[60vh] w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-8 text-center py-5 lg:py-0 px-10 lg:px-28 text-white">
      <div className="w-full h-full flex flex-col justify-center items-center font-extralight text-[14px] leading-[24px] text-white gap-2 lg:gap-5">
        <h1 className="font-normal">{t("contact.open")}</h1>
        <h1>{t("contact.title")}</h1>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <Link href="/">
          <Image
            src="/logo-salama-humberger-white.png"
            alt="le salama logo"
            width={200}
            height={200}
            className="cursor-pointer lg:block hidden"
          />
          <Image
            src="/logo-salama-humberger-white.png"
            alt="le salama logo"
            width={100}
            height={100}
            className="cursor-pointer lg:hidden block"
          />
        </Link>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center font-extralight text-[14px] leading-[24px] text-white gap-2 lg:gap-5">
        <h1>{`40 Rue des Banques, Marrakech 40000, Maroc`}</h1>
        <h1>{`reservations@lesalamamarrakech.com`}</h1>
        <h1>{`+212 675-480018`}</h1>
      </div>
    </div>
  );
};

export default Footer;
