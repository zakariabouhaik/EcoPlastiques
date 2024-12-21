import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  Grid2,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/material/styles';

const ResponsiveOrderForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedShape, setSelectedShape] = useState(null);
  const [thickness, setThickness] = useState("1.5mm");

  const shapes = [
    "/assets/shapes/circle.png",
    "/assets/shapes/demi-cercle-ovale.png",
    "/assets/shapes/ovale.png",
    "/assets/shapes/octa.png",
    "/assets/shapes/rect-arrand.png",
    "/assets/shapes/rect-chanfr.png",
    "/assets/shapes/square.png",
  ];

  const ImageButton = styled(Button)(({ theme }) => ({
    padding: '8px',
    border: '1px solid #ddd',
    height: isMobile ? '80px' : '100px',
    width: isMobile ? '80px' : '100px',
    margin: '1%',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
      border: '1px solid #9BC953',
    },
  }));

  const FeatureItem = ({ children }) => (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      marginBottom: 1 
    }}>
      <CheckCircleOutlineIcon 
        sx={{ 
          color: '#9BC953', 
          marginRight: 1 
        }} 
      />
      <Typography variant="body2">{children}</Typography>
    </Box>
  );


};

export default ResponsiveOrderForm;