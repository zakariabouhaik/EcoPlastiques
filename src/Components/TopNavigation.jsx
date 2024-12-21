import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StraightenIcon from '@mui/icons-material/Straighten';
import StarIcon from '@mui/icons-material/Star';

const Header = () => {
  const TopNavigation = () => {
    const NavigationItem = ({ icon: Icon, text }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        
          py: 0.2,
          margin: 1,
          marginRight: 5,
          borderRadius: 2,
           height:50
        }}
      >
        <Icon sx={{ mb: 1, mr: 1 }} />
        <Typography
          variant="h5"
          align="center"
          color="inherit"
         
        >
          {text}
        </Typography>
      </Box>
    );

    return (
      <Box sx={{ bgcolor: '#687273', py: 0.001 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            
          }}
        >
          <NavigationItem
            icon={LocalShippingIcon}
            text="Livraison gratuite"
          />
          <NavigationItem
            icon={StraightenIcon}
            text="Découper sur mesure"
          />
          <NavigationItem
            icon={StarIcon}
            text="Meilleur rapport qualité prix"
          />
        </Box>
      </Box>
    );
  };

  const NavigationItem = ({ text }) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'white',
        color: 'black',
       
         
        px: 1.5,  // Réduit le padding horizontal
        py: 0.2,
        margin: 0.5,  // Réduit la marge
        marginRight: 2,  // Réduit l'espace entre les éléments
       
      }}
    >
      <Typography
        variant="body2"
        align="center"
        color="inherit"
        fontSize={23}  
      >
        {text}
      </Typography>
    </Box>
  );

  return (
    <Box 
      sx={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        width: '100%' 
      }}
    >
      <TopNavigation />
      <Box 
        sx={{ 
          bgcolor: 'white', 
         
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          px: 10, 
          height: 120 
        }}
      >
        <img
          src='/assets/logo/EcoPlastique-logo.png'
          alt="Description of image"
          style={{
            width: '15%',
            objectFit: 'cover'
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
             gap:3,
            marginRight:40
          }}
        >
        
          <NavigationItem text="Home" />
          <NavigationItem text="Commander" />
          <NavigationItem text="Contactez-nous" />
       
        </Box>
        <Button sx={{ border: '1px solid black', color: 'black' }}>
          العربية
        </Button>
      </Box>
    </Box>
  );
};

export default Header;