import React from "react";
import { Typography, Box, Button } from "@mui/material";

const Textimage = () => {
    return (
        <Box
         sx={{
    backgroundColor: "#f5faff",
    padding: '6%',
    borderRadius: "8px",
    textAlign: "left",
    flex: 1, // Permet d'occuper toute la hauteur disponible
  }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "black",
            }}
          >
            Élégant, moderne et avec du style
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#007bff",
              marginTop: "10px",
              fontWeight: "bold",
            }}
          >
            La nappe de protection transparente
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: "20px",
              lineHeight: "1.6",
              color: "#333",
            }}
          >
            À quoi sert la plus belle table, si elle est cachée sous une nappe
            traditionnelle? Le magnifique bois massif ou le motif particulier de
            votre table doivent être vus et protégés. Grâce à notre film transparent
            vous pouvez dorénavant toujours l’admirer. Cette nappe est coupée sur
            mesure et biseautée sur les bords. En cas de besoin, vous pouvez
            facilement enlever le film et l’enrouler. En une minute, vous reposez
            la nappe transparente et votre table est à nouveau protégée.
          </Typography>
         
          <Button
        variant="contained"
        sx={{
          backgroundColor: "#9BC953", // Couleur jaune
          color: "#000",
          fontWeight: "bold",
          borderRadius: "20px",
          marginTop:'5%',
          color:'white',
          padding: "10px 20px",
          textTransform: "none", // Désactiver la majuscule automatique
          "&:hover": {
            backgroundColor: "#9BC953", // Couleur au survol
          },
        }}
      >
        Voir les produits
      </Button>
        </Box>
      );
    };
    

export default Textimage
