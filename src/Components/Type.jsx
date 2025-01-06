import React from 'react'; 
import { Box, Button, Typography,useMediaQuery,useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const Type = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();


  const handleNavigation = (index) => {
    navigate('/Productpage', { state: { selectedIndex: index } });
  };


  const Blan = ({ image, titre, text,onClick  }) => {
    return (
      <Box
        sx={{
          border: '1px solid black',
          height:'100%',
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
            height: isMobile?'60%':'80%',
            objectFit: 'cover',
             
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
             onClick={onClick}
              sx={{
                bgcolor: '#9BC953',
                borderRadius: 6,
                color: 'white',  
                padding:"10px 20px",
                fontSize:isMobile?16:24,
                textTransform: 'none', // Empêche la transformation en majuscules
                '&:hover': {
                  bgcolor: '#7ea941',
                },
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
         fontSize:isMobile?30:65 , // Taille de la police responsive
           
          color: "black",
          marginBottom: 1,
          marginTop:3
        }}
      >
        {t('tablecloths_title')}
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
          titre={t('tablecloth_tri_or_title')}
          text={t('tablecloth_tri_or_text')}
          onClick={() => handleNavigation(2)}
        />
        <Blan
          image="/assets/Typepic/3.jpg"
          titre={t('tablecloth_transparent_title')}
          text={t('tablecloth_transparent_text')}
          onClick={() => handleNavigation(0)}

        />
        <Blan
          image="/assets/Typepic/nappe-mat-1.jpg"
          titre={t('tablecloth_mat_title')}
          text={t('tablecloth_mat_text')}
          onClick={() => handleNavigation(1)}

        />
      </Box>
    </div>
  );
};

export default Type;
