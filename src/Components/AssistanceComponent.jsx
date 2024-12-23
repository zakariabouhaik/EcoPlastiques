import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { useTranslation } from 'react-i18next'; 

const AssistanceComponent = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center',
        maxWidth: '400px',
        margin: 'auto',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
        {t("assistance1")}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
      {t("assistance2")}
      </Typography>
      <Typography variant="body1">
      {t("assistance3")}{' '}
        <Link href="tel:+212708051754" color="primary">
          +212 708-051754
        </Link>{' '}
        {t("assistance4")}
      </Typography>
    </Box>
  );
};

export default AssistanceComponent;
