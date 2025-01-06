import React from 'react';
import { Box, Typography, Button,useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Iconscompenent = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate(); // Initialisation correcte de navigate

  const Chaque = ({ image, titre, text }) => {
    return (
      <Box
        sx={{
          textAlign: 'center',
          marginBottom: { xs: 3, sm: 2, md: 2 },
          width: { xs: '100%', sm: '48%', md: '30%' }, // Responsive width
        }}
      >
        <img
          src={image}
          style={{
            width: 100,
            height: 'auto',
            objectFit: 'cover',
            
          }}
        />
        <Box sx={{ margin: 3 }}>
          <Typography sx={{ margin: 1, fontSize:isMobile?20:28 ,fontWeight: "bold", color: "black"}}>
            {titre}
          </Typography>
          <Typography sx={{ textAlign: 'center',fontSize:isMobile?16:28 }}>
            {text}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <div>
      <Typography sx={{ textAlign: 'center', marginBottom: '5%', fontSize: { xs: 24, sm: 30, md: 30 } }}>
        {t('icons_title')}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Permet l'empilement des éléments sur petits écrans
          justifyContent: 'space-between',
          gap: 2, // Espacement entre les éléments
          padding: { xs: 2, sm: 4, md: 4 }, // Padding responsive
        }}
      >
        <Chaque
          image="/assets/icons/icons8-protect-64.png"
          titre={t('icons_protection_title')}
          text={t('icons_protection_text')}
        />
        <Chaque
          image="/assets/icons/icons8-ruler-64.png"
          titre={t('icons_custom_cut_title')}
          text={t('icons_custom_cut_text')}
        />
        <Chaque
          image="/assets/icons/icons8-transparent-64.png"
          titre={t('icons_transparent_title')}
          text={t('icons_transparent_text')}
        />
      </Box>

      <Button
        sx={{
          bgcolor: '#9BC953',
          borderRadius: 6,
          padding:"10px 20px",
          fontSize:isMobile?16:28,
          color: 'white',
          margin: 1,
          justifySelf: 'center',
          display: 'flex',
          marginTop: '2%',
          marginBottom: '2%',
        }}
        onClick={() => {
  console.log('Navigation vers ProductPage');
  navigate("/productpage");
}}
      >
        {t('product_button')}
      </Button>
    </div>
  );
};

export default Iconscompenent;
