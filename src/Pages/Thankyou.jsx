import React from 'react';
import { 
  Container,
  Typography,
  Box,
  Paper,
  Link,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import TopNavigation from '../Components/TopNavigation';
import Footer from '../Components/Footer';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    success: {
      main: '#4caf50',
    },
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
  backgroundColor: theme.palette.grey[50],
}));

const Thankyou = () => {
  return (
    
    <ThemeProvider theme={theme}>
    <TopNavigation />
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h5" component="h1" gutterBottom>
            Merci pour votre confiance !
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, my: 3 }}>
            <Typography variant="h6">
              Votre commande a été enregistrée avec succès
            </Typography>
            <CheckCircle color="success" />
          </Box>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Nous prendrons contact avec vous dans les 48 prochaines heures, afin de confirmer les informations de votre commande.
          </Typography>

          
         

          <Typography variant="body1" sx={{ mt: 4, fontWeight: 'medium' }}>
            Nous sommes heureux de traiter avec vous.
          </Typography>
        </Box>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
};

export default Thankyou;