import React from 'react';
import { Box, Link, Typography,useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next'; 

const Footer2 = () => {
  const {t} = useTranslation();
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <Box
      sx={{
        bgcolor: 'white',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 3, sm: 0 },
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src="/assets/logo/EcoPlastique-logo.png"
            alt="EcoPlastique logo"
            sx={{
              width: isMobile ? "60%" :"20%" ,
              marginRight:2,
              height: 'auto',
              objectFit: 'cover',
              
            }}
          />

          {/* Liens de navigation */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 2, sm: 4 },
              fontSize: '16px',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Link 
              href="#" 
              color="black" 
              underline="hover"
              sx={{ 
                fontSize: { xs: '14px', sm: '16px' },
                whiteSpace: 'nowrap'
              }}
            >
              {t('footer1')}
            </Link>
            <Link 
              href="#" 
              color="black" 
              underline="hover"
              sx={{ 
                fontSize: { xs: '14px', sm: '16px' },
                whiteSpace: 'nowrap'
              }}
            >
              {t('footer2')}
            </Link>
            <Link 
              href="#" 
              color="black" 
              underline="hover"
              sx={{ 
                fontSize: { xs: '14px', sm: '16px' },
                whiteSpace: 'nowrap'
              }}
            >
              {t('footer3')}
            </Link>
            <Link 
              href="#" 
              color="black" 
              underline="hover"
              sx={{ 
                fontSize: { xs: '14px', sm: '16px' },
                whiteSpace: 'nowrap'
              }}
            >
              {t('footer4')}
            </Link>
          </Box>

          {/* Copyright */}
          <Typography 
            variant="body2" 
            sx={{
              textAlign: { xs: 'center', sm: 'right' },
              fontSize: { xs: '12px', sm: '14px' },
              whiteSpace: 'nowrap',
              color:"black", 
              marginLeft:3
            }}
          >
            Copyright ©2024 All rights reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer2;