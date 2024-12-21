import React from "react";
import { Typography, Box } from "@mui/material";

const Textzwin = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "40px",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Film de table flexible pour tous les domaines d’application
      </Typography>
      <Typography
        variant="body1"
        sx={{
          lineHeight: "1.8",
          color: "#555",
        }}
      >
        Notre nappe transparente a l’avantage d’être très élastique et
        antidérapante. De ce fait, le film est déroulé en moins d’une minute. Il
        suffit de poser – aligner – dérouler, c’est prêt ! Un point positif
        supplémentaire du film de protection est qu’une fois posé, il est
        difficile de le bouger et se trouve fixé fermement à la table. Les
        enfants tirant sur la nappe et occasionnant des dégâts, font dorénavant
        partie du passé.
      </Typography>
    </Box>
  );
};

export default Textzwin;
