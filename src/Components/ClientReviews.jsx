import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Rating,
  Grid,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import { useTranslation } from 'react-i18next';

const ClientReviews = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();



  const reviews = [
    {
      name: 'Younes D.',
      rating: 5,
      date: '2024-01-10',
      comment: 'Merci bcp vraiment magnifique 🙏🏼',
      image: '/assets/AvisClient/1.jpg'
    },
    {
        name: 'Samia D. ',
        rating: 5,
        date: '2024-01-09',
        comment: 'Bonjour, j’ai reçu ma commande pour une nappe ronde hier jat parfaite m3a la table, bonne continuation',
        image: '/assets/AvisClient/2.jpg'
      },
      {
        name: 'Soukaina I.',
        rating: 4,
        date: '2024-01-09',
        comment:'Ch7al wana tan9lb 3liha wa akhiran wslatni jat tat7m9 m3a la table chokran bzaf',
        image: '/assets/AvisClient/3.jpg'
      },
    {
      name: 'Ibtissam K.',
      rating: 5,
      date: '2024-01-09',
      comment:'Franchement j’été impressionné par la qualité de la nappe, il s’adapte parfaitement à ma table je le recommande',
      image: '/assets/AvisClient/4.jpg'
    },
    {
        name: 'Khaoula A. ',
        rating: 5,
        date: '2024-01-09',
        comment:'La finition était parfaite, je vous remercie également sur le geste commercial de me changer de la nappe vus que j’ai fait une erreur dans les mesures 😊',
        image: '/assets/AvisClient/5.jpg'
      },

      {
        name: 'Nouhaila S.',
        rating: 5,
        date: '2024-01-09',
        comment:'شكرا وصلتني فالوقت المحدد قبل مانسافر انشاء الله ندير عندكم كوموند اخرى',
        image: '/assets/AvisClient/6.jpg'
      },
      {
        name: 'Asmaà K. ',
        rating: 4,
        date: '2024-01-09',
        comment:'Je suis satisfaite, service professionnel',
        image: '/assets/AvisClient/7.jpg'
      },
      {
        name: 'Kawtar A.',
        rating: 5,
        date: '2024-01-09',
        comment:'Dert commande pour 3 dyal lkwafiz li3ndi jawn nichan m3ahom mercii',
        image: '/assets/AvisClient/8.jpg'
      },
      {
        name: 'Naoufal K.',
        rating: 5,
        date: '2024-01-09',
        comment:'Je vous remercie pour la livraison rapide en espérant d’avoir une réduction sur la prochaine commande 🥰',
        image: '/assets/AvisClient/9.jpg'
      },
      {
        name: 'Noura E.',
        rating: 5,
        date: '2024-01-09',
        comment:'Mli 3taha liya livreur t9ila 3erft bli qualité zwina jat mezyan m3a tabla',
        image: '/assets/AvisClient/10.jpg'
      },
      {
        name: 'Hafida B.',
        rating: 5,
        date: '2024-01-09',
        comment:'شكرا على ليناب جاو مقادين مع الكوافيز',
        image: '/assets/AvisClient/11.jpg'
      },
      {
        name: 'Salma T.',
        rating: 5,
        date: '2024-01-09',
        comment:'Franchement le service client est top et à l’écoute, j’ai reçu ma nappe dans 5 jours',
        image: '/assets/AvisClient/12.jpg'
      },
    
    // Add more reviews as needed
  ];

   
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const FloatingButton = () => (
    <Button
      onClick={handleOpen}
      sx={{
        position: 'fixed',
        right: { xs: 22, sm: 22 },
        top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'right center',
        backgroundColor: '#9BC953',
        color: 'white',
        '&:hover': {
          backgroundColor: '#8BB947',
        },
        zIndex: 1000,
        padding: '10px 20px',
        borderRadius: '14px 14px 0 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}
    >
      <StarIcon fontSize="small" />
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '0.875rem', sm: '1rem' }
        }}
      >
        {t('Avis_de_nos_clients')}
      </Typography>
    </Button>
  );

  return (
    <>
      <FloatingButton />
      
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        fullScreen={isMobile}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: isMobile ? 0 : 2,
            margin: isMobile ? 0 : 2,
            maxHeight: '90vh'
          }
        }}
      >
        <DialogTitle
          sx={{
            bgcolor: '#9BC953',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 3,
            py: 2,
            position: 'sticky',
            top: 0,
            zIndex: 1
          }}
        >
          <Typography variant="h6" component="div" fontWeight="bold">
            {t('Avis_de_nos_clients')}
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 2, overflowY: 'auto' }}>
          <Grid 
            container 
            spacing={2}
            sx={{ 
              width: '100%',
              margin: '0 auto'
            }}
          >
            {reviews.map((review, index) => (
              <Grid 
                item 
                xs={12}
                sm={6}
                md={4}
                lg={4}
                key={index}
                sx={{ 
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Box
                  sx={{
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    overflow: 'hidden',
                    width: '100%',
                    maxWidth: '400px',
                    backgroundColor: 'white',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  {review.image && (
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#f5f5f5',
                        position: 'relative',
                        paddingTop: '95%' // 16:9 aspect ratio
                      }}
                    >
                      <Box
                        component="img"
                        src={review.image}
                        alt={`Review by ${review.name}`}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          padding: 1,
                          backgroundColor: 'white'
                        }}
                      />
                    </Box>
                  )}
                  <Box sx={{ p: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1,
                        flexWrap: 'wrap',
                        gap: 1
                      }}
                    >
                      <Typography 
                        fontWeight="bold"
                        sx={{
                          fontSize: { xs: '0.9rem', sm: '1rem' }
                        }}
                      >
                        {review.name}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: '0.75rem', sm: '0.8rem' }
                        }}
                      >
                        {new Date(review.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Rating
                      value={review.rating}
                      readOnly
                      size={isMobile ? "small" : "medium"}
                      sx={{ mb: 1 }}
                    />
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                        minHeight: { xs: '2.4em', sm: '3em' },
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {review.comment}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ClientReviews;