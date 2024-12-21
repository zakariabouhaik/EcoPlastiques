import React from 'react';

const RectangleACoinsArrondis = ({ 
  width, 
  height, 
  radius, 
  color , 
  strokeColor  ,
  strokeWidth = 2 
}) => {
  // Calcul des dimensions du SVG
  const svgSize = 600;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2; // Positionné vers le bas

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize} 
      height={svgSize} 
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      style={{ border: '1px solid #ddd', borderRadius: '8px' }}
    >
      {/* Définitions */}
      <defs>
        {/* Motif de grille */}
        <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="white" />
          <path 
            d="M 20 0 L 0 0 0 20" 
            fill="none" 
            stroke="#ddd" 
            strokeWidth="1" 
          />
        </pattern>

        {/* Marqueurs pour les flèches de mesure */}
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

      {/* Fond avec motif de grille */}
      <rect 
        width={svgSize} 
        height={svgSize} 
        fill="url(#grid-pattern)" 
      />

      {/* Rectangle à coins arrondis */}
      <path
        d={`
          M ${centerX - width/2 + radius},${centerY - height/2}
          H ${centerX + width/2 - radius}
          Q ${centerX + width/2},${centerY - height/2} ${centerX + width/2},${centerY - height/2 + radius}
          V ${centerY + height/2 - radius}
          Q ${centerX + width/2},${centerY + height/2} ${centerX + width/2 - radius},${centerY + height/2}
          H ${centerX - width/2 + radius}
          Q ${centerX - width/2},${centerY + height/2} ${centerX - width/2},${centerY + height/2 - radius}
          V ${centerY - height/2 + radius}
          Q ${centerX - width/2},${centerY - height/2} ${centerX - width/2 + radius},${centerY - height/2}
        `}
        fill={color}
        
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* Mesure de la largeur */}
      <line
        x1={centerX +70}
        y1={centerY  -220 }
        x2={centerX + width /1.8}
        y2={centerY  -220}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#leftArrow)"
        markerEnd="url(#rightArrow)"
      />
        <line
        x1={centerX - width / 2}
        y1={centerY + height / 2 + 50}
        x2={centerX + width / 2}
        y2={centerY + height / 2 + 50}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#leftArrow)"
        markerEnd="url(#rightArrow)"
      />
      <text 
        x={centerX} 
        y={centerY + height / 2 + 80} 
        textAnchor="middle" 
        fontSize="12" 
        fill="#666"
      >
        Largeur: {width} cm
      </text>
      <text 
        x={centerX+105} 
        y={centerY / 5} 
        textAnchor="middle" 
        fontSize="12" 
        fill="#666"
      >
        Rayon: {width} cm
      </text>

      {/* Mesure de la hauteur */}
      <line
        x1={centerX - width / 2 - 50}
        y1={centerY - height / 2}
        x2={centerX - width / 2 - 50}
        y2={centerY + height / 2}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#leftArrow)"
        markerEnd="url(#rightArrow)"
      />
      <text
        x={centerX - width / 2 - 80}
        y={centerY}
        textAnchor="middle"
        fontSize="12"
        fill="#666"
        transform={`rotate(-90 ${centerX - width / 2 - 80} ${centerY})`}
      >
        Langeur: {height} cm
      </text>
    </svg>
  );
};

export default RectangleACoinsArrondis;