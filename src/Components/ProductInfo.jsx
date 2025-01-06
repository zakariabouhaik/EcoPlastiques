import React, { useState,forwardRef} from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

const ProductInfo =forwardRef( () => {
  const { t } = useTranslation();

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

  
    const [expandedSection, setExpandedSection] = useState(null);
  
    const handleAccordionChange = (panel) => (_, isExpanded) => {
      setExpandedSection(isExpanded ? panel : null);
    };

  return (
    <div>
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

      <Button
        variant="contained"

        onClick={() => {
    const productPresentationElement = document.getElementById('product-presentation');
    if (productPresentationElement) {
      productPresentationElement.scrollIntoView({ behavior: 'smooth' });
    }
  }}

        sx={{
          backgroundColor: "#9BC953",
          color: "white",
          fontWeight: "bold",
          borderRadius: "20px",
          padding: "12px 20px",
          textTransform: "none",
          whiteSpace: 'nowrap', // Force le texte sur une seule ligne
      minWidth: 'fit-content', // Assure que le bouton s'adapte au contenu
      display: 'inline-block',
          margin: '1%',
          "&:hover": {
            backgroundColor: "#7CA43B",
          },
        }}
      >
        {t("product_info_dimension")}
      </Button>
    </div>
  );
});
export default ProductInfo;
