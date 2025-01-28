import React from 'react';
import { useTheme, useMediaQuery } from "@mui/material";
import { useTranslation } from 'react-i18next'; 

const RectangleChanfreine = ({
  width,
  height,
  color = '#9BC953',
  strokeColor,
  strokeWidth = 2,
  arcA,
  arcB,
  displayValues = false
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const svgSize = isMobile ? 350 : 550;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;
  
  const measureOffset = isMobile ? 30 : 50;

  // Conversion des dimensions pour l'affichage SVG
  const scale = 0.8;  
  const visualWidth = Math.min((Number(width) || isMobile? 120: 240) * scale, 400);
  const visualHeight = Math.min((Number(height) ||  isMobile? 200 :400) * scale, 240);
  const visualArcA = Math.min((Number(arcA)|| isMobile? 20:  40) * scale, 40);
  const visualArcB = Math.min((Number(arcB)|| isMobile? 20:  40) * scale, 40);

  const { t } = useTranslation(); 

  // Debug pour vérifier les valeurs reçues
  console.log('RectangleChanfreine props:', { width, height, arcA, arcB });
  console.log('Visual dimensions:', { visualWidth, visualHeight, visualArcA, visualArcB });

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

      {/* Grid background */}
      <rect width={svgSize} height={svgSize} fill="url(#grid-pattern)" />

      {/* Chamfered rectangle */}
      <path
        d={`
          M ${centerX - visualWidth/2 + visualArcB},${centerY - visualHeight/2}
          H ${centerX + visualWidth/2 - visualArcB}
          L ${centerX + visualWidth/2},${centerY - visualHeight/2 + visualArcA}
          V ${centerY + visualHeight/2 - visualArcA}
          L ${centerX + visualWidth/2 - visualArcB},${centerY + visualHeight/2}
          H ${centerX - visualWidth/2 + visualArcB}
          L ${centerX - visualWidth/2},${centerY + visualHeight/2 - visualArcA}
          V ${centerY - visualHeight/2 + visualArcA}
          Z
        `}
        fill={color}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* Width measurement */}
      <line
        x1={centerX - visualWidth/2}
        y1={centerY + visualHeight/2 + measureOffset}
        x2={centerX + visualWidth/2}
        y2={centerY + visualHeight/2 + measureOffset}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#arrow)"
        markerEnd="url(#arrow)"
      />
      <text
        x={centerX}
        y={centerY + visualHeight/2 + measureOffset + 20}
        textAnchor="middle"
        fill="#666"
      >
        {t("Largeur")}: {width} {t("cm")}
      </text>

      {/* Height measurement */}
      <line
        x1={centerX + visualWidth/2 + measureOffset}
        y1={centerY - visualHeight/2}
        x2={centerX + visualWidth/2 + measureOffset}
        y2={centerY + visualHeight/2}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#arrow)"
        markerEnd="url(#arrow)"
      />
      <text
        x={centerX + visualWidth/2 + measureOffset + 15}
        y={centerY}
        textAnchor="middle"
        fill="#666"
        transform={`rotate(-90 ${centerX + visualWidth/2 + measureOffset + 15} ${centerY})`}
      >
        {t("Longueur")}: {height} {t("cm")}
      </text>

      {/* Arc A measurement */}
      <line
        x1={centerX - visualWidth/2 - measureOffset}
        y1={centerY - visualHeight/2 + visualArcA}
        x2={centerX - visualWidth/2 - measureOffset}
        y2={centerY + visualHeight/2 - visualArcA}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#arrow)"
        markerEnd="url(#arrow)"
      />
      <text
        x={centerX - visualWidth/2 - measureOffset - 15}
        y={centerY}
        textAnchor="middle"
        fill="#666"
        transform={`rotate(-90 ${centerX - visualWidth/2 - measureOffset - 15} ${centerY})`}
      >
        {t("ArcA")}: {arcA} {t("cm")}
      </text>

      {/* Arc B measurement */}
      <line
        x1={centerX - visualWidth/2 + visualArcB}
        y1={centerY - visualHeight/2 - measureOffset}
        x2={centerX + visualWidth/2 - visualArcB}
        y2={centerY - visualHeight/2 - measureOffset}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#arrow)"
        markerEnd="url(#arrow)"
      />
      <text
        x={centerX}
        y={centerY - visualHeight/2 - measureOffset - 10}
        textAnchor="middle"
        fill="#666"
      >
        {t("ArcB")}: {arcB} {t("cm")}
      </text>
    </svg>
  );
};

export default RectangleChanfreine;