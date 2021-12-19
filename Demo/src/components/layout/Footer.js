import { LocalizedLink } from "gatsby-theme-i18n";
import { useTranslation } from "react-i18next";
import React from "react";

const Footer = () => {
  const { t } = useTranslation("globals");
  return (
    <footer className="px-2 border-t w-full max-w-5xl mx-auto py-4">
      <div className="flex justify-between w-full">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p>{t("location")}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>

        <div className="flex flex-col justify-center items-end space-y-1">
          <p>Your name here.</p>

          <LocalizedLink to="/" language="en" className="text-blue-400 text-xs">
            English
          </LocalizedLink>
          <LocalizedLink to="/" language="fr" className="text-blue-400 text-xs">
            Français
          </LocalizedLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
