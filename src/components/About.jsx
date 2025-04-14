"use client";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-1 py-10 lg:py-32 px-5 lg:px-[24rem]  text-color_1 bg-color_3 text-center">
      <h1 className="text-[20px] leading-[36px]  font-azahra text-primary mb-5">
        <TypeAnimation
          sequence={[t("about.title"), 2000]}
          wrapper="b"
          speed={10}
          repeat={Infinity}
        />
      </h1>
      <p className="text-[16px] leading-[34px] font-extralight px-0 2xl:px-12 ">
        {t("about.content_1")}
      </p>
      <p className="text-[16px] leading-[34px] font-extralight px-0 2xl:px-12 ">
        {t("about.content_2")}
      </p>
      <p className="text-[16px] leading-[34px] font-extralight px-0 2xl:px-12 ">
        {t("about.content_3")}
      </p>
      <Link
        href="https://www.sevenrooms.com/explore/lesalamamarrakech/reservations/create/search/"
        className="mt-4 py-2 px-8 uppercase tracking-widest border border-primary text-primary rounded-lg text-[12px] leading-[34px] hover:bg-primary hover:text-white duration-200 transition-all ease-out font-azahra lg:hidden block"
      >
        {t("about.button_book")}
      </Link>
    </div>
  );
};

export default About;
