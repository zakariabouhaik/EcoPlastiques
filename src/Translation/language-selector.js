import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages =[
    { code: "fr", lang: "French" },
    { code: "ar", lang: "Arabic" }, 
]


const LanguageSelector = () => {
    const {i18n} = useTranslation();
    const changeLanguage =(lng) => {
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n,i18n.language]);

    return (
        null
    )
}
export default LanguageSelector;