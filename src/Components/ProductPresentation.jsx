import React, { useState,useEffect } from "react";
import { Typography, Grid2, Box,useTheme, useMediaQuery,TextField,Button } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/material/styles';
import AssistanceComponent from "./AssistanceComponent";
import DynamicCircleSVG from "./DynamicCircleSVG"; 
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OctaShapeSVG from "./OctaShapeSVG";
import OvaldynamicSvg from "./OvaldynamicSvg";
import RectangleACoinsArrondis from "./RectangleACoinsArrondis";
import RectangleACoinCarres from "./RectangleACoinCarres";
import RectangleChanfreine from "./RectangleChanfreine";
import OvaleSVG from "./OvaleSVG";





const ProductPresentation = ({ title, text, pictures,pictures09 ,onImageClick  }) => {

  const theme = useTheme();
  const [showMessage, setShowMessage] = useState(true);
  const [tableCovers, setTableCovers] = useState([]);
  const [prixTotal, setPrixTotal] = useState(0);
  const [deliveryDates, setDeliveryDates] = useState({ startDate: "", endDate: "" });
  const [selectedCovers, setSelectedCovers] = useState([]);
  const [dimensionErrors, setDimensionErrors] = useState({
    longueur: '',
    arc: ''
  });
  const [rectangleErrors, setRectangleErrors] = useState({
    longueur: '',
    largeur: ''
  });
 
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    address: "",
    
  });

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddCover = () => {
    const newCover = {
      type: selectedShape === 4 ? 'Rectangle' : 'Autre forme',
      thickness: thickness,
      dimensions: {
        longueur: dimensions.longueur,
        largeur: dimensions.largeur
      },
      price: prixTotal
    };
    setSelectedCovers([...selectedCovers, newCover]);
    // Réinitialiser les dimensions après l'ajout
    setDimensions({ longueur: '', largeur: '' });
    setShowMessage(true);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData object with all form fields
    const formDataToSubmit = new FormData();
    
    // Add form fields
    formDataToSubmit.append("Email", formData.email);
    formDataToSubmit.append("Nom_complet", formData.fullName);
    formDataToSubmit.append("Telephone", formData.phone);
    formDataToSubmit.append("Adresse", formData.address);
    
    const orderDetails = tableCovers.map(cover => {
      let coverDescription = '';
      switch(cover.type) {
        case 'Cercle':
          coverDescription = `${cover.type} (${cover.thickness}): Diamètre = ${cover.diametre}cm`;
          break;
        case 'Octogone':
          coverDescription = `${cover.type} (${cover.thickness}): longueur = ${cover.longueur}cm | arc = ${cover.arc}cm`;
          break;
        case 'Rectangle à coins arrondis':
          coverDescription = `${cover.type} (${cover.thickness}): longueur = ${cover.longueur}cm | largeur = ${cover.largeur}cm | rayon = ${cover.rayon}cm`;
          break;
        case 'Rectangle chanfreiné':
          coverDescription = `${cover.type} (${cover.thickness}): longueur = ${cover.longueur}cm | largeur = ${cover.largeur}cm | arcA = ${cover.arcA}cm | arcB = ${cover.arcB}cm`;
          break;
        case 'Rectangle':
          coverDescription = `${cover.type} (${cover.thickness}): longueur = ${cover.longueur}cm | largeur = ${cover.largeur}cm`;
          break;
      }
      return coverDescription;
    }).join('\n');

    // Add order details and price to form data
    formDataToSubmit.append("Commande", orderDetails);
    formDataToSubmit.append("Prix_Total", `${prixTotal} DHs`);
    

    // Submit form
    fetch(
      "https://script.google.com/macros/s/AKfycbwOeGJm_OIRsbFkXAQ9JST5nyO_xz06mV39ttRfeBy_h8LoVxYUAdvMyRy-4BCrAMUA/exec",
      {
        method: "POST",
        body: formDataToSubmit
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Form submitted successfully:", data);
        // Reset form after successful submission
        setFormData({
          email: "",
          fullName: "",
          phone: "",
          address: "",
          promoCode: ""
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };





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
    // "/assets/shapes/ovale.png",
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
    height: '80px',
    width: '80px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
      border: '1px solid #9BC953',
    },
  }));

  const handleShapeSelection = (index) => {
    setSelectedShape(index);
    setDimensionErrors({ longueur: '', arc: '' });
    setRectangleErrors({ longueur: '', largeur: '' });
    setShowMessage(true);
    setIsDynamicSVG([0, 1,2,3,4].includes(index));
    
    // Réinitialiser complètement les dimensions pour chaque nouvelle forme
    switch(index) {
      case 0: // Circle
        setDimensions({ diametre: '' });
        break;
      case 1: // Octogone
        setDimensions({ 
          longueur: '',
          arc: ''
        });
        break;
      case 2: // Rect-arrand
        setDimensions({ 
          longueur: '',
          largeur: '',
          arc: ''
        });
        break;
      case 3: // Rect-chanfr
        setDimensions({ 
          longueur: '',
          largeur: '',
          arcA: '',
          arcB: ''
        });
        break;
      case 4: // Square
        setDimensions({ 
          longueur: '',
          largeur: ''
        });
        break;
    }
};

  const handleDimensionChange = (field, value) => {
    const newValue = value === "" ? "" : Number(value);
    setDimensions((prev) => ({ ...prev, [field]: newValue }));

    switch(selectedShape) {
      case 0: // Circle
        const diametre = field === "diametre" ? newValue : dimensions.diametre;
        if (diametre) {
          const area = Math.PI * Math.pow(diametre/2, 2) * 0.0001; // en m²
          setShowMessage(false);
          setPrixTotal(area * 215 + 50);
        } else {
          setShowMessage(true);
          setPrixTotal(0);
        }
        break;

      case 1: // Octogone
        const longueurOcta = field === "longueur" ? newValue : dimensions.longueur;
        const arcOcta = field === "arc" ? newValue : dimensions.arc;
        if (longueurOcta && arcOcta) {
          const areaOcta = longueurOcta * longueurOcta * 0.0001; // Simplification pour l'exemple
          setShowMessage(false);
          setPrixTotal(areaOcta * 215 + 50);
        } else {
          setShowMessage(true);
          setPrixTotal(0);
        }
        break;

      case 2: // Rectangle coins arrondis
      case 3: // Rectangle chanfreiné
      case 4: // Rectangle coins carrés
      default:
        const longueur = field === "longueur" ? newValue : dimensions.longueur;
        const largeur = field === "largeur" ? newValue : dimensions.largeur;
        if (longueur && largeur) {
          setShowMessage(false);
          setPrixTotal(longueur * 0.01 * largeur * 0.01 * 215 + 50);
        } else {
          setShowMessage(true);
          setPrixTotal(0);
        }
        break;
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
        
        case 4: // Rectangle à coins carrés
        return (
          <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
            <Grid2 item xs={6}>
              <TextField 
                label="Longueur (cm)" 
                variant="outlined" 
                size="small" 
                fullWidth 
                value={dimensions.longueur || ''}
                onChange={(e) => {
                  const value = e.target.value;
                  handleDimensionChange('longueur', value);
                  
                  if (Number(value) > 1000) {
                    setRectangleErrors(prev => ({
                      ...prev,
                      longueur: 'La longueur ne peut pas dépasser 1000 cm'
                    }));
                  } else {
                    setRectangleErrors(prev => ({
                      ...prev,
                      longueur: ''
                    }));
                  }
                }}
                error={!!rectangleErrors.longueur}
                helperText={rectangleErrors.longueur}
              />
            </Grid2>
            <Grid2 item xs={6}>
              <TextField 
                label="Largeur (cm)" 
                variant="outlined" 
                size="small" 
                fullWidth 
                value={dimensions.largeur || ''}
                onChange={(e) => {
                  const value = e.target.value;
                  handleDimensionChange('largeur', value);
                  
                  if (Number(value) > 144) {
                    setRectangleErrors(prev => ({
                      ...prev,
                      largeur: 'La largeur ne peut pas dépasser 140 cm'
                    }));
                  } else {
                    setRectangleErrors(prev => ({
                      ...prev,
                      largeur: ''
                    }));
                  }
                }}
                error={!!rectangleErrors.largeur}
                helperText={rectangleErrors.largeur}
              />
            </Grid2>
          </Grid2>
        );
        
       
     // case 2: // Square
      case 6:
      
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
      case 2: // Rect-arrand
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
      case 1: // Octa
  return (
    <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
      <Grid2 item xs={6}>
        <TextField 
          label="Longueur (cm)" 
          variant="outlined" 
          size="small" 
          fullWidth 
          value={dimensions.longueur || ''}
          onChange={(e) => {
            const value = e.target.value;
            handleDimensionChange('longueur', value);
            
            // Validation de la longueur
            if (Number(value) > 140) {
              setDimensionErrors(prev => ({
                ...prev,
                longueur: 'La longueur ne peut pas dépasser 140 cm'
              }));
            } else {
              setDimensionErrors(prev => ({
                ...prev,
                longueur: ''
              }));
              
              // Revalider l'arc si il existe
              if (dimensions.arc) {
                if (Number(dimensions.arc) > Number(value)/2) {
                  setDimensionErrors(prev => ({
                    ...prev,
                    arc: "L'arc ne peut pas dépasser la moitié de la longueur"
                  }));
                } else {
                  setDimensionErrors(prev => ({
                    ...prev,
                    arc: ''
                  }));
                }
              }
            }
          }}
          error={!!dimensionErrors.longueur}
          helperText={dimensionErrors.longueur}
        />
      </Grid2>
      <Grid2 item xs={6}>
        <TextField 
          label="Arc (cm)" 
          variant="outlined" 
          size="small" 
          fullWidth 
          value={dimensions.arc || ''}
          onChange={(e) => {
            const value = e.target.value;
            handleDimensionChange('arc', value);
            
            // Validation de l'arc
            if (dimensions.longueur && Number(value) > Number(dimensions.longueur)/2) {
              setDimensionErrors(prev => ({
                ...prev,
                arc: "L'arc ne peut pas dépasser la moitié de la longueur"
              }));
            } else {
              setDimensionErrors(prev => ({
                ...prev,
                arc: ''
              }));
            }
          }}
          error={!!dimensionErrors.arc}
          helperText={dimensionErrors.arc}
        />
      </Grid2>
    </Grid2>
  );
        
      case 3: // Rect-chanfr
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


   // Add state for current picture index
   const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

   // Navigation functions
   const goToNextPicture = () => {
     setCurrentPictureIndex((prevIndex) => 
       prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
     );
   };
 
   const goToPreviousPicture = () => {
     setCurrentPictureIndex((prevIndex) => 
       prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
     );
   };
 
   // Navigation button styles
   const NavigationButton = styled(Button)({
     minWidth: '48px',
     height: '48px',
     borderRadius: '50%',
     padding: 0,
     position: 'absolute',
     top: '50%',
     transform: 'translateY(-50%)',
     backgroundColor: 'rgba(255, 255, 255, 0.8)',
     '&:hover': {
       backgroundColor: 'rgba(255, 255, 255, 0.9)',
     },
   });
 
   // Replace the existing image gallery section with this:
   const renderMainImage = () => (
     <Box sx={{ position: 'relative', marginBottom: 2 }}>
       {isDynamicSVG ? (
         selectedShape === 0 ? (
          

           <DynamicCircleSVG
             diameter={dimensions.diametre || 30}
             color="#9BC953"
           />
           
         ) : /* ... (keep all other shape conditions) */ null
       ) : (
         <Box sx={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
           <Box
             component="img"
             src={pictures[currentPictureIndex]}
             alt="Main Product"
             sx={{
               width: "100%",
               height: "auto",
               border: "1px solid #ddd",
               borderRadius: "8px",
             }}
           />
           <NavigationButton
             onClick={goToPreviousPicture}
             sx={{ left: -24 }}
           >
             <ChevronLeft />
           </NavigationButton>
           <NavigationButton
             onClick={goToNextPicture}
             sx={{ right: -24 }}
           >
             <ChevronRight />
           </NavigationButton>
         </Box>
       )}
     </Box>
   );



  const [mainPicture, setMainPicture] = useState(pictures[0]);

  const handlePictureClick = (picture) => {
    setMainPicture(picture);
  };

  
  return (
    <Box sx={{
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' },
      gap: '20px',
      padding: '20px',
    }}>
      {/* First Box - Images and Title Section */}
      <Box sx={{ 
        flex: 1,
        width: '100%',
        order: { xs: 1, md: 1 }
      }}>
        <Box sx={{ padding: 2 }}>
          {/* Title and text */}
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h4" sx={{ marginBottom: 1 }}>
              {title}
            </Typography>
            <Typography variant="body1">{text}</Typography>
          </Box>
  
          {/* Main Image */}
          <Box sx={{ textAlign: "center", marginBottom: 2 }}>
            {isDynamicSVG ? (
              selectedShape === 0 ? (
                <DynamicCircleSVG
                  diameter={dimensions.diametre }
                  color="#9BC953"
                /> 
              ) :/* selectedShape === 2 ? (
                <OvaldynamicSvg
                  width={dimensions.longueur || 80}
                  height={dimensions.largeur || 40}
                  color="#9BC953"
                />
              ) :*/ selectedShape === 1 ? (
                <OctaShapeSVG 
                  length={dimensions.longueur   } 
                  arc={dimensions.arc } 
                  color="#9BC953" 
                />
              ) : selectedShape === 2 ? (
            <RectangleACoinsArrondis 
                        height={dimensions.longueur}
                       width={dimensions.largeur}
                       radius={dimensions.arc}
    color="#9BC953" 
  />
              ) :selectedShape === 4 ? (
  <RectangleACoinCarres 
    width={dimensions.longueur}
    height={dimensions.largeur}
    color="#9BC953" 
  />
): selectedShape === 3 ? (
                <RectangleChanfreine 
               height={dimensions.longueur ||(isMobile ? 40 : 400 )}
                 width={dimensions.largeur || (isMobile ? 100 :240 )}
                  arcA={dimensions.arcA || (isMobile ? 10 : 40)}
                  arcB={dimensions.arcB || (isMobile ? 10 : 40)}
                  color="#9BC953" 
                  displayValues={true}
                />
              )
              : /*  selectedShape === 1 ? (
                <OvaleSVG 
                  width={dimensions.longueur || 200}
                  height={dimensions.largeur || 300}
                  color="#9BC953" 
                />
              ) */
               null
            ) : (
              renderMainImage()
            )}
          </Box>
  
          {/* Image Gallery */}
          <Grid2 container spacing={1} justifyContent="center">
  {pictures09.map((picture, index) => (
    <Grid2 item key={index} xs={3} sm={2} md={1}>
      <Box
        component="img"
        src={picture}
        alt={`Thumbnail ${index}`}
        onClick={() => {
          handlePictureClick(picture);
          onImageClick(index); // Add this line to handle the text change
        }}
        sx={{
          width: "100%",
          maxWidth: "90px",
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
  
      {/* Second Box - Best Seller Section */}
      <Box sx={{ 
        flex: 1,
        width: '100%',
        order: { xs: 2, md: 2 }
      }}>
        <Box sx={{ 
          padding: { xs: 2, md: 4 },
          maxWidth: "800px",
          margin: "0 auto",
          border: "1px solid #ddd",
          borderRadius: "8px"
        }}>
          {/* Rest of the Best-seller content remains the same */}
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

        
        <Box sx={{ marginTop: 3, textAlign: "center" }}>
  {/* Liste des nappes - toujours visible */}
  {tableCovers.map((cover, index) => {
  let dimensionsText = '';
  switch(cover.type) {
    case 'Cercle':
      dimensionsText = `Diamètre = ${cover.diametre}cm`;
      break;
    case 'Octogone':
      dimensionsText = `longueur = ${cover.longueur}cm | arc = ${cover.arc}cm`;
      break;
    case 'Rectangle à coins arrondis':
      dimensionsText = `longueur = ${cover.longueur}cm | largeur = ${cover.largeur}cm | rayon = ${cover.rayon}cm`;
      break;
    case 'Rectangle chanfreiné':
      dimensionsText = `longueur = ${cover.longueur}cm | largeur = ${cover.largeur}cm | arcA = ${cover.arcA}cm | arcB = ${cover.arcB}cm`;
      break;
    case 'Rectangle':
      dimensionsText = `longueur = ${cover.longueur}cm | largeur = ${cover.largeur}cm`;
      break;
  }
  
  return (
    <Box
  key={index}
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 1,
    marginTop: 3,
    padding: "8px",
    backgroundColor: "white",
    borderRadius: "4px",
    border: "1px solid #ddd"
  }}
>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
    <Typography variant="body2">
      [{cover.type} ({cover.thickness}): {dimensionsText}]
    </Typography>
    <Typography variant="body2" sx={{ color: '#9BC953', fontWeight: 'bold' }}>
      {Math.floor(cover.price)} DH
    </Typography>
  </Box>
  <Button
    onClick={() => {
      const newTableCovers = [...tableCovers];
      newTableCovers.splice(index, 1);
      setTableCovers(newTableCovers);
    }}
    sx={{
      minWidth: 'auto',
      padding: '4px 8px',
      color: 'red',
      '&:hover': {
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
      },
    }}
  >
    ✕
  </Button>
</Box>
  );
})}

  {/* Prix et bouton - visible seulement quand !showMessage */}
  {!showMessage && (
    <>
      <Typography variant="h6" color="black">
      Prix total : {Math.floor(tableCovers.reduce((sum, cover) => sum + cover.price, 0) + (showMessage ? 0 : prixTotal))} DHs
      </Typography>
      <Typography variant="h17" color="black">
        La livraison est gratuite
      </Typography>
      <Button
  onClick={() => {
          let newCover;
          switch(selectedShape) {
            case 0: // Cercle
              newCover = {
                type: 'Cercle',
                thickness: thickness,
                diametre: dimensions.diametre,
                price: prixTotal
              };
              break;
            case 1: // Octogone
              newCover = {
                type: 'Octogone',
                thickness: thickness,
                longueur: dimensions.longueur,
                arc: dimensions.arc,
                price: prixTotal
              };
              break;
            case 2: // Rectangle à coins arrondis
              newCover = {
                type: 'Rectangle à coins arrondis',
                thickness: thickness,
                longueur: dimensions.longueur,
                largeur: dimensions.largeur,
                rayon: dimensions.arc,
                price: prixTotal
              };
              break;
            case 3: // Rectangle chanfreiné
              newCover = {
                type: 'Rectangle chanfreiné',
                thickness: thickness,
                longueur: dimensions.longueur,
                largeur: dimensions.largeur,
                arcA: dimensions.arcA,
                arcB: dimensions.arcB,
                price: prixTotal
              };
              break;
            case 4: // Rectangle
              newCover = {
                type: 'Rectangle',
                thickness: thickness,
                longueur: dimensions.longueur,
                largeur: dimensions.largeur,
                price: prixTotal
              };
              break;
          }
          if (newCover) {
            setTableCovers([...tableCovers, newCover]);
            setShowMessage(false);
          }
        }}
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#9BC953",
          color: "white",
          fontWeight: "bold",
          borderRadius: "20px",
          padding: "12px 20px",
          marginTop: 2,
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#7CA43B",
          },
        }}
      >
        Ajouter une autre nappe
      </Button>
    </>
  )}
</Box>
          </Box>
          


  
          <form onSubmit={handleSubmit}>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Vos informations :
        </Typography>

        <Grid2 container direction="column" spacing={2} sx={{ marginBottom: 3 }}>
          <Grid2 item xs={12}>
            <TextField
              label="Email:"
              variant="standard"
              fullWidth
              value={formData.email}
              onChange={(e) => handleFormChange("email", e.target.value)}
              required
              sx={{ marginBottom: 2 }}
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              label="Nom complet:"
              variant="standard"
              fullWidth
              value={formData.fullName}
              onChange={(e) => handleFormChange("fullName", e.target.value)}
              required
              sx={{ marginBottom: 2 }}
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              label="Téléphone:"
              variant="standard"
              fullWidth
              value={formData.phone}
              onChange={(e) => handleFormChange("phone", e.target.value)}
              required
              sx={{ marginBottom: 2 }}
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              label="Adresse complète:"
              variant="standard"
              fullWidth
              value={formData.address}
              onChange={(e) => handleFormChange("address", e.target.value)}
              required
              sx={{ marginBottom: 2 }}
            />
          </Grid2>
          
        </Grid2>

        <Button
          type="submit"
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
      </form>
        <div style={{marginTop:'4%'}}>
<AssistanceComponent/>
        </div>
        </Box>




        </Box>
    
      
   
  
        
 
    </Box>
  );
};

export default ProductPresentation;
