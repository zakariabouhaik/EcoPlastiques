import React from 'react';
import {useTheme, useMediaQuery} from "@mui/material";
import {useTranslation} from 'react-i18next';

const RectangleACoinCarres = ({ 
  width = 200,   // valeur par défaut
  height = 400,  // valeur par défaut
  color = '#9BC953',
  strokeColor,
  strokeWidth = 2 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  // Limiter les dimensions visuelles tout en gardant les valeurs originales pour l'affichage
  const visualWidth = isMobile ? Math.min(width || 200, 100) : Math.min(width || 200, 200);
  const visualHeight = isMobile ? Math.min(height || 400, 150) : Math.min(height || 400, 300);

  const svgSize = isMobile ? 300 : 600;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  
  const measureOffset = 20;

  // Fonction pour vérifier si une valeur a été saisie par l'utilisateur
  const isUserValue = (value) => {
    return value !== undefined && value !== null && value !== '' && value !== 0;
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize} 
      height={svgSize} 
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      style={{ border: '1px solid #ddd', borderRadius: '8px' }}
    >
      <defs>
        <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="white" />
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" strokeWidth="1" />
        </pattern>

        <marker id="leftArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M6,0 L0,3 L6,6 Z" fill={color} />
        </marker>
        <marker id="rightArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>

      <rect width={svgSize} height={svgSize} fill="url(#grid-pattern)" />

      {/* Rectangle à coins carrés (toujours affiché avec les dimensions visuelles) */}
      <path
        d={`
          M ${centerX - visualWidth/2},${centerY - visualHeight/2}
          H ${centerX + visualWidth/2}
          V ${centerY + visualHeight/2}
          H ${centerX - visualWidth/2}
          Z
        `}
        fill={color}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* N'afficher les mesures que si les valeurs ont été saisies */}
    
        <>
          <line
            x1={centerX - visualWidth/2}
            y1={centerY + visualHeight/2 + measureOffset}
            x2={centerX + visualWidth/2}
            y2={centerY + visualHeight/2 + measureOffset}
            stroke={color}
            strokeWidth="2"
            markerStart="url(#leftArrow)"
            markerEnd="url(#rightArrow)"
          />
          <text 
            x={centerX} 
            y={centerY + visualHeight/2 + measureOffset + 20} 
            textAnchor="middle" 
            fontSize="14" 
            fill="#666"
          >
            {t('Largeur')}: {width} {t('cm')}
          </text>
        </>
     

       
        <>
          <line
            x1={centerX - visualWidth/2 - measureOffset}
            y1={centerY - visualHeight/2}
            x2={centerX - visualWidth/2 - measureOffset}
            y2={centerY + visualHeight/2}
            stroke={color}
            strokeWidth="2"
            markerStart="url(#leftArrow)"
            markerEnd="url(#rightArrow)"
          />
          <text
            x={centerX - visualWidth/2 - measureOffset - 10}
            y={centerY}
            textAnchor="middle"
            fontSize="14"
            fill="#666"
            transform={`rotate(-90 ${centerX - visualWidth/2 - measureOffset - 10} ${centerY})`}
          >
            {t('Longueur')}: {height} {t('cm')}
          </text>
        </>
      
    </svg>
  );
};

export default RectangleACoinCarres;