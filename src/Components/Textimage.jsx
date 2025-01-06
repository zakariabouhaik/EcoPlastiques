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
        variant={isMobile ? "h4" : "h2"}
        sx={{
          fontWeight: "bold",
          color: "black",
        }}
      >
        {t("text_image1")}
      </Typography>
      <Typography
        variant={isMobile ? "h5" : "h4"}
        sx={{
          color: "#007bff",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        {t("text_image2")}
      </Typography>
      <Typography
        variant= {isMobile ? "h6" : "h5"}
        sx={{
          marginTop: "20px",
          lineHeight: "1.6",
          color: "#333",
        }}
      >
        {t("text_image3")}
      </Typography>
         
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#9BC953", // Couleur jaune
          color: "#000",
          fontWeight: "bold",
         borderRadius: 6,
         fontSize:isMobile?16:28,
          marginTop:'5%',
          color:'white',
          padding: "10px 20px",
          textTransform: "none", // Désactiver la majuscule automatique
          "&:hover": {
            backgroundColor: "#9BC953", // Couleur au survol
          },
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
