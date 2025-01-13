import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import TopNavigation from '../Components/TopNavigation';
import Footer from '../Components/Footer';

const PolitiqueRetourRemboursement = () => {
  const sections = [
    {
      
      content: `Si vous n'êtes pas satisfait de votre achat, nous offrons une politique de retour dans les 7 jours suivant la réception du produit.`
    },
    {
      title: "Garantie de satisfaction à 80% :",
      content: `Nous sommes confiants dans la qualité de nos produits et nous nous engageons à fournir une satisfaction optimale à nos clients. Si pour une raison quelconque vous n'êtes pas entièrement satisfait de votre nappe en PVC sur mesure, nous vous rembourserons 80% du montant total de votre commande.`
    },
    {
      title: "Procédure de remboursement :",
      content: `Si vous n'êtes pas satisfait de votre nappe, veuillez nous contacter dans les 24 heures suivant la livraison pour nous en informer. Notre équipe prendra en charge votre demande de remboursement et vous fournira les instructions nécessaires.`
    },
    {
      title: "Retour du produit :",
      content: `Nous organiserons le retour de la nappe en PVC sur mesure par notre service de livraison. Le remboursement de 80% du montant total sera effectué après réception et inspection de la nappe retournée, et sous réserve qu'elle soit en parfait état, non utilisée et bien emballée.`
    },
    {
      title: "Délai de remboursement :",
      content: `Le remboursement sera effectué dans les 7 jours suivant l'acceptation de votre demande. Veuillez noter que le temps de traitement peut varier en fonction de votre mode de paiement.`
    },
    {
      title: "Coordonnées pour les demandes de remboursement :",
      content: `Pour demander un remboursement, veuillez nous contacter par téléphone au 06 63 31 00 60 ou par e-mail à support@EcoPlastiques.ma . Notre équipe du service clientèle sera heureuse de vous aider dans ce processus. \n Nous nous efforçons de garantir la satisfaction de nos clients et de fournir des produits de haute qualité. Si vous avez des questions concernant notre politique de remboursement ou si vous souhaitez demander un remboursement, n'hésitez pas à nous contacter aux coordonnées indiquées ci-dessus. \n Merci de faire confiance à EcoPlastiques.ma pour vos besoins en nappes en PVC sur mesure. \n Veuillez noter que cette politique de remboursement s'applique uniquement aux achats effectués sur notre site web. Pour toute demande de remboursement ou de retour, veuillez nous contacter à l'adresse support@EcoPlastiques.ma \n Nous nous engageons à vous offrir une expérience d'achat agréable et satisfaisante. Si vous avez des questions concernant notre politique de remboursement, n'hésitez pas à nous contacter.`
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <TopNavigation />
      
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 2, sm: 4, md: 5 },
            bgcolor: 'white',
            borderRadius: 2
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 4,
              color: '#1a1a1a',
              textAlign: 'center'
            }}
          >
            Politique de Retour et Remboursement :
          </Typography>

          {sections.map((section, index) => (
            <Box 
              key={index}
              sx={{ 
                mb: 5,
                '&:last-child': { mb: 0 }
              }}
            >
              {section.title !== "Introduction" && (
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    fontWeight: 600,
                    mb: 2,
                    color: '#2C3E50'
                  }}
                >
                  {section.title}
                </Typography>
              )}
              
              <Typography
                sx={{
                  color: '#4a4a4a',
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  whiteSpace: 'pre-line',
                  '& > p': {
                    mb: 2
                  }
                }}
              >
                {section.content}
              </Typography>

              {index !== sections.length - 1 && (
                <Box 
                  sx={{ 
                    height: '1px',
                    bgcolor: 'rgba(0,0,0,0.1)',
                    my: 4 
                  }} 
                />
              )}
            </Box>
          ))}
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
};

export default PolitiqueRetourRemboursement;