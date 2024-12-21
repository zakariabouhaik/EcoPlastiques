import React, { useState,useEffect } from "react";
import { Typography, Grid2, Box,useTheme, useMediaQuery,TextField,Button } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/material/styles';
import AssistanceComponent from "./AssistanceComponent";
import DynamicCircleSVG from "./DynamicCircleSVG"; 
import OctaShapeSVG from "./OctaShapeSVG";
import OvaldynamicSvg from "./OvaldynamicSvg";
import RectangleACoinsArrondis from "./RectangleACoinsArrondis";
import RectangleACoinCarres from "./RectangleACoinCarres";
import RectangleChanfreine from "./RectangleChanfreine";
import OvaleSVG from "./OvaleSVG";





const ProductPresentation = ({ title, text, pictures }) => {

  const theme = useTheme();
  const [showMessage, setShowMessage] = useState(true);
  const [prixTotal, setPrixTotal] = useState(0);
  const [deliveryDates, setDeliveryDates] = useState({ startDate: "", endDate: "" });

  useEffect(() => {
    const today = new Date();
    const startDate = new Date(today);
    const endDate = new Date(today);

    startDate.setDate(today.getDate() + 5);
    endDate.setDate(today.getDate() + 6);

    const formatDate = (date) => {
      const options = { day: "2-digit", month: "2-digit" };
      return date.toLocaleDateString("fr-FR", options);
    };

    setDeliveryDates({
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    });
  }, []);


   



  
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
 
  const [selectedShape, setSelectedShape] = useState(null);
  const [thickness, setThickness] = useState("1.5mm");
  const [dimensions, setDimensions] = useState({});

  const shapes = [
    "/assets/shapes/circle.png",
   // "/assets/shapes/demi-cercle-ovale.png",
    //"/assets/shapes/ovale.png",
    "/assets/shapes/octa.png",
    "/assets/shapes/rect-arrand.png",
    "/assets/shapes/rect-chanfr.png",
    "/assets/shapes/square.png",
  ];

  const [mainContent, setMainContent] = useState(pictures[0]);
  const [isDynamicSVG, setIsDynamicSVG] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);


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
      setIsDynamicSVG(true);
      setMainContent(null);  
        break;
      case 1: // Demi-cercle-ovale
      setDimensions({ width: '', height: '' });
      setIsDynamicSVG(true);
      setMainContent(null);  
        break;
      case 2: 
      case 6: // Square
      case 4: // Rect-arrand
        setDimensions({ longueur: '', largeur: '' });
        break;
      case 3: // Octa
        setDimensions({ longueur: '', arc: '' });
        setIsDynamicSVG(true);
        setMainContent(null);  
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
        setIsDynamicSVG(false);
        setMainContent(pictures[0]); 
    }
  };

  const handleDimensionChange = (field, value) => {
    const newValue = value === "" ? "" : Number(value);
    setDimensions((prev) => ({ ...prev, [field]: newValue }));

    // Vérifiez si les deux champs sont remplis
    const longueur = field === "longueur" ? newValue : dimensions.longueur;
    const largeur = field === "largeur" ? newValue : dimensions.largeur;

    if (longueur && largeur) {
      setShowMessage(false); // Cachez le message
      setPrixTotal(longueur * largeur * 10); // Exemple de calcul de prix
    } else {
      setShowMessage(true); // Affichez le message si un champ est vide
      setPrixTotal(0); // Réinitialisez le prix
    }
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
              value={dimensions.arc || ''}
              onChange={(e) => handleDimensionChange('arc', e.target.value)}
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


  const [mainPicture, setMainPicture] = useState(pictures[0]);

  const handlePictureClick = (picture) => {
    setMainPicture(picture);
  };

  return (
    <div style={{ flex: 1,display: 'flex', gap: '20px', padding: '20px',  }}>
       <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
      
      }}>

    
    
    <Box sx={{ padding: 2 ,justifyItems:"center"}}>
      {/* Titre et texte */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h4" sx={{ marginBottom: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1">{text}</Typography>
      </Box>

      {/* Image principale */}
      <Box sx={{ textAlign: "center", marginBottom: 2 }}>
      {isDynamicSVG ? (
        selectedShape === 0 ? (
        <DynamicCircleSVG
            diameter={dimensions.diametre || 30}
            color="#9BC953"
           
          />
         ): selectedShape === 2 ? (  
          <OvaldynamicSvg
      width={dimensions.longueur || 80}
      height={dimensions.largeur || 40}
 
      color="#9BC953"
    />
  ) : selectedShape === 3 ? (    <OctaShapeSVG 
    length={dimensions.longueur || 300} 
    arc={dimensions.arc || 200} 
    color="#9BC953" 
  />):selectedShape === 4 ? ( <RectangleACoinsArrondis 
    height ={dimensions.longueur || 400 } 
    width={dimensions.largeur || 400} 
  radius={dimensions.arc ||40 } 
  color="#9BC953" 
/>):selectedShape === 6 ? ( <RectangleACoinCarres 
  width={dimensions.longueur || 240} 
  height={dimensions.largeur || 400} 
  color="#9BC953" 
/>):
selectedShape === 5 ? ( <RectangleChanfreine 
  width={dimensions.longueur || 240} 
  height={dimensions.largeur || 400} 
  arcA={dimensions.arca || 20}
  arcB={dimensions.arcb || 20}
  color="#9BC953" 
/>):
selectedShape === 1 ? ( <OvaleSVG 
  width={dimensions.longueur || 200} 
  height={dimensions.largeur || 300} 
  color="#9BC953" 
/>):
  null
) : (
        <Box
          component="img"
          src={mainPicture}
          alt="Main Product"
          sx={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        />
         )}
      </Box>

      {/* Galerie d'images */}
      <Grid2 container spacing={1} justifyContent="center">
        {pictures.map((picture, index) => (
          <Grid2 item key={index} xs={3} sm={2} md={1}>
            <Box
              component="img"
              src={picture}
              alt={`Thumbnail ${index}`}
              onClick={() => handlePictureClick(picture)}
              sx={{
                width: "100%",
                maxWidth: "70px",
                height: "auto",
                cursor: "pointer",
                border: picture === mainPicture ? "2px solid #007BFF" : "1px solid #ddd",
                borderRadius: "4px",
                padding: "2px",
              }}
            />
          </Grid2>
        ))}
      </Grid2>
      
    </Box>
    </Box>
    <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column' ,
       
      }}>
    <Box 
          sx={{ 
            padding: isMobile ? 2 : 4, 
            maxWidth: "800px", 
            margin: "0 auto", 
            border: "1px solid #ddd", 
            borderRadius: "8px" ,
              
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
        Date de livraison : Entre le {deliveryDates.startDate} et le {deliveryDates.endDate}
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
                  1.5 mm
                </Button>
              </Grid2>
              <Grid2 item xs={6}>
                <Button 
                  fullWidth 
                  variant={thickness === "2mm" ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => setThickness("2mm")}
                >
                  2 mm
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
            {showMessage && (
          <Typography variant="body1" color="textSecondary">
            Merci d'indiquer les mesures de votre table pour calculer le prix total.
          </Typography>
        )}

        
        {!showMessage && (
        <Box sx={{ marginTop: 3, textAlign: "center" }}>
          <Typography variant="h6" color="black">
            Prix total : {prixTotal} DHs
          </Typography>
          <Button variant="contained" color="black" sx={{ marginTop: 2 }}>
            Commander
          </Button>
        </Box>
      )}
        
          </Box>
          
          


          {/* Personal Information */}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Vos informations :
          </Typography>
    
          <Grid2 container direction="column" spacing={2} sx={{ marginBottom: 3 }}>
  {["Email:", "Nom complet:", "Téléphone:", "Adresse complète:", "Code de réduction:"].map((label, index) => (
    <Grid2 item xs={12} key={index}>
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
           Commander Maintenant
          </Button>
        </Box>
        <div style={{marginTop:'2%'}}>
                    <AssistanceComponent/>
                   
        </div>
        </Box>
    
      
   
    </div>
  );
};

export default ProductPresentation;
