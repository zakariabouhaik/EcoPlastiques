import React, {forwardRef} from 'react';
import ProductInfo from './ProductInfo';
import { Box, useTheme, useMediaQuery } from '@mui/material';

const Qcmpluspic = forwardRef(({ image }, ref) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box ref={ref}
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column', // Mobile : en colonne
          md: 'row'     // Desktop : en ligne
        },
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: { xs: 4, md: 2 }, // Espacement entre les éléments
        padding: {
          xs: '20px 10px', // Padding plus petit sur mobile
          sm: '20px',      // Padding normal sur tablet et desktop
        },
      }}
    >
      {/* Première moitié : ProductInfo */}
      <Box
        sx={{
          flex: 1,
          width: '100%', // Prend toute la largeur sur mobile
          maxWidth: {
            xs: '100%',
            md: '50%'
          },
          order: {
            xs: 2,  // Sur mobile, ProductInfo apparaît en second
            md: 1   // Sur desktop, ProductInfo apparaît en premier
          },
          padding: {
            xs: '10px',
            sm: '20px'
          }
        }}
      >
        <ProductInfo />
      </Box>

      {/* Deuxième moitié : Image */}
      <Box
        sx={{
          flex: 1,
          width: '100%',
          maxWidth: {
            xs: '100%',
            md: '50%'
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          order: {
            xs: 1,  // Sur mobile, l'image apparaît en premier
            md: 2   // Sur desktop, l'image apparaît en second
          }
        }}
      >
        <Box
          component="img"
          src={image[0]}
          alt="EcoPlastique logo"
          sx={{
            maxWidth: {
              xs: '90%',  // Plus large sur mobile
              sm: '85%',  // Un peu moins large sur tablet
              md: '80%'   // Taille normale sur desktop
            },
            height: 'auto',
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
      </Box>
    </Box>
  );
});

export default Qcmpluspic;