import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Textimage = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

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
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "black",
        }}
      >
        {t("text_image1")}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "#007bff",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        {t("text_image2")}
      </Typography>
      <Typography
        variant="body1"
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
          borderRadius: "20px",
          marginTop:'5%',
          color:'white',
          padding: "10px 20px",
          textTransform: "none", // Désactiver la majuscule automatique
          "&:hover": {
            backgroundColor: "#9BC953", // Couleur au survol
          },
        }}
      >
        {t("text_image4")}
      </Button>
        </Box>
      );
    };
    

export default Textimage
