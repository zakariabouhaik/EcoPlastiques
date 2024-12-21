import React from 'react'; 
import { Box, Button, Typography } from '@mui/material';

const Type = () => {
  const Blan = ({ image, titre, text }) => {
    return (
      <Box
        sx={{
          border: '1px solid black',
          borderRadius: 4,
          boxShadow: '1px 3px 6px rgb(104, 114, 115)',
          width: { xs: '100%', sm: '48%', md: '30%' }, // Largeur responsive
          margin: { xs: 2, sm: 2, md: 1 }, // Espacement responsive
          overflow: 'hidden', // Évite les débordements d'image
          flex: '1 1 auto', // Permet un comportement flexible dans le conteneur
        }}
      >
        <img
          src={image}
          alt={titre}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            maxHeight: '250px', // Limite la hauteur pour éviter que l'image soit trop grande
          }}
        />
        <Box sx={{ padding: 2 }}>
          <Typography
            variant="h5"
            sx={{
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 2,
              textAlign: 'center',
            }}
          >
            {titre}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'black',
              textAlign: 'center',
              marginBottom: 2,
            }}
          >
            {text}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              sx={{
                bgcolor: '#9BC953',
                borderRadius: 3,
                color: 'white',
                padding: '8px 16px',
                textTransform: 'none', // Empêche la transformation en majuscules
                '&:hover': {
                  bgcolor: '#7ea941',
                },
              }}
            >
              Voir le produit
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
          fontSize: { xs: 24, sm: 32, md: 40 }, // Taille de la police responsive
          marginBottom: 4,
        }}
      >
        Nos Nappes de Table
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap', // Permet d'empiler les éléments sur les petits écrans
          justifyContent: { xs: 'center', sm: 'space-between', md: 'space-around' }, // Ajustement de l'espacement
          gap: { xs: 2, sm: 3, md: 4 }, // Espacement entre les cartes
          padding: { xs: 2, md: 4 }, // Padding autour du conteneur
        }}
      >
        <Blan
          image="/assets/Typepic/12.png"
          titre="Nappe Tri-or"
          text="La nappe Tri-Or inspirée par le riche héritage du Zelij marocain, cette création transparente est une célébration de l'artisanat marocain."
        />
        <Blan
          image="/assets/Typepic/3.jpg"
          titre="Nappe transparente"
          text="À première vue, cette nappe transparente de table ressemble à une plaque de verre, mais avec l'avantage qu'elle ne peut pas se rompre."
        />
        <Blan
          image="/assets/Typepic/nappe-mat-1.jpg"
          titre="Nappe mat"
          text="La nappe mat convient parfaitement aux tables et aux surfaces en verre extrêmement lisses. Sa surface légèrement mate ne permet pas la formation de bulles d’air."
        />
      </Box>
    </div>
  );
};

export default Type;
