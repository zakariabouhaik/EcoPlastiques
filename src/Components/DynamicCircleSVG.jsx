import React from 'react';
import { useTheme, useMediaQuery } from "@mui/material";
import { useTranslation } from 'react-i18next';

const DynamicCircleSVG = ({ diameter = 30, color = '#9BC953' }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Calculate SVG viewport size based on screen
  const svgSize = isMobile ? 350 : 550;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;

  // Limit visual diameter for mobile while keeping original value for display
  const visualDiameter = isMobile ? Math.min(diameter||10 , 20) : Math.min(diameter || 20, 45);
  
  // Convert diameter from cm to pixels (1cm = 10px for better visibility)
  const radius = (visualDiameter * 10) / 2;
  
  // Calculate maximum allowed radius while leaving some padding
  const padding = 20;
  const maxRadius = (svgSize / 2) - padding;
  
  // Scale the circle if it's too large
  const scale = radius > maxRadius ? maxRadius / radius : 1;
  const adjustedRadius = radius * scale;

  // Scale the measurement line proportionally to the visual diameter
  const lineWidth = Math.min(visualDiameter * 5, svgSize / 2 - padding);

  const { t } = useTranslation();

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
      {/* Grid pattern definition */}
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

      {/* Background grid */}
      <rect width={svgSize} height={svgSize} fill="url(#grid-pattern)" />

      {/* Dynamic circle */}
      <circle 
        cx={centerX}
        cy={centerY-40}
        r={adjustedRadius}
        fill={color}
        style={{ transition: 'r 0.3s ease' }}
      />

  {  isMobile ? 
      <line
        x1={centerX - lineWidth}
        y1={centerY * 1.70}
        x2={centerX + lineWidth}
        y2={centerY * 1.70}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#leftArrow)"
        markerEnd="url(#rightArrow)"
      /> 
      : 
      <line
        x1={centerX - lineWidth}
        y1={centerY * 1.8}
        x2={centerX + lineWidth}
        y2={centerY * 1.8}
        stroke={color}
        strokeWidth="2"
        markerStart="url(#leftArrow)"
        markerEnd="url(#rightArrow)"
      /> 
  }
      {/* Measurement text - always shows original diameter */}
      <text
        x="50%"
        y="95%"
        textAnchor="middle"
        fontSize="16"
        fill="#666"
      >
        {diameter ?  `${t('Diametre')}: ${diameter} ${t('cm')}` : `${t('Diametre')}: ${t('cm')}`}
      </text>

      {/* Display warning if size is limited */}
      
      {/* Arrow markers */}
      <defs>
        <marker
          id="leftArrow"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <path d="M10,0 L0,5 L10,10 Z" fill={color} />
        </marker>
        <marker
          id="rightArrow"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill={color} />
        </marker>
      </defs>
    </svg>
  );
};

export default DynamicCircleSVG;