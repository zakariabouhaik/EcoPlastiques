import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container, 
  Snackbar, 
  Alert,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import TopNavigation from '../Components/TopNavigation';
import Footer from '../Components/Footer';

const ContactForm = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const EMAIL_TO = 'zakariayoza123@gmail.com';
  const WHATSAPP_TO = '212687183469';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('to_email', EMAIL_TO);
      formDataToSend.append('to_whatsapp', WHATSAPP_TO);

      await fetch('https://script.google.com/macros/s/AKfycbwe6pqj1Z8ln_O7jCEQ6U9_z8Hegei61uQtX4tb9F9-oz5l7qv_QTGkXKNWM-FVwLpA8g/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend
      });

      setSnackbar({
        open: true,
        message: t('Message envoyé avec succès!'),
        severity: 'success'
      });
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Erreur:', error);
      setSnackbar({
        open: true,
        message: t('Erreur lors de l\'envoi du message. Veuillez réessayer.'),
        severity: 'error'
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Box>
      <TopNavigation />
      <Box
        sx={{
          backgroundColor: '#9BC953',
          minHeight: '100vh',
          width: 'auto',
          display: 'flex',
          alignItems: 'center',
          padding: { xs: 2, sm: 4 },
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      > 
        <Container 
          maxWidth="sm" 
          sx={{ 
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            py: { xs: 4, sm: 6 }
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              padding: { xs: 2, sm: 4 },
              width: '100%'
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                textAlign: 'center',
                mb: 4,
                color: '#333',
                fontWeight: 'bold',
                letterSpacing: '0.5px',
                fontSize: { xs: '1.25rem', sm: '1.5rem' }
              }}
            >
              {t('Envoie_nous_un_message')}
            </Typography>

            <Box 
              component="form" 
              onSubmit={handleSubmit} 
              sx={{ 
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              <Box 
                sx={{ 
                  display: 'grid', 
                  gap: 2, 
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }
                }}
              >
                <TextField
                  required
                  fullWidth
                  name="fullName"
                  placeholder={t('product_presentation_full_name')}
                  value={formData.fullName}
                  onChange={handleChange}
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#e0e0e0' },
                      '&:hover fieldset': { borderColor: '#9BC953' },
                    }
                  }}
                />

                <TextField
                  required
                  fullWidth
                  name="email"
                  type="email"
                  placeholder={t('product_presentation_email')}
                  value={formData.email}
                  onChange={handleChange}
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#e0e0e0' },
                      '&:hover fieldset': { borderColor: '#9BC953' },
                    }
                  }}
                />
              </Box>

              <Box 
                sx={{ 
                  display: 'grid', 
                  gap: 2, 
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }
                }}
              >
                <TextField
                  required
                  fullWidth
                  name="phone"
                  placeholder={t('product_presentation_phone')}
                  value={formData.phone}
                  onChange={handleChange}
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#e0e0e0' },
                      '&:hover fieldset': { borderColor: '#9BC953' },
                    }
                  }}
                />

                <TextField
                  required
                  fullWidth
                  name="subject"
                  placeholder={t('Sujet')}
                  value={formData.subject}
                  onChange={handleChange}
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#e0e0e0' },
                      '&:hover fieldset': { borderColor: '#9BC953' },
                    }
                  }}
                />
              </Box>

              <TextField
                required
                fullWidth
                multiline
                rows={isMobile ? 3 : 4}
                name="message"
                placeholder={t('Message')}
                value={formData.message}
                onChange={handleChange}
                size={isMobile ? "small" : "medium"}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#e0e0e0' },
                    '&:hover fieldset': { borderColor: '#9BC953' },
                  }
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: '#9BC953',
                  color: 'white',
                  padding: isMobile ? '8px' : '12px',
                  borderRadius: '4px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  '&:hover': {
                    backgroundColor: '#8BB947',
                  },
                }}
              >
                {t('Envoyer_le_message')}
              </Button>
            </Box>
          </Box>
        </Container>

      

        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar}
          anchorOrigin={{ 
            vertical: isMobile ? 'bottom' : 'top', 
            horizontal: 'center' 
          }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
            sx={{
              width: '100%',
              fontSize: isMobile ? '0.875rem' : '1rem'
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
      <Footer/>
    </Box>
  );
};

export default ContactForm;