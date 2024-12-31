import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: '/assets/Heropic/XX.jpg',
      title: t('hero_slide_1_title'),
      description: t('hero_slide_1_description')
    },
    {
      image: '/assets/Heropic/bg-img-2.png',
      title: t('hero_slide_2_title'),
      description: t('hero_slide_2_description')
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying && !isTransitioning) {
      interval = setInterval(() => {
        handleNextImage();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentImageIndex, isTransitioning]);

  const handleImageTransition = (newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleNextImage = () => {
    const newIndex = (currentImageIndex + 1) % slides.length;
    handleImageTransition(newIndex);
  };

  const handlePrevImage = () => {
    const newIndex = (currentImageIndex - 1 + slides.length) % slides.length;
    handleImageTransition(newIndex);
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
      {slides.map((slide, index) => (
        <Box
          key={index}
          component="img"
          src={slide.image}
          alt={`Slide ${index + 1}`}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: currentImageIndex === index ? 1 : 0,
            transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
            transform: currentImageIndex === index ? 'scale(1)' : 'scale(1.05)',
            transformOrigin: 'center',
            willChange: 'opacity, transform',
          }}
        />
      ))}

      {/* Contenu du Hero */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%)`,
          textAlign: 'center',
          color: 'white',
          width: '100%',
          px: 2,
          opacity: !isTransitioning ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
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
          {slides[currentImageIndex].title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: '600px',
            margin: '0 auto',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            whiteSpace: 'pre-line',
          }}
        >
          {slides[currentImageIndex].description}
        </Typography>
      </Box>

      {/* Boutons de navigation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
        }}
      >
        <IconButton
          onClick={handlePrevImage}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          disabled={isTransitioning}
          sx={{
            color: 'white',
            transition: 'all 0.3s ease',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.3)',
            },
            width: '48px',
            height: '48px',
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        
        <IconButton
          onClick={handleNextImage}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          disabled={isTransitioning}
          sx={{
            color: 'white',
            transition: 'all 0.3s ease',
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.3)',
            },
            width: '48px',
            height: '48px',
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Indicateurs de slide */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 24,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          zIndex: 2,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => !isTransitioning && handleImageTransition(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: currentImageIndex === index ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                bgcolor: currentImageIndex === index ? 'white' : 'rgba(255,255,255,0.7)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Hero;