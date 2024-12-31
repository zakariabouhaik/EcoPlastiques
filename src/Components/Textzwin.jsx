import React from "react";
import { Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Textzwin = () => {
  const { t } = useTranslation();

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
        {t('flexible_film_title')}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          lineHeight: "1.8",
          color: "#555",
        }}
      >
        {t('flexible_film_text')}
      </Typography>
    </Box>
  );
};

export default Textzwin;
