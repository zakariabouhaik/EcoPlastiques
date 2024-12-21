import React from 'react'
import { Box,Button,Typography } from "@mui/material";


const TextZwintwo = () => {
    return (
        <Box
          sx={{
            textAlign: "center",
            padding: "40px",
            maxWidth: "800px",
            margin: "auto",
            bgcolor: "rgba(203, 211, 212, 0.7)"
            
            
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: "20px",
              color: 'black',
              
            }}
          >
            Sécurité alimentaire
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "1.8",
              color: 'black',
            }}
          >
            Notre nappe est souvent utilisée sur la table de la salle à manger. C’est pourquoi, nous avons pris un soin particulier pour 
					le choix des matières premières et pouvons maintenant dire que le film de protection est conforme aux normes de sécurité 
					alimentaire et sans danger lors d’un contact avec les aliments. Habituellement, nous avons besoin d’une assiette pour manger. 
					Cependant, chaque parent sait que cela ne fonctionne pas toujours avec les enfants. Avec notre film, ne doutez plus.
          </Typography>

          <Button
        variant="contained"
        sx={{
          backgroundColor: "#9BC953", // Couleur jaune
          color: "#000",
          fontWeight: "bold",
          borderRadius: "20px",
          marginTop:"6%",
          padding: "10px 20px",
          color:'white',
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

export default TextZwintwo
