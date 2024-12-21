import React from 'react';

const OvaldynamicSvg = ({
  width = 80,
  height = 40,
  color = '#9BC953',
  showPlaceholder = true
}) => {
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
        borderRadius: '8px'
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

        {/* Up Arrow Marker */}
        <marker
          id="upArrow"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <path d="M0,10 L5,0 L10,10 Z" fill='#9BC953' />
        </marker>

        {/* Down Arrow Marker */}
        <marker
          id="downArrow"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <path d="M0,0 L5,10 L10,0 Z" fill="#9BC953" />
        </marker>

        {/* Existing left and right arrow markers */}
        <marker
          id="leftArrow"
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M6,0 L0,3 L6,6 Z" fill='#9BC953' />
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

      {/* Arrière-plan avec motif de carreaux */}
      <rect
        width={svgSize}
        height={svgSize}
        fill="url(#grid-pattern)"
      />

      {/* Ovale complet */}
      <ellipse
        cx={centerX}
        cy={centerY}
        rx={width * 1.4 / 2}
        ry={height * 7.5 / 2}
        fill={color}
      />

      {/* Ligne horizontale */}
      <line
        x1={centerX - 100}
        y1={centerY * 1.8}
        x2={centerX + 100}
        y2={centerY * 1.8}
        stroke="#9BC953"
        strokeWidth="2"
        markerStart="url(#leftArrow)"
        markerEnd="url(#rightArrow)"
      />

      {/* Ligne verticale */}
      <line
        x1={centerX - 120}
        y1={centerY - 100}
        x2={centerX - 120}
        y2={centerY + 100}
        stroke="#9BC953"
        strokeWidth="2"
        markerStart="url(#upArrow)"
        markerEnd="url(#downArrow)"
      />

      {/* Texte pour la largeur */}
      <text
        x="50%"
        y="95%"
        textAnchor="middle"
        fontSize="12"
        fill="#666"
      >
        {(width === null || width === undefined || width === 80) 
          ? "Largeur (cm)" 
          : `${width} cm`}
      </text>

      {/* Texte pour la longueur */}
      <text
        x="12%"
        y="53%"
        textAnchor="middle"
        fontSize="12"
        fill="#666"
        transform={`rotate(-90 ${centerX - 120} ${centerY})`}
      >
        {(height === null || height === undefined || height === 40) 
          ? "Longueur (cm)" 
          : `${height} cm`}
      </text>
    </svg>
  );
};

export default OvaldynamicSvg;