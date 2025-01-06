import React from "react";
import { Typography, Box ,useMediaQuery} from "@mui/material";
import { useTranslation } from "react-i18next";

const Textzwin = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:768px)');

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
        variant={isMobile ? "h4" : "h4"}
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        {t('flexible_film_title')}
      </Typography>
      <Typography
      variant={isMobile ? "h7" : "h5"}
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
