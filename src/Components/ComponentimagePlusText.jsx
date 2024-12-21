import React from "react";
import Textimage from "./Textimage";
import { Box } from "@mui/material";

const ComponentimagePlusText = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Colonne sur petits écrans, rangée sur grands écrans
        alignItems: "stretch", // Étend les deux sections à la même hauteur
        height: "100vh", // Facultatif, pour limiter à la hauteur de l'écran
        gap: 0, // Assure qu'il n'y a pas d'écart entre les 
        height:'40%'
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 0, // Supprime tout espacement interne
          flex: 1, // S'étend pour correspondre à l'image
        }}
      >
        <Textimage />
      </Box>

      <Box
        component="img"
        src="/assets/ImageComponent/XXA.jpg"
        sx={{
          width: { xs: "100%", md: "50%" }, // Ajuste la largeur
          objectFit: "cover", // Maintient l'image proportionnée
          flex: 1, // S'étend pour correspondre au texte
          margin: 0, // Supprime tout espace externe
        }}
        alt="Image description"
      />
    </Box>
  );
};

export default ComponentimagePlusText;
