import React from 'react';
import { Typography, Box, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';

const Theendofthepage = ({
  text,
  titre1,
  titre2,
  pictureso1,
  pictureso2,
  titre3,
  text2,
  titre4,
  text3
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const { t, i18n } = useTranslation();
    const isArabic = i18n.language === 'ar';
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: isMobile ? "100%" : "130%",
        minHeight: "100vh",
        padding: isMobile ? "10px" : "20px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: {
            xs: '90%', // Mobile
            sm: '70%', // Tablet
            md: '40%'  // Desktop
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography 
          variant={isMobile ? "h6" : "h5"}
          sx={{
            textAlign:  "center" ,
            fontSize: {
              xs: '1.1rem',
              sm: '1.3rem',
              md: '1.5rem'
            }
          }}
        >
          {text}
        </Typography>

        <Typography 
          sx={{
            marginTop: 3,
            fontSize: {
              xs: '1rem',
              sm: '1.1rem',
              md: '1.2rem'
            }
          }}
        >
          {titre1}
        </Typography>

        <Typography 
          sx={{
            margin: isMobile ? 2 : 3,
            fontSize: {
              xs: '1rem',
              sm: '1.1rem',
              md: '1.2rem'
            }
          }}
        >
          {titre2}
        </Typography>

        {/* Image principale */}
        <Box
          component="img"
          src={pictureso1}
          sx={{
            width: '100%',
           maxHeight:500,
            borderRadius: 6,
            marginBottom: 1,
          }}
        />

        {/* Images secondaires */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column', // Mobile : en colonne
              sm: 'row'     // Tablet et Desktop : en ligne
            },
            justifyContent: 'space-between',
            gap: 2,
            width: '100%',
          }}
        >
          {pictureso2.map((image, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: '100%', // Mobile : pleine largeur
                  sm: '48%'   // Tablet et Desktop : 48%
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={image}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 6,
                  marginBottom: 1,
                }}
              />
              {/* Affichage conditionnel des textes */}
              {index === 0 ? (
                <>
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"}
                    sx={{
                      marginBottom: "3px",
                      marginTop: "10%",
                      textAlign: isMobile ? "center" : "left",
                    }}
                  >
                    {titre3}
                  </Typography>
                  <Typography sx={{ 
                    textAlign: isMobile ? "center" : "left",
                    textAlign: isArabic ? 'right' : 'left' }}
                    >
                    {text2}
                  </Typography>
                </>
              ) : index === 1 ? (
                <>
                  <Typography 
                    variant={isMobile ? "subtitle1" : "h6"}
                    sx={{
                      marginBottom: "3px",
                      marginTop: "10%",
                      textAlign: isMobile ? "center" : "left"
                    }}
                  >
                    {titre4}
                  </Typography>
                  <Typography sx={{ textAlign: isMobile ? "center" : "left", textAlign: isArabic ? 'right' : 'left' }}>
                    {text3}
                  </Typography>
                </>
              ) : null}
            </Box>
          ))}
        </Box>

        <Box sx={{ marginTop: "3%" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#9BC953",
              color: "white",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: isMobile ? "8px 20px" : "12px 30px",
              fontSize: isMobile ? "0.9rem" : "1rem",
              textTransform: "none",
              margin: '1%',
              "&:hover": {
                backgroundColor: "#7CA43B",
              },
            }}
          >
            {t("product_info_dimension")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Theendofthepage;