import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProductInfo = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedSection(isExpanded ? panel : null);
  };

  return (
    <div>
      <Box
        sx={{
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          borderRadius: 1,
          marginBottom: 2,
        }}
      >
        <Accordion
          expanded={expandedSection === 'arrivee'}
          onChange={handleAccordionChange('arrivee')}
          sx={{
            boxShadow: 'none',
            '&:before': {
              display: 'none',
            },
            '&.Mui-expanded': {
              margin: '16px 0',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{backgroundColor:'green',color:'white', borderRadius:5}} />}>
            <Typography>Après l'arrivée de la commande</Typography>
          </AccordionSummary>
          <hr/>

          <AccordionDetails>
            <Typography>Texte de la section "Après l'arrivée de la commande"</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box
        sx={{
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          borderRadius: 1,
          marginBottom: 2,
        }}
      >
        <Accordion
          expanded={expandedSection === 'odeurs'}
          onChange={handleAccordionChange('odeurs')}
          sx={{
            boxShadow: 'none',
            '&:before': {
              display: 'none',
            },
            '&.Mui-expanded': {
              margin: '16px 0',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{backgroundColor:'green',color:'white', borderRadius:5}}/>}>
            <Typography>Développement des odeurs</Typography>
          </AccordionSummary>
          <hr/>

          <AccordionDetails>
            <Typography>Texte de la section "Développement des odeurs"</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Reste du code des autres sections */}
    </div>
  );
};

export default ProductInfo;