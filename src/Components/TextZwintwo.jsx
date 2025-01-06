import React from 'react'
import { Box,Button,Typography,useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const TextZwintwo = () => {
  const navigate = useNavigate(); // Initialisation correcte de navigate

    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width:768px)');
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
           variant={isMobile ? "h4" : "h2"}
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              color: 'black',
              
            }}
          >
            {t("textZwintwo_title")}
          </Typography>
          <Typography
           variant= {isMobile ? "body1" : "h6"}
           
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
          fontSize:isMobile?16:28,
          borderRadius: "20px",
          marginTop:"6%",
          padding: "10px 20px",
          color:'white',
          textTransform: "none", // Désactiver la majuscule automatique
          "&:hover": {
            backgroundColor: "#9BC953", // Couleur au survol
          },
        }}
        onClick={() => navigate("/Productpage")} 
      >
        {t("twin_two2")}
      </Button>
        </Box>
      );
    };

export default TextZwintwo
