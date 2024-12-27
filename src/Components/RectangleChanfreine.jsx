import React from 'react';
import { useTheme, useMediaQuery } from "@mui/material";

const RectangleChanfreine = ({
  width = 400,
  height = 300,
  color = '#9BC953',
  strokeColor,
  strokeWidth = 2,
  arcA = 40,
  arcB = 40,
  displayValues = false
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const svgSize = isMobile ? 300 : 600;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  
  const measureOffset = isMobile ? 30 : 50;

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
      <defs>
        <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="white" />
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" strokeWidth="1" />
        </pattern>

        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
          markerWidth="6" markerHeight="6"
          orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={color}/>
        </marker>
      </defs>

      {/* Fond avec motif de grille */}
      <rect width={svgSize} height={svgSize} fill="url(#grid-pattern)" />

      {/* Rectangle chanfreiné */}
      <path
        d={`
          M ${centerX - parsedWidth/2 + parsedArcB},${centerY - parsedHeight/2}
          H ${centerX + parsedWidth/2 - parsedArcB}
          L ${centerX + parsedWidth/2},${centerY - parsedHeight/2 + parsedArcA}
          V ${centerY + parsedHeight/2 - parsedArcA}
          L ${centerX + parsedWidth/2 - parsedArcB},${centerY + parsedHeight/2}
          H ${centerX - parsedWidth/2 + parsedArcB}
          L ${centerX - parsedWidth/2},${centerY + parsedHeight/2 - parsedArcA}
          V ${centerY - parsedHeight/2 + parsedArcA}
          Z
        `}
        fill={color}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* Ligne de largeur (bas) */}
      <line
        x1={centerX - parsedWidth/2}
        y1={centerY + parsedHeight/2 + measureOffset}
        x2={centerX + parsedWidth/2}
        y2={centerY + parsedHeight/2 + measureOffset}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#arrow)"
        markerEnd="url(#arrow)"
      />
      <text
        x={centerX}
        y={centerY + parsedHeight/2 + measureOffset + 20}
        textAnchor="middle"
        fill="#666"
      >
        Largeur
        {displayValues && `: ${parsedWidth} cm`}
      </text>

      {/* Ligne de longueur (droite) */}
      <line
        x1={centerX + parsedWidth/2 + measureOffset}
        y1={centerY - parsedHeight/2}
        x2={centerX + parsedWidth/2 + measureOffset}
        y2={centerY + parsedHeight/2}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#arrow)"
        markerEnd="url(#arrow)"
      />
      <text
        x={centerX + parsedWidth/2 + measureOffset + 15}
        y={centerY}
        textAnchor="middle"
        fill="#666"
        transform={`rotate(-90 ${centerX + parsedWidth/2 + measureOffset + 15} ${centerY})`}
      >
        Longueur
        {displayValues && `: ${parsedHeight} cm`}
      </text>

      {/* Ligne arc A (côtés gauche) */}
      <line
        x1={centerX - parsedWidth/2 - measureOffset}
        y1={centerY - parsedHeight/2 + parsedArcA}
        x2={centerX - parsedWidth/2 - measureOffset}
        y2={centerY + parsedHeight/2 - parsedArcA}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#arrow)"
        markerEnd="url(#arrow)"
      />
      <text
        x={centerX - parsedWidth/2 - measureOffset - 15}
        y={centerY}
        textAnchor="middle"
        fill="#666"
        transform={`rotate(-90 ${centerX - parsedWidth/2 - measureOffset - 15} ${centerY})`}
      >
        {`Arc A${displayValues ? `: ${parsedArcA} cm` : ''}`}
      </text>

      {/* Ligne arc B (haut) */}
      <line
        x1={centerX - parsedWidth/2 + parsedArcB}
        y1={centerY - parsedHeight/2 - measureOffset}
        x2={centerX + parsedWidth/2 - parsedArcB}
        y2={centerY - parsedHeight/2 - measureOffset}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#arrow)"
        markerEnd="url(#arrow)"
      />
      <text
        x={centerX}
        y={centerY - parsedHeight/2 - measureOffset - 10}
        textAnchor="middle"
        fill="#666"
      >
        {`Arc B${displayValues ? `: ${parsedArcB} cm` : ''}`}
      </text>

      {displayValues && (
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          fill="#666"
          fontSize="14"
        >
          {`${parsedWidth}x${parsedHeight}`}
        </text>
      )}
    </svg>
  );
};

export default RectangleChanfreine;

