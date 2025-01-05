import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Iconscompenent = () => {
  const { t } = useTranslation();

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
            width: 'auto',
            height: 'auto',
            objectFit: 'cover',
            maxHeight: '250px', // Limite la hauteur pour les petits écrans
          }}
        />
        <Box sx={{ margin: 3 }}>
          <Typography sx={{ margin: 1, fontSize: { xs: '16px', sm: '18px', md: '20px' } }}>
            {titre}
          </Typography>
          <Typography sx={{ textAlign: 'center', fontSize: { xs: '14px', sm: '16px', md: '18px' } }}>
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
          borderRadius: 3,
          color: 'white',
          margin: 1,
          justifySelf: 'center',
          display: 'flex',
          marginTop: '2%',
          marginBottom: '2%',
        }}
      >
        {t('product_button')}
      </Button>
    </div>
  );
};

export default Iconscompenent;
