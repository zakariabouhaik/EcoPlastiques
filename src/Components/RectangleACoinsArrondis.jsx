import React from 'react';
import {useTheme, useMediaQuery} from "@mui/material";

const RectangleACoinsArrondis = ({ 
  width = 200,   
  height = 400,  
  radius = 40,
  color, 
  strokeColor,
  strokeWidth = 2 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Limiter les dimensions visuelles tout en gardant les valeurs originales pour l'affichage
    const visualWidth = isMobile ? Math.min(width || 200, 100) : Math.min(width || 200, 200);
    const visualHeight = isMobile ? Math.min(height || 400, 150) : Math.min(height || 400, 300);
    const visualRadius = isMobile ? Math.min(radius || 40, 20) : Math.min(radius || 40, 40);

  const svgSize = isMobile ? 300 : 600;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  
  const measureOffset = 20;

  // Ajout des offsets pour le rayon
  const radiusOffset = {
    arc: {
      x:isMobile? 11:22,  // Ajustement horizontal de l'arc
      y: isMobile? -3:-5  // Ajustement vertical de l'arc
    },
    text: {
      x: isMobile? 15:50,  // Ajustement horizontal du texte
      y: isMobile? -21:-30,  // Ajustement vertical du texte
    }
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize} 
      height={svgSize} 
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      style={{ border: '1px solid #ddd', borderRadius: '8px' }}
    >
      {/* ... defs et pattern restent identiques ... */}
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

      {/* Fond grille */}
      <rect width={svgSize} height={svgSize} fill="url(#grid-pattern)" />

      {/* Mesures de dimensions restent identiques */}
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
        Largeur: {width} cm
      </text>

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
        Longueur: {height} cm
      </text>

      {/* Rectangle à coins arrondis */}
      <path
        d={`
          M ${centerX - visualWidth/2 + visualRadius},${centerY - visualHeight/2}
          H ${centerX + visualWidth/2 - visualRadius}
          Q ${centerX + visualWidth/2},${centerY - visualHeight/2} ${centerX + visualWidth/2},${centerY - visualHeight/2 + visualRadius}
          V ${centerY + visualHeight/2 - visualRadius}
          Q ${centerX + visualWidth/2},${centerY + visualHeight/2} ${centerX + visualWidth/2 - visualRadius},${centerY + visualHeight/2}
          H ${centerX - visualWidth/2 + visualRadius}
          Q ${centerX - visualWidth/2},${centerY + visualHeight/2} ${centerX - visualWidth/2},${centerY + visualHeight/2 - visualRadius}
          V ${centerY - visualHeight/2 + visualRadius}
          Q ${centerX - visualWidth/2},${centerY - visualHeight/2} ${centerX - visualWidth/2 + visualRadius},${centerY - visualHeight/2}
        `}
        fill={color}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* Arc de mesure du rayon avec offsets */}
      <path
        d={`
          M ${centerX + visualWidth/2 - visualRadius + radiusOffset.arc.x},${centerY - visualHeight/2 + radiusOffset.arc.y}
          Q ${centerX + visualWidth/2 - visualRadius/2 + radiusOffset.arc.x},${centerY - visualHeight/2 + radiusOffset.arc.y} 
          ${centerX + visualWidth/2 - visualRadius/2 + radiusOffset.arc.x},${centerY - visualHeight/2 + visualRadius/2 + radiusOffset.arc.y}
        `}
        fill="none"
        stroke="#9BC953"
        strokeWidth="2"
        strokeDasharray="4"
      />
      <text 
        x={centerX + visualWidth/2 - visualRadius/2 + radiusOffset.text.x}
        y={centerY - visualHeight/2 + visualRadius/2 + radiusOffset.text.y}
        textAnchor="middle"
        fontSize="14"
        fill="#666"
      >
        Rayon: {radius} cm
      </text>

    </svg>
  );
};

export default RectangleACoinsArrondis;