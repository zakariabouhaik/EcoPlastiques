import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box,Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const sections = [
  {
    key: 'arrivee',
    title: "Après l'arrivée de la commande",
    content: "Texte de la section 'Après l'arrivée de la commande'",
  },
  {
    key: 'odeurs',
    title: "Développement des odeurs",
    content: "Texte de la section 'Développement des odeurs",
  },
  {
    key: 'extérieur',
    title: "Utilisation en extérieur",
    content: "Veuillez noter que la feuille de table n’est pas adaptée à une utilisation permanente en extérieur. L’humidité entre le film de table et la surface ainsi que la lumière directe du soleil +30 °C réduisent la durée de vie du film de table. La stabilisation UV permet de contrer le processus de jaunissement, mais celui-ci ne peut être totalement évité.",
  },
  {
    key: 'plastique',
    title: " Tables en plastique ",
    content: " Le film de table ne doit pas être placé sur des tables en plastique car des parties du film de table migrent dans la surface de la table en raison de la migration du plastifiant et ne peuvent plus être lavées. ",
  },
  {
    key: 'Moulage',
    title: "  Moulage bleu ",
    content: "  Selon l’incidence de la lumière du soleil, une légère lueur bleue peut être perçue. Ce n’est pas le cas avec les luminaires normaux de la maison.  ",
  },
  {
    key: 'Magazines',
    title: "   Magazines ou journaux  ",
    content: "   Nous vous demandons de ne pas placer de magazines ou de journaux sur le film de table pendant les premières semaines, car ils risquent de tacher le film de table et sont difficiles à enlever.\n \n Après environ 2 à 3 semaines, l’effet n’est plus aussi mauvais qu’au début.  ",
  },
  {
    key: 'Données',
    title: "    Données sur le produit  ",
    content: "  Matériau :  PVC souple , \nAptitude au contact alimentaire :oui, \nÉpaisseur du matériau : 1.5 mm et 2 mm, \nTaille max. largeur: 140 cm , \nLongueur max. Longueur: 1000 cm, \nTempérature d’utilisation :  -5°C à +40°C ,\n Aptitude à l’extérieur :  Limitée, \nRésistance aux UV :  non ,\n Conseils pour l’entretien :  Nettoyer avec de l’eau savonneuse, ne pas utiliser de produits abrasifs ou de blanchiment.   ",
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

const ProductInfo = () => {
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
          Entrez les dimensions
        </Button>

    </div>
  );
};

export default ProductInfo;
