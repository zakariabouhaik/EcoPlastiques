import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#687273',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '0 24px',
        flexDirection: 'column', // Stack content vertically on small screens
        paddingBottom: '16px', // Add some padding at the bottom
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px',
          flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens, row on larger
          textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens
        }}
      >
        <img
          src="/assets/logo/EcoPlastique-logo.png"
          alt="EcoPlastique logo"
          style={{
            width: '30%', // Reduce logo size for smaller screens
            maxWidth: '150px', // Set a maximum size for the logo
            objectFit: 'cover',
            marginBottom: { xs: '16px', sm: '0' }, // Add margin on small screens
          }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            fontSize: '16px',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack links vertically on small screens
            alignItems: { xs: 'center', sm: 'flex-start' }, // Center links on small screens
            marginBottom: { xs: '16px', sm: '0' }, // Add margin on small screens
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
        <Typography variant="body2" color="inherit" sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
          Copyright ©2024 All rights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
