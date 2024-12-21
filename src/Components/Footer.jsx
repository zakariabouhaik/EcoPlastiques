import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#687273',
        width: '100%',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '0 24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        <img
          src="/assets/logo/EcoPlastique-logo.png"
          alt="EcoPlastique logo"
          style={{
            width: '80px',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            fontSize: '16px',
          }}
        >
          <Link href="#" color="inherit" underline="hover">
            Politique de Confidentialité
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Politique de Retour et Remboursement
          </Link>
          <Link href="#" color="inherit" underline="hover">
            À Propos de Nous
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Contactez-nous
          </Link>
        </Box>
        <Typography variant="body2" color="inherit">
          Copyright ©2024 All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;