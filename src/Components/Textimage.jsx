import React from "react";
import { Typography, Box, Button,useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Textimage = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const isMobile = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate(); // Initialisation correcte de navigate

  return (
    <Box
      sx={{
        backgroundColor: "#f5faff",
        padding: '6%',
        borderRadius: "8px",
        textAlign: isArabic ? 'right' : 'left', // Align text based on language
        flex: 1, // Permet d'occuper toute la hauteur disponible
      }}
    >
      <Typography
        variant={isMobile ? "h6" : "h4"}
        sx={{
          fontWeight: "bold",
          color: "black",
           fontFamily:'revert'
        }}
      >
        {t("text_image1")}
      </Typography>
      <Typography
        variant={isMobile ? "h7" : "h5"}
        sx={{
          color: "#007bff",
          marginTop: "10px",
          fontWeight: "bold",
           fontFamily:'revert'
        }}
      >
        {t("text_image2")}
      </Typography>
      <Typography
        
        sx={{
          fontSize:isMobile ? "h8" : "h6",
          marginTop: "20px",
          lineHeight: "1.6",
          color: "#333",
          fontFamily: i18n.language === 'ar' ? 'Arial' : 'revert',
          fontWeight: 'normal'
        }}
      >
        {t("text_image3")}
      </Typography>
         
      <Button
       
        sx={{
            bgcolor: '#9BC953',
            marginTop:3,
            borderRadius: 6,
            padding: "10px 20px",
            fontSize: isMobile ? 11 : 14,
            color: 'white',
          }}
        onClick={() => {
  console.log('Navigation vers ProductPage');
  navigate("/productpage");
}}
      >
        {t("text_image4")}
      </Button>
        </Box>
      );
    };
    

export default Textimage
