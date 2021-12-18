import React from "react";
import { useTranslation } from "react-i18next";
import { LocalizedLink } from "gatsby-theme-i18n"
const Header = () => {
  const { t } = useTranslation("globals");
  return(
  <header className="px-2 border-b w-full max-w-7xl mx-auto py-4 flex items-center justify-between">
    <LocalizedLink to="/">
      <div className="flex items-center space-x-2 hover:text-blue-600">
        <p className="font-bold text-2xl">{t("header")}</p>
      </div>
    </LocalizedLink>
  </header>
  )
  };

export default Header;
