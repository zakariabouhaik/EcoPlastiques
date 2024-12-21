import React from 'react';

const DynamicCircleSVG = ({
  width = 20,
  height = 20,
  diameter = 30, // Default value
  color = '#00BFFF',
  showPlaceholder = true,
}) => {
  const radius = diameter * 10 / 2;
  const svgSize = 600;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Définition du motif de carreaux */}
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
      </defs>

      {/* Arrière-plan avec motif de carreaux */}
      <rect width={svgSize} height={svgSize} fill="url(#grid-pattern)" />

      {/* Cercle */}
      <circle cx={centerX} cy={centerY} r={radius} fill={color} />

      {/* Ligne du diamètre */}
      <line
        x1={centerX - width * 5}
        y1={centerY * 1.8}
        x2={centerX + width * 5}
        y2={centerY * 1.8}
        stroke="#9BC953"
        strokeWidth="2"
        markerStart="url(#leftArrow)"
        markerEnd="url(#rightArrow)"
      />

      {/* Texte pour le diamètre */}
      <text
        x='50%'
        y='95%'
        textAnchor="middle"
        fontSize="12"
        fill="#666"
      >
        {(diameter === null || diameter === undefined || diameter === 30) 
          ? "Diamètre (cm)" 
          : `${diameter} cm`}
      </text>

      {/* Définitions pour les flèches */}
      <defs>
        <marker
          id="leftArrow"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M6,0 L0,3 L6,6 Z" fill="#9BC953" />
        </marker>
        <marker
          id="rightArrow"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="#9BC953" />
        </marker>
      </defs>
    </svg>
  );
};

export default DynamicCircleSVG;