import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/assets/Heropic/XX.jpg',
    '/assets/Heropic/bg-img-2.png',
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '600px',
        overflow: 'hidden',
      }}
    >
      {/* Afficher l'image courante */}
      <img
        src={images[currentImageIndex]}
        alt={`Hero background ${currentImageIndex + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Boutons de navigation */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          transform: 'translateY(-50%)',
          px: 2,
        }}
      >
        <Button
          onClick={handlePrevImage}
          sx={{
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          }}
        >
          <ArrowBackIosIcon />
        </Button>
        <Button
          onClick={handleNextImage}
          sx={{
            bgcolor: 'rgba(0,0,0,0.5)',
            color: 'white',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          }}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Box>

      {/* Contenu du Hero */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          width: '100%',
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            mb: 2,
          }}
        >
          Black Week – 10% SUR TOUT
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '600px',
            margin: '0 auto',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          Code : blackweek
          A partir de 80€, un support de bricolage est offert en cadeau pour toute commande.
          Votre cadeau sera automatiquement ajouté.
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
