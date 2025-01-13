import React from 'react'
import { Box,Button,Typography,useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const TextZwintwo = () => {
  const navigate = useNavigate(); // Initialisation correcte de navigate

     const { t, i18n } = useTranslation(); // Ajoutez i18n ici
   
    const isMobile = useMediaQuery('(max-width:768px)');
    return (
        <Box
          sx={{
            textAlign: "center",
            padding: "40px",
            maxWidth: "800px",
            margin: -4,
            
          }}
        >
          <Typography
           variant={isMobile ? "h4" : "h4"}
            sx={{
               
              marginBottom: "20px",
              color: 'black',
           fontFamily:'revert'
            }}
          >
            {t("textZwintwo_title")}
          </Typography>
          <Typography
         
           
            sx={{
              lineHeight: "1.8",
              color: 'black',
              fontSize:isMobile?13:18,
               fontFamily: i18n.language === 'ar' ? 'Arial' : 'revert',
               fontWeight: 'light'
            }}
          >
            {t("twin_two1")}
          </Typography>

          <Button
         
        sx={{
            bgcolor: '#9BC953',
            borderRadius: 6,
            padding: "10px 20px",
            marginTop:3,
            fontSize: isMobile ? 11 : 14,
            color: 'white',
          }}
        onClick={() => navigate("/Productpage")} 
      >
        {t("twin_two2")}
      </Button>
        </Box>
      );
    };

export default TextZwintwo
