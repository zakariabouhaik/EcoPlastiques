import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import TopNavigation from '../Components/TopNavigation';
import Footer from '../Components/Footer';

const Proposdenous = () => {
  const sections = [
    {
      
      content: `Bienvenue chez EcoPlastiques.ma ! Nous sommes une jeune startup marocaine passionnée et engagée dans la création de nappes en PVC sur mesure depuis plus de 4 ans. Notre histoire a débuté avec une vision simple : offrir à nos clients des produits de haute qualité qui allient fonctionnalité, style et durabilité.`
    },
    {
      title: "Notre Engagement envers la Qualité :",
      content: `Chez EcoPlastiques.ma, la qualité est au cœur de tout ce que nous faisons. Chaque nappe en PVC que nous fabriquons est le résultat d'une attention minutieuse aux détails, d'une sélection soigneuse des matériaux et d'un processus de fabrication rigoureux. Nous croyons en la puissance de la protection alliée à l'esthétique, ce qui se reflète dans chacun de nos produits.`
    },
    {
      title: "Notre Expertise :",
      content: `Avec plus de 4 ans d'expérience dans le domaine, nous avons acquis une expertise précieuse dans la création de nappes en PVC sur mesure. Notre équipe de professionnels passionnés est constamment à la recherche de nouvelles tendances et de technologies innovantes pour répondre aux besoins évolutifs de nos clients.`
    },
    {
      title: "Notre Engagement envers les Clients :",
      content: `La satisfaction de nos clients est notre priorité absolue. Nous sommes fiers de créer des produits qui embellissent vos espaces tout en les protégeant. Votre confiance en notre travail nous pousse à maintenir des normes élevées à chaque étape de notre parcours, du choix des matériaux à la livraison de votre commande.`
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
            À propos de nous
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

export default Proposdenous;