"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const Show = () => {
  const { t } = useTranslation();
  return (
    <div
      id="events"
      className="h-full lg:h-screen w-full flex flex-col lg:flex-row justify-center items-center px-8 lg:px-28 gap-5 lg:gap-10 py-8 lg:py-0"
    >
      <div className="w-full h-full py-0 lg:py-24 ">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/salama-vnor/ge6qqi3nvcd5ndj2klmn"
          alt="le palace architecture"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-[20px] leading-[36px]  font-azahra mb-5">
          <TypeAnimation
            sequence={[t("events.title"), 2000]}
            wrapper="b"
            speed={10}
            repeat={Infinity}
          />
        </h1>

        <p className="text-[16px] leading-[30px] font-extralight px-1">
          {t("events.content_1")}
        </p>
        <br />
        <p className="text-[16px] leading-[30px] font-extralight px-1">
          {t("events.content_2")}
        </p>
      </div>
    </div>
  );
};

export default Show;
