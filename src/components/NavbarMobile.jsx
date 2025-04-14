import Link from "next/link";
import { useTranslation } from "react-i18next";

const NavbarMobile = () => {
  const { t } = useTranslation();
  return (
    <div className="flex w-full lg:hidden justify-center items-center gap-3 text-[#fff] text-[17.2px] font-extralight bg-primary">
      <Link
        href="#events"
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
        href="/gallery"
        className="cursor-pointer p-2 hover:border-b border-black"
      >
        {t("navbar.gallery")}
      </Link>
    </div>
  );
};

export default NavbarMobile;
