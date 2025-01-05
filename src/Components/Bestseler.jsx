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
import { useTranslation } from 'react-i18next';

const Bestseler = () => {
    const theme = useTheme();
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

      
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();
 
  const [selectedShape, setSelectedShape] = useState(null);
  const [thickness, setThickness] = useState("1.5mm");
  const [dimensions, setDimensions] = useState({});

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

  const handleShapeSelection = (index) => {
    setSelectedShape(index);
    // Réinitialiser les dimensions en fonction de la forme
    switch(index) {
      case 0: // Circle
        setDimensions({ diametre: '' });
        break;
      case 1: // Demi-cercle-ovale
      case 2: 
      case 6: // Square
      case 4: // Rect-arrand
        setDimensions({ longueur: '', largeur: '' });
        break;
      case 3: // Octa
        setDimensions({ longueur: '', arc: '' });
        break;
      case 5: // Rect-chanfr
        setDimensions({ 
          longueur: '', 
          largeur: '', 
          arcA: '', 
          arcB: '' 
        });
        break;
      default:
        setDimensions({});
    }
  };

  const handleDimensionChange = (key, value) => {
    setDimensions(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const renderDimensionFields = () => {
    switch(selectedShape) {
      case 0: // Circle
        return (
          <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
            <Grid2 item xs={12}>
              <TextField 
                label="Diamètre (cm)" 
                variant="outlined" 
                size="small" 
                fullWidth 
                value={dimensions.diametre || ''}
                onChange={(e) => handleDimensionChange('diametre', e.target.value)}
              />
            </Grid2>
          </Grid2>
        );
      case 1: // Demi-cercle-ovale
      case 6: // Square
      case 2:
      
        return (
          <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
            <Grid2 item xs={6}>
              <TextField 
                label="Longueur (cm)" 
                variant="outlined" 
                size="small" 
                fullWidth 
                value={dimensions.longueur || ''}
                onChange={(e) => handleDimensionChange('longueur', e.target.value)}
              />
            </Grid2>
            <Grid2 item xs={6}>
              <TextField 
                label="Largeur (cm)" 
                variant="outlined" 
                size="small" 
                fullWidth 
                value={dimensions.largeur || ''}
                onChange={(e) => handleDimensionChange('largeur', e.target.value)}
              />
            </Grid2>
          </Grid2>
        );
      case 4: // Rect-arrand
      return (
        <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
          <Grid2 item xs={6}>
            <TextField 
              label="Longueur (cm)" 
              variant="outlined" 
              size="small" 
              fullWidth 
              value={dimensions.longueur || ''}
              onChange={(e) => handleDimensionChange('longueur', e.target.value)}
            />
          </Grid2>
          <Grid2 item xs={6}>
            <TextField 
              label="Largeur (cm)" 
              variant="outlined" 
              size="small" 
              fullWidth 
              value={dimensions.largeur || ''}
              onChange={(e) => handleDimensionChange('largeur', e.target.value)}
            />
          </Grid2>
          <Grid2 item xs={6}>
            <TextField 
              label="Rayon (cm)" 
              variant="outlined" 
              size="small" 
              fullWidth 
              value={dimensions.largeur || ''}
              onChange={(e) => handleDimensionChange('largeur', e.target.value)}
            />
          </Grid2>
        </Grid2>
      );
      case 3: // Octa
        return (
          <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
            <Grid2 item xs={6}>
              <TextField 
                label="Longueur (cm)" 
                variant="outlined" 
                size="small" 
                fullWidth 
                value={dimensions.longueur || ''}
                onChange={(e) => handleDimensionChange('longueur', e.target.value)}
              />
            </Grid2>
            <Grid2 item xs={6}>
              <TextField 
                label="Arc (cm)" 
                variant="outlined" 
                size="small" 
                fullWidth 
                value={dimensions.arc || ''}
                onChange={(e) => handleDimensionChange('arc', e.target.value)}
              />
            </Grid2>
          </Grid2>
        );
      case 5: // Rect-chanfr
        return (
          <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
            {["Longueur", "Largeur", "Arc A", "Arc B"].map((label, index) => (
              <Grid2 item xs={6} sm={3} key={index}>
                <TextField 
                  label={`${label} (cm)`} 
                  variant="outlined" 
                  size="small" 
                  fullWidth 
                  value={dimensions[label.toLowerCase().replace(' ', '')] || ''}
                  onChange={(e) => handleDimensionChange(label.toLowerCase().replace(' ', ''), e.target.value)}
                />
              </Grid2>
            ))}
          </Grid2>
        );
      default:
        return null;
    }
  };

    return (
        <Box 
          sx={{ 
            padding: isMobile ? 2 : 4, 
            maxWidth: "800px", 
            margin: "0 auto", 
            border: "1px solid #ddd", 
            borderRadius: "8px" 
          }}
        >
          {/* Header */}
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Best-seller
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Livraison gratuite partout au Maroc
          </Typography>
    
          {/* Features */}
          <Box sx={{ marginBottom: 2 }}>
            <FeatureItem>Épaisseur 1.5mm: 215 DH/m², plus frais de découpage</FeatureItem>
            <FeatureItem>Épaisseur 2mm: 254 DH/m², plus frais de découpage</FeatureItem>
            <FeatureItem>Susceptible d'entrer en contact avec des aliments</FeatureItem>
            <FeatureItem>Excellente protection contre les rayures et l'humidité</FeatureItem>
            <FeatureItem>Transparent pour que vous puissiez toujours voir la surface de la table</FeatureItem>
          </Box>
    
          {/* Availability */}
          <Typography variant="body1" sx={{ marginBottom: 1, color: "green" }}>
            En stock
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 3 }}>
            Date de livraison : Entre le 9/12 et le 10/12
          </Typography>
    
          {/* Shape Selection */}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Forme de votre table :
          </Typography>
           
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            gap: isMobile ? 1 : 2
          }}>
            {shapes.map((shapePath, index) => (
              <ImageButton
                key={index}
                variant="outlined"
                onClick={() => handleShapeSelection(index)}
                sx={{
                  border: selectedShape === index 
                    ? '2px solid #9BC953' 
                    : '1px solid #ddd'
                }}
              >
                <img 
                  src={shapePath} 
                  alt={`Shape ${index + 1}`} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain' 
                  }} 
                />
              </ImageButton>
            ))}
          </Box>
    
          {/* Thickness and Dimensions */}
          <Box 
            sx={{
              backgroundColor: 'rgba(104, 114, 115, 0.1)', 
              padding: isMobile ? 2 : '5%',
              margin: '3%',
              borderRadius: 2
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Épaisseur :
            </Typography>
            
            <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
              <Grid2 item xs={6}>
                <Button 
                  fullWidth 
                  variant={thickness === "1.5mm" ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setThickness("1.5mm")}
                >
                  1.5 {t('mm')}
                </Button>
              </Grid2>
              <Grid2 item xs={6}>
                <Button 
                  fullWidth 
                  variant={thickness === "2mm" ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setThickness("2mm")}
                >
                  2 {t('mm')}
                </Button>
              </Grid2>
            </Grid2>
    
            {/* Dimensions */}
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Dimensions de votre table :
            </Typography>
    
            {selectedShape !== null && renderDimensionFields()}
    
            {selectedShape === null && (
              <Typography variant="body2" color="textSecondary">
                Veuillez sélectionner une forme de table
              </Typography>
            )}
          </Box>
    
          {/* Personal Information */}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Vos informations :
          </Typography>
    
          <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
            {["Email", "Nom complet", "Téléphone", "Adresse complète", "Code de réduction"].map((label, index) => (
              <Grid2 item xs={12} sm={6} key={index}>
                <TextField
                  label={label}
                  variant="standard"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
              </Grid2>
            ))}
          </Grid2>
    
          {/* Submit Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#9BC953",
              color: "white",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "12px 20px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#7CA43B",
              },
            }}
          >
            Voir les produits
          </Button>
        </Box>
      );
}

export default Bestseler;