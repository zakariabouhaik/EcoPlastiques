import React, { useState } from 'react';
import { Box, Button, useMediaQuery, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StraightenIcon from '@mui/icons-material/Straighten';
import StarIcon from '@mui/icons-material/Star';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const MenuItems = [
    { text: 'Home', link: '#' },
    { text: 'Commander', link: '#' },
    { text: 'Contactez-nous', link: '#' },
    { text: 'العربية', link: '#' },
  ];

  const TopNavigation = () => {
    const NavigationItem = ({ icon: Icon, text }) => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          py: 0.2,
          px: 2,
          mx: { xs: 0.5, md: 2 },
          borderRadius: 2,
          height: 50,
        }}
      >
        <Icon sx={{ mb: 1, mr: 1, fontSize: { xs: 20, md: 30 } }} />
        <Typography
          variant="h6"
          align="center"
          color="inherit"
          sx={{ fontSize: { xs: 12, sm: 16, md: 18 } }}
        >
          {text}
        </Typography>
      </Box>
    );

    return (
      <Box sx={{ bgcolor: '#687273', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: '0 24px',
          }}
        >
          <NavigationItem icon={LocalShippingIcon} text="Livraison gratuite" />
          <NavigationItem icon={StraightenIcon} text="Découper sur mesure" />
          {!isMobile && (
            <NavigationItem icon={StarIcon} text="Meilleur rapport qualité prix" />
          )}
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
        px: { xs: 1, sm: 1.5 },
        py: 0.2,
        margin: { xs: 0.3, md: 0.5 },
      }}
    >
      <Typography
        variant="body2"
        align="center"
        color="inherit"
        sx={{ fontSize: { xs: 12, sm: 18, md: 23 } }}
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
        width: '100%',
      }}
    >
      <TopNavigation />
      <Box sx={{ 
        bgcolor: 'white',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
          }}
        >
          {/* Logo */}
          <img
            src="/assets/logo/EcoPlastique-logo.png"
            alt="EcoPlastique logo"
            style={{
              width: '15%',
              maxWidth: 150,
              objectFit: 'cover',
            }}
          />

          {/* Menu complet pour les grands écrans */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: { md: 4 },
            }}
          >
            {MenuItems.slice(0, 3).map((item, index) => (
              <NavigationItem key={index} text={item.text} />
            ))}
          </Box>

          {/* Bouton العربية sur grands écrans */}
          <Button
            sx={{
              display: { xs: 'none', md: 'block' },
              border: '1px solid black',
              color: 'black',
              mt: { xs: 1, sm: 0 },
            }}
          >
            العربية
          </Button>

          {/* Menu Hamburger pour les petits écrans */}
          <IconButton
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          {/* Drawer pour les petits écrans */}
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{
                width: 250,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2,
              }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {MenuItems.map((item, index) => (
                  <ListItem button key={index}>
                    <ListItemText primary={item.text} sx={{ textAlign: 'center' }} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;