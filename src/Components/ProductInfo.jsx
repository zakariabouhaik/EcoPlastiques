import React, { useState, forwardRef } from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const ProductInfo = forwardRef(() => {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      key: 'arrivee',
      title: t('product_info_arrivee'),
      content: t('product_info_arrivee_content'),
    },
    {
      key: 'odeurs',
      title: t('product_info_odeurs'),
      content: t('product_info_odeurs_content'),
    },
    {
      key: 'exterieur',
      title: t('product_info_exterieur'),
      content: t('product_info_exterieur_content'),
    },
    {
      key: 'plastique',
      title: t('product_info_plastique'),
      content: t('product_info_plastique_content'),
    },
    {
      key: 'moulage',
      title: t('product_info_moulage'),
      content: t('product_info_moulage_content'),
    },
    {
      key: 'magazines',
      title: t('product_info_magazines'),
      content: t('product_info_magazines_content'),
    },
    {
      key: 'donnees',
      title: t('product_info_donnees'),
      content: t('product_info_donnees_content'),
    },
  ];

  const commonBoxStyles = {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: 1,
    marginBottom: 2,
  };

  const commonAccordionStyles = {
    boxShadow: 'none',
    '&:before': { display: 'none' },
    '&.Mui-expanded': {
      margin: '16px 0',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
  };

  const expandIconStyles = {
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 5,
  };

  const handleAccordionChange = (panel) => (_, isExpanded) => {
    setExpandedSection(isExpanded ? panel : null);
  };

  const handleScrollToProduct = () => {
    const productPresentationElement = document.getElementById('product-presentation');
    if (productPresentationElement) {
      productPresentationElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      {sections.map(({ key, title, content }) => (
        <Box key={key} sx={commonBoxStyles}>
          <Accordion
            expanded={expandedSection === key}
            onChange={handleAccordionChange(key)}
            sx={commonAccordionStyles}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={expandIconStyles} />}>
              <Typography>{title}</Typography>
            </AccordionSummary>
            <hr />
            <AccordionDetails>
              <Typography sx={{ whiteSpace: 'pre-line' }}>{content}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          mt: 3,
          mb: 2,
          px: { xs: 2, sm: 0 } // Padding horizontal sur mobile
        }}
      >
        <Button
          onClick={handleScrollToProduct}
          sx={{
            bgcolor: '#9BC953',
            borderRadius: 6,
            marginTop:4,
            color: 'white',
            padding: { xs: "12px 24px", sm: "10px 20px" }, // Plus grand padding sur mobile
            fontSize: { xs: 14, sm: 16 }, // Taille de police adaptative
            textTransform: 'none',
            minWidth: { xs: '200px', sm: 'auto' }, // Largeur minimale sur mobile
            '&:hover': {
              bgcolor: '#7ea941',
            },
          }}
        >
          {t("product_info_dimension")}
        </Button>
      </Box>
    </Box>
  );
});

export default ProductInfo;