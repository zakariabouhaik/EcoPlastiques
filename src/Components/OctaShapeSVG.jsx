import React from 'react';
import { useTheme, useMediaQuery } from "@mui/material";
import { useTranslation } from 'react-i18next'; 

const OctaShapeSVG = ({ length, arc, color = '#9BC953' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();
  
  // Limiter les dimensions visuelles tout en gardant les valeurs originales pour l'affichage
  const visualLength = isMobile ? Math.min(length || 50, 20) : Math.min(length|| 100, 100);
  const visualArc = isMobile ? Math.min(arc || 50, 20) : Math.min(arc || 50, 50);
  
  const svgSize = isMobile ? 350 : 550;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;

  // Calcul des points de l'octogone basé sur les dimensions visuelles
  const calculateOctagonPoints = () => {
    const octagonRadius = Math.min(visualLength, visualArc) * 3; // Multiplié par 3 pour une meilleure visibilité
    const points = [];
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI / 4) * i - Math.PI / 2;
      const x = centerX + octagonRadius * Math.cos(angle);
      const y = centerY + octagonRadius * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  // Calculer la longueur des lignes de mesure en fonction des dimensions visuelles
  const lengthLineWidth = visualLength * 5;
  const arcLineWidth = visualArc * 2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect width="20" height="20" fill="white" />
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="#ddd"
            strokeWidth="1"
          />
        </pattern>

        <marker
          id="leftArrow"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M6,0 L0,3 L6,6 Z" fill={color} />
        </marker>

        <marker
          id="rightArrow"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill={color} />
        </marker>
      </defs>

      {/* Background with grid pattern */}
      <rect
        width={svgSize}
        height={svgSize}
        fill="url(#grid-pattern)"
      />

      {/* Octagon Shape */}
      <polygon
        points={calculateOctagonPoints()}
        fill={color}
        transform={`rotate(22.5, ${centerX}, ${centerY})`}
        stroke={color}
        strokeWidth="2"
      />

      {/* Length Measurement Line */}
      <line
        x1={centerX - lengthLineWidth/2}
        y1={centerY * 1.85}
        x2={centerX + lengthLineWidth/2}
        y2={centerY * 1.85}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#leftArrow)"
        markerEnd="url(#rightArrow)"
      />

      <line
        x1={centerX - arcLineWidth/2}
        y1={centerY * 1.6}
        x2={centerX + arcLineWidth/2}
        y2={centerY * 1.6}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#leftArrow)"
        markerEnd="url(#rightArrow)"
      />

      {/* Afficher les valeurs réelles entrées par l'utilisateur */}
      <text
        x={centerX}
        y={centerY * 1.97}
        textAnchor="middle"
        fontSize="12"
        fill="#666"
      >
        {t('Longueur')}: {length} {t('cm')}
      </text>

      <text
        x={centerX}
        y={centerY * 1.73}
        textAnchor="middle"
        fontSize="12"
        fill="#666"
      >
        {t('Arc')} {arc}: {t('cm')}
      </text>

    
    </svg>
  );
};

export default OctaShapeSVG;