import React from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = ({ phoneNumber = '+212663310060' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, sm: 24 },
        right: { xs: 16, sm: 24 },
        zIndex: 1000,
      }}
    >
      <IconButton
        onClick={handleWhatsAppClick}
        sx={{
          backgroundColor: '#25D366',
          width: isMobile ? 50 : 60,
          height: isMobile ? 50 : 60,
          '&:hover': {
            backgroundColor: '#128C7E',
          },
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          animation: 'pulse 2s infinite',
          '@keyframes pulse': {
            '0%': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)',
            },
            '70%': {
              transform: 'scale(1.05)',
              boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)',
            },
            '100%': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)',
            },
          },
        }}
      >
        <WhatsAppIcon
          sx={{
            color: 'white',
            fontSize: isMobile ? 30 : 35,
          }}
        />
      </IconButton>
    </Box>
  );
};

export default WhatsAppButton;