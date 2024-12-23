import React from 'react'
import { Box,Button,Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const TextZwintwo = () => {
    const { t } = useTranslation();
  
    return (
        <Box
          sx={{
            textAlign: "center",
            padding: "40px",
            maxWidth: "800px",
            margin: "auto",
            bgcolor: "rgba(203, 211, 212, 0.7)"
            
            
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              color: 'black',
              
            }}
          >
            {t("textZwintwo_title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.8",
              color: 'black',
            }}
          >
            {t("twin_two1")}
          </Typography>

          <Button
        variant="contained"
        sx={{
          backgroundColor: "#9BC953", // Couleur jaune
          color: "#000",
          fontWeight: "bold",
          borderRadius: "20px",
          marginTop:"6%",
          padding: "10px 20px",
          color:'white',
          textTransform: "none", // Désactiver la majuscule automatique
          "&:hover": {
            backgroundColor: "#9BC953", // Couleur au survol
          },
        }}
      >
        {t("twin_two2")}
      </Button>
        </Box>
      );
    };

export default TextZwintwo
