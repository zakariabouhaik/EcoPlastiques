import React from 'react';
import { Box, Link, Typography, useMediaQuery, IconButton, Container, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:768px)');

  const contactInfo = [
    { icon: <LocationOnIcon />, text: "123 Rue Example, Casablanca, Maroc" },
    { icon: <EmailIcon />, text: "contact@ecoplastique.ma" },
    { icon: <PhoneIcon />, text: "0663310060" }
  ];

  return (
    <Box
      sx={{
        bgcolor: '#9BC953',
        color: 'white',
        pt: 6,
        pb: 3,
        boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Container maxWidth="auto">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1.5fr 1.5fr' },
            gap: 4,
            mb: 4
          }}
        >
          {/* Section Logo et À propos */}
          <Box sx={{ mb: { xs: 3, md: 0 },justifyContent:'centre',justifyItems:'center' }}>
            <Box
              component="img"
              src="/assets/logo/EcoPlastique-logo-white.png"
              alt="EcoPlastique logo"
              sx={{
                width: isMobile ? "80%" : "40%",
                mb: 2,
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                mx: { xs: 'auto', md: 0 }
              }}
            />
            <Typography sx={{ mb: 2, opacity: 0.9, lineHeight: 1.9,maxWidth:'500px',marginBottom:3 }}>
            {t('textfooter')}
            
             </Typography>
            <Box sx={{ display: 'flex', gap: 2,  }}>
              <IconButton
                href="https://www.facebook.com/ecoplastique.ma"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/ecoplastique.ma/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Section Liens rapides */}
          <Box sx={{ mb: { xs: 3, md: 0 } }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              {t('Liens_rapides')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5
              }}
            >
              {[
                { text: t('footer1'), href: '#' },
                { text: t('footer2'), href: '#' },
                { text: t('footer3'), href: '#' },
                { text: t('footer4'), href: '#' }
              ].map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color="inherit"
                  underline="none"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '0.95rem',
                    opacity: 0.9,
                    transition: 'all 0.2s',
                    '&:hover': {
                      opacity: 1,
                      pl: 0.5,
                    },
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Section Contact */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              {t('Contactez_nous')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    opacity: 0.9
                  }}
                >
                  {React.cloneElement(info.icon, {
                    sx: { fontSize: 20 }
                  })}
                  <Typography variant="body2">
                    {info.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 3 }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: 1
          }}
        >
          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              fontSize: { xs: '0.8rem', sm: '0.875rem' },
              textAlign: 'center'
            }}
          >
            © 2024 EcoPlastique. Tous droits réservés.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;