import React from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Type = () => {
  const { t, i18n } = useTranslation(); // Ajoutez i18n ici
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  
  const getTextAlignment = () => {
    return i18n.language === 'ar' ? 'right' : 'left';
  };


  const Blan = ({ image, titre, text, index ,margin}) => {
    const handleClick = () => {
      navigate('/productpage', { state: { selectedIndex: index } });
    };

    return (
      <Box
        sx={{
          height: '100%',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
         boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.2)',
          width: { xs: '150%', sm: '48%', md: '30%' },
          margin: { xs: 2, sm: 2, md: 1 },
          height: { xs: i18n.language === 'ar'?'450px':'510px', sm: '600px',  md: i18n.language === 'ar' ? '690px' : '750px'  },  
          overflow: 'hidden',
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <img
          src={image}
          alt={titre}
          style={{
            width: '100%',
            height: isMobile ? '55%' : '74%',
            objectFit: 'cover',
          }}
        />
        <Box 
          sx={{ 
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <Typography
            sx={{
              color: 'black',
              fontWeight:'bold',
              fontSize: isMobile ? 20 : 20,
              marginBottom: 2,
               textAlign: getTextAlignment(), 
               fontFamily: i18n.language === 'ar' ? 'Arial' : 'revert',
              
            }}
          >
            {titre}
          </Typography>
          <Typography
            sx={{
              fontSize: isMobile ? 14 : 20,
              color: 'black',
              textAlign: getTextAlignment(), 
              marginBottom: 3,
               fontFamily: i18n.language === 'ar' ? 'Arial' : 'revert',
              fontWeight: 'light' // Ajout de fontWeight normal
            }}
          >
            {text}
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            
            paddingBottom: 0
          }}>
            <Button
              onClick={handleClick}
              sx={{
            bgcolor: '#9BC953',
            borderRadius: 6,
            padding: "10px 20px",
            fontSize: isMobile ? 12 : 14,
            marginTop: margin ? 3 : 0,
            color: 'white',
              }}
            >
              {t('product_button')}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <div>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: isMobile ? 25 : 40,
          color: "black",
          marginTop: 3,
           fontFamily:'revert'
        }}
      >
        {t('tablecloths_title')}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: { xs: 'center', sm: 'space-between', md: 'space-around' },
          gap: { xs: 2, sm: 3, md: 4 },
          padding: { md: 4 },
        }}
      >
        <Blan
          image="/assets/Typepic/12.png"
          titre={t('tablecloth_tri_or_title')}
          text={t('tablecloth_tri_or_text')}
          index={2}
          margin 
        />
        <Blan
          image="/assets/Typepic/3.jpg"
          titre={t('tablecloth_transparent_title')}
          text={t('tablecloth_transparent_text')}
          index={0}
          margin 
        />
        <Blan
          image="/assets/Typepic/nappe-mat-1.jpg"
          titre={t('tablecloth_mat_title')}
          text={t('tablecloth_mat_text')}
          index={1}
        />
      </Box>
    </div>
  );
};

export default Type;