import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const language =[
    { code: "fr", lang: "French" },
    { code: "ar", lang: "Arabic" }, 
]

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng); // Save language in localStorage
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (i18n.language !== savedLanguage) {
          i18n.changeLanguage(savedLanguage); // Restore saved language
          document.body.dir = i18n.dir(); // Ensure correct directionality
        }
      }, [i18n]);
    
      return null; 
}
export default LanguageSelector;