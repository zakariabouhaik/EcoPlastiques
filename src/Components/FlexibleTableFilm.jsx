import React from "react";
import { Typography, Box, Button } from "@mui/material";

const FlexibleTableFilm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9", // Arrière-plan clair
        padding: "40px",
        maxWidth: "800px",
        margin: "auto",
        textAlign: "left", // Alignement à gauche
        borderRadius: "8px", // Coins arrondis
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Ombre douce
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Sécurité alimentaire
      </Typography>
      <Typography
        variant="body1"
        sx={{
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "20px",
        }}
      >
        Notre nappe est souvent utilisée sur la table de la salle à manger.
        C’est pourquoi, nous avons pris un soin particulier pour le choix des
        matières premières et pouvons maintenant dire que le film de protection
        est conforme aux normes de sécurité alimentaire et sans danger lors
        d’un contact avec les aliments. Habituellement, nous avons besoin d’une
        assiette pour manger. Cependant, chaque parent sait que cela ne
        fonctionne pas toujours avec les enfants. Avec notre film, ne doutez
        plus.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#9BC953", // Couleur jaune
          color: "#000",
          fontWeight: "bold",
          borderRadius: "20px",
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

export default FlexibleTableFilm;
