import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const AssistanceComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        maxWidth: '400px',
        margin: 'auto',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
        Besoin d'aide pour passer votre commande ?
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
        Nous sommes là pour vous assister !
      </Typography>
      <Typography variant="body1">
        Appelez-nous au{' '}
        <Link href="tel:+212708051754" color="primary">
          +212 708-051754
        </Link>{' '}
        et nous vous guiderons tout au long du processus de commande.
      </Typography>
    </Box>
  );
};

export default AssistanceComponent;
