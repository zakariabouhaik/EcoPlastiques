import React from 'react';

const RectangleChanfreine = ({
  width = 400,
  height = 300,
  color = '#9BC953',
  strokeColor,
  strokeWidth = 2,
  arcA = 40,
  arcB = 40
}) => {
  // Calcul des dimensions du SVG
  const svgSize = 600;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;

  // Convertir les valeurs en nombres, utiliser 0 si pas un nombre valide
  const parsedWidth = Number(width) || 400;
  const parsedHeight = Number(height) || 300;
  const parsedArcA = Number(arcA) || 40;
  const parsedArcB = Number(arcB) || 40;

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
      </defs>

      {/* Fond avec motif de grille */}
      <rect
        width={svgSize}
        height={svgSize}
        fill="url(#grid-pattern)"
      />

      {/* Rectangle à coins chanfreinés avec deux arcs différents */}
      <path
        d={`
          M ${centerX - parsedWidth/2 + parsedArcA},${centerY - parsedHeight/2}
          H ${centerX + parsedWidth/2 - parsedArcB}
          L ${centerX + parsedWidth/2},${centerY - parsedHeight/2 + parsedArcB}
          V ${centerY + parsedHeight/2 - parsedArcA}
          L ${centerX + parsedWidth/2 - parsedArcA},${centerY + parsedHeight/2}
          H ${centerX - parsedWidth/2 + parsedArcB}
          L ${centerX - parsedWidth/2},${centerY + parsedHeight/2 - parsedArcB}
          V ${centerY - parsedHeight/2 + parsedArcA}
          Z
        `}
        fill={color}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default RectangleChanfreine;