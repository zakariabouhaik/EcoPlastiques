import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages =[
    { code: "fr", lang: "French" },
    { code: "ar", lang: "Arabic" }, 
]

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng); // Save language in localStorage
    };

    useEffect(() => {
      const savedLanguage = localStorage.getItem("language") || "fr";
      if (i18n.language !== savedLanguage) {
        i18n.changeLanguage(savedLanguage); // Avoid redundant calls
        document.body.dir = i18n.dir(savedLanguage);
      }
    }, [i18n]);
  
    return null; // No UI
}
export default LanguageSelector;