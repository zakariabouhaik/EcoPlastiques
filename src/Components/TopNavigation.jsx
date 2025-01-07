import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, useMediaQuery, Typography, IconButton, List, ListItem, ListItemText, Collapse } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StraightenIcon from '@mui/icons-material/Straighten';
import StarIcon from '@mui/icons-material/Star';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../Translation/language-selector';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr');
  const navigate = useNavigate();

  const addSpaceForArabic = (text) => (i18n.language === 'ar' ? `${text}` : text);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
    document.body.dir = i18n.dir();
  }, [language, i18n]);

  const toggleLanguage = () => {
    const newLanguage = language === 'fr' ? 'ar' : 'fr';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const MenuItems = [
    { text: t('Home'), link: '/' },
    { text: t('Command'), link: '/productpage' },
    { text: t('Contact'), link: '/' },
    { text: t('Language'), link: '#' },
  ];


  const handleNavigation = (link) => {
    if (link !== '#') {
      navigate(link);
    }
  };


  const TopNavigation = () => {
    const NavigationItem = ({ icon: Icon, text,link }) => (
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
          height: 40,
          cursor: 'pointer',
        }}
        onClick={() => handleNavigation(link)}
      >
        <Icon sx={{ mb: 1, mr: 1, fontSize: { xs: 20, md: 30 } }} />
        <Typography
          variant="h6"
          align="center"
          color="inherit"
          sx={{ fontSize: { xs: 12, sm: 16, md: 18 }, marginRight: 1 }}
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
         <NavigationItem icon={LocalShippingIcon} text={addSpaceForArabic(t('text1'))} link="/" />
          <NavigationItem icon={StraightenIcon} text={addSpaceForArabic(t('text2'))} link="/about" />
          {!isMobile && (
            <NavigationItem icon={StarIcon} text={addSpaceForArabic(t('text3'))} link="/features" />
          )}
        </Box>
      </Box>
    );
  };

  const NavigationItem = ({ text,link  }) => (
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
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#f5f5f5',
        },
      }}
      onClick={() => handleNavigation(link)}
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
        bgcolor: 'white',
      }}
    >
      <TopNavigation />
      <Box
        sx={{
          bgcolor: 'white',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: 100,
            maxWidth: '1200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '0 auto',
          }}
        >
          {/* Logo */}
          <img
            src="/assets/logo/EcoPlastique-logo.png"
            alt="EcoPlastique logo"
            style={{
              width: isMobile ? '50%' : '30%',
              objectFit: 'cover',
              cursor: 'pointer',
              margin: isMobile ? 0 : -120,
            }}
            onClick={() => (window.location.href = '/')}
          />

          {/* Menu for larger screens */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              gap: { md: 4 },
            }}
          >
            {MenuItems.slice(0, 3).map((item, index) => (
              <NavigationItem key={index} text={item.text} link={item.link} />
            ))}
          </Box>

          {/* Language button for larger screens */}
          <Button
            sx={{
              display: { xs: 'none', md: 'block' },
              border: '1px solid black',
              color: 'black',
              mt: { xs: 1, sm: 0 },
              '&:hover': {
                bgcolor: '#f5f5f5',
                borderColor: '#666',
              },
            }}
            onClick={toggleLanguage}
          >
            {t('Language')}
          </Button>

          {/* Hamburger menu for smaller screens */}
          <IconButton
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
            onClick={toggleMenu}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* Dropdown menu for mobile */}
        <Collapse in={isMenuOpen} sx={{ display: { xs: 'block', md: 'none' } }}>
          <Box
            sx={{
              width: '100%',
              bgcolor: 'white',
              borderTop: '1px solid #eee',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          >
            <List>
              {MenuItems.slice(0, 3).map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => {
                    handleNavigation(item.link);
                    toggleMenu();
                  }}
                  sx={{
                    borderBottom: '1px solid #eee',
                    py: 1,
                    '&:hover': {
                      bgcolor: '#f5f5f5',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    sx={{
                      textAlign: 'center',
                      '& .MuiTypography-root': {
                        fontSize: '1rem',
                      },
                    }}
                  />
                </ListItem>
              ))}
              <ListItem
                button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLanguage();
                  toggleMenu();
                }}
                sx={{
                  borderBottom: '1px solid #eee',
                  py: 1,
                  border: '1px solid black',
                  borderRadius: '34px',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                    borderColor: '#666',
                  },
                }}
              >
                <ListItemText
                  primary={t('Language')}
                  sx={{
                    textAlign: 'center',
                    '& .MuiTypography-root': {
                      fontSize: '1rem',
                      fontWeight: 'bold',
                    },
                  }}
                />
              </ListItem>
            </List>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Header;
