import React from 'react';
import { Typography, Grid2, Box, Button } from "@mui/material";

const Theendofthepage = ({ text, titre1, titre2, pictureso1, pictureso2, titre3, text2 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: '100%', // Utiliser toute la largeur
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Box 
        sx={{
          width: '40%', // Limiter la largeur du contenu
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>{text}</Typography>
        <Typography>{titre1}</Typography>
        <Typography>{titre2}</Typography>

        <Box 
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 2,
          }}
        >
          {/* Image principale */}
          <Box
            component="img"
            src={pictureso1[0]}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: 1,
              marginBottom: 2,
            }}
          />

          {/* Images secondaires */}
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              width: '100%',
            }}
          >
            {pictureso2.map((image, index) => (
              <Box 
                key={index}
                sx={{
                  width: '48%', // Ajuster pour deux images côte à côte
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src={image}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 1,
                  }}
                />
                <Typography>{titre3}</Typography>
                <Typography>{text2}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#9BC953",
            color: "white",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "12px 20px",
            textTransform: "none",
            margin: '1%',
            "&:hover": {
              backgroundColor: "#7CA43B",
            },
          }}
        >
          Voir les produits
        </Button>
      </Box>
    </Box>
  );
};

export default Theendofthepage;