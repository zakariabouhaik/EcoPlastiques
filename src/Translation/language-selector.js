import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const language =[
    { code: "fr", lang: "French" },
    { code: "ar", lang: "Arabic" }, 
]

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && i18n.language !== savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      document.body.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
    }
  }, []); // Dépendance vide pour ne s'exécuter qu'au montage

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    document.body.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return null;
};
export default LanguageSelector;