import React, { useState, useEffect,forwardRef } from "react";
import { Typography, Grid2, IconButton,Box, useTheme, useMediaQuery, TextField, Button } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { styled } from '@mui/material/styles';
import AssistanceComponent from "./AssistanceComponent";
import DynamicCircleSVG from "./DynamicCircleSVG";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import OctaShapeSVG from "./OctaShapeSVG";
import OvaldynamicSvg from "./OvaldynamicSvg";
import RectangleACoinsArrondis from "./RectangleACoinsArrondis";
import RectangleACoinCarres from "./RectangleACoinCarres";
import OrderSubmitButton from "./OrderSubmitButton";
import RectangleChanfreine from "./RectangleChanfreine";
import OvaleSVG from "./OvaleSVG";
import { useTranslation } from 'react-i18next';
import { Minus, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { fr, ar } from 'date-fns/locale';

const ProductPresentation = forwardRef(({ title, text, pictures, pictures09, onImageClick,initialIndex },ref) => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const [showMessage, setShowMessage] = useState(true);
  const [tableCovers, setTableCovers] = useState([]);
  const [prixTotal, setPrixTotal] = useState(0);
  const [deliveryDates, setDeliveryDates] = useState({ startDate: "", endDate: "" });
  const [selectedCovers, setSelectedCovers] = useState([]);
  const [dimensionErrors, setDimensionErrors] = useState({
    diametre: '',
    longueur: '',
    largeur: '',
    arc: '',
    arca: '',
    arcb: ''
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
    PrixTotal:"",
    
  });
 
  const shouldShowThicknessSection = (selectedIndex) => {
    // Retourne false pour les index 1 et 2
    return ![1, 2].includes(selectedIndex);
  };

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
      price: prixTotal,
      quantity: 1
    };
    setTableCovers([...tableCovers, newCover]);
    setDimensions({ longueur: '', largeur: '' });
    setShowMessage(true);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const newTableCovers = [...tableCovers];
    const cover = newTableCovers[index];
    
    // Calculer l'aire si elle n'est pas déjà stockée lors du premier changement de quantité
    let area;
    
    // Si l'article a déjà une propriété area, l'utiliser
    if (cover.area !== undefined) {
      area = cover.area;
    } 
    // Sinon, calculer l'aire en fonction du type et stocker pour usage futur
    else {
      switch(cover.type) {
        case 'Cercle':
          area = (Number(cover.diametre)/100) * (Number(cover.diametre)/100);
          break;
        case 'Octogone':
          area = (Number(cover.longueur)/100) * (Number(cover.longueur)/100);
          break;
        default:
          area = (Number(cover.longueur)/100) * (Number(cover.largeur)/100);
      }
      // Stocker l'aire calculée pour les utilisations futures
      cover.area = area;
    }
    
    // Déterminer le prix de base en fonction du matériau et de l'épaisseur
    const basePrice = (() => {
      if (cover.materialType === 'matte' || cover.materialType === 'doree') {
        return 250; // Prix fixe pour mat et doré
      } else {
        return cover.thickness === "2" ? 250 : 199;
      }
    })();
    
    // Calculer le prix total avec la formule simplifiée
    let totalPrice;
    if (area < 0.49) {
      // Formule simplifiée: (basePrice * area * quantite) + 105
      totalPrice = (basePrice * area * newQuantity) + 105;
    } else {
      // Pour les autres cas, on multiplie simplement par la quantité
      totalPrice = cover.price * newQuantity;
    }
    
    // Mettre à jour la couverture avec la nouvelle quantité et le nouveau prix total
    newTableCovers[index] = {
      ...cover,
      quantity: newQuantity,
      totalPrice: Math.floor(totalPrice)
    };
    
    setTableCovers(newTableCovers);
    
    // Mise à jour du prix total
    const total = newTableCovers.reduce((sum, cover) => 
      sum + (cover.totalPrice !== undefined ? cover.totalPrice : cover.price * (cover.quantity || 1)), 0);
    
    setPrixTotal(total);
  };
  
  const handleRemoveCover = (index) => {
    const newTableCovers = [...tableCovers];
    newTableCovers.splice(index, 1);
    setTableCovers(newTableCovers);
    
    // Mise à jour du prix total après suppression en prenant en compte les totalPrice calculés
    const total = newTableCovers.reduce((sum, cover) => {
      if (cover.totalPrice !== undefined) {
        return sum + cover.totalPrice;
      } else if (cover.area && cover.area < 0.49) {
        // Déterminer le prix de base
        const basePrice = (() => {
          if (cover.materialType === 'matte' || cover.materialType === 'doree') {
            return 250; // Prix fixe pour mat et doré
          } else {
            return cover.thickness === "2" ? 250 : 199;
          }
        })();
        return sum + Math.floor((basePrice * cover.area * (cover.quantity || 1)) + 105);
      } else {
        return sum + (cover.price * (cover.quantity || 1));
      }
    }, 0);
    
    setPrixTotal(total);
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
    formDataToSubmit.append("PrixTotal",`${prixTotal} DHs`)

    const getMaterialTypeText = (materialType) => {
      if (materialType === 'matte') {
        return t('product_presentation_mat');
      } else if (materialType === 'doree') {
        return t('product_presentation_dore');
      } else {
        return t('product_presentation_transparentse');
      }
    };
    
    
    const orderDetails = tableCovers.map(cover => {
      let coverDescription = '';
      const materialText = getMaterialTypeText(cover.materialType);
      let thicknessText = cover.thickness ? `(${cover.thickness}mm)` : '';
    
      switch(cover.type) {
        case 'Cercle':
          coverDescription = `${cover.type} ${materialText} ${thicknessText}: Diamètre=${cover.diametre}cm (Quantité: ${cover.quantity || 1})`;
          break;
        case 'Octogone':
          coverDescription = `${cover.type} ${materialText} ${thicknessText}: longueur=${cover.longueur}cm | arc=${cover.arc}cm (Quantité: ${cover.quantity || 1})`;
          break;
        case 'RectangleACoinsArrondis':
          coverDescription = `${cover.type} ${materialText} ${thicknessText}: longueur=${cover.longueur}cm | largeur=${cover.largeur}cm | rayon=${cover.rayon}cm (Quantité: ${cover.quantity || 1})`;
          break;
        case 'RectangleChanfreiné':
          coverDescription = `${cover.type} ${materialText} ${thicknessText}: longueur=${cover.longueur}cm | largeur=${cover.largeur}cm | arcA=${cover.arcA}cm | arcB=${cover.arcB}cm (Quantité: ${cover.quantity || 1})`;
          break;
        case 'Rectangle':
          coverDescription = `${cover.type} ${materialText} ${thicknessText}: longueur=${cover.longueur}cm | largeur=${cover.largeur}cm (Quantité: ${cover.quantity || 1})`;
          break;
      }
      return coverDescription;
    }).join('\n');

    // Add order details and price to form data
    formDataToSubmit.append("Commande", orderDetails);
    formDataToSubmit.append("Prix_Total", `${prixTotal} DHs`);
    

    // Submit form
    fetch(
      "https://script.google.com/macros/s/AKfycbxDuGglDRRB-Eq8wgid8lunUJQltEqQbie-8MZ3I2PwGAG5f5vhENM4k4mcgJNbVq5J/exec",
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

  const isArabic = i18n.language === 'ar';

  const incrementQuantity = (index) => {
    const newTableCovers = [...tableCovers];
    if (!newTableCovers[index].quantity) {
      newTableCovers[index].quantity = 2;
    } else {
      newTableCovers[index].quantity += 1;
    }
    newTableCovers[index].totalPrice = newTableCovers[index].price * newTableCovers[index].quantity;
    setTableCovers(newTableCovers);
  };
  
  const decrementQuantity = (index) => {
    const newTableCovers = [...tableCovers];
    if (newTableCovers[index].quantity === 1) {
      // Si la quantité est 1, supprimer l'article
      handleRemoveCover(index);
    } else if (newTableCovers[index].quantity > 1) {
      // Sinon, décrémenter la quantité
      newTableCovers[index].quantity -= 1;
      newTableCovers[index].totalPrice = newTableCovers[index].price * newTableCovers[index].quantity;
      setTableCovers(newTableCovers);
    }
  };

  useEffect(() => {
    const today = new Date();
    const startDate = new Date(today);
    const endDate = new Date(today);

    startDate.setDate(today.getDate() + 2);
    endDate.setDate(today.getDate() + 3);

    const formatDate = (date) => {
      const options = { day: "2-digit", month: "2-digit" };
      return date.toLocaleDateString("fr-FR", options);
    };

    setDeliveryDates({
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
    });
  }, []);

  const FeatureItem = ({ children,childrentwo }) => (
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
     <Typography variant="body2" sx={{ marginRight: 0.1, marginLeft: 0.1 }}>
  {children}
</Typography>

    </Box>
  );

  const FeatureItem2 = ({ children, onClickCici }) => {
    const { t } = useTranslation();
  
    const handleClick = () => {
      if (onClickCici) {
        onClickCici();
      }
    };
  
    const renderTextWithClickable = (text) => {
      const parts = t(text).split('{clickici}');
      
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CancelOutlinedIcon
            sx={{
              color: '#C24848',
              marginRight: 1
            }}
          />
          <Typography component="span" variant="body2">
            {parts[0]}
            <Box
              component="span"
              onClick={handleClick}
              sx={{
                color: '#9BC953',
                cursor: 'pointer',
                textDecoration: 'underline',
                '&:hover': {
                  color: '#7ca43b',
                },
              }}
            >
              {t('clickici')}
            </Box>
            {parts[1]}
          </Typography>
        </Box>
      );
    };
  
    return renderTextWithClickable(children);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [selectedShape, setSelectedShape] = useState(null);
  const [thickness, setThickness] = useState("1.5");
  const [dimensions, setDimensions] = useState({});

  const shapes = [
    "/assets/shapes/circle.png",
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
  // Mettre à jour directement avec la valeur (qui peut contenir un point)
  const newDimensions = { ...dimensions, [field]: value };
  setDimensions(newDimensions);

  // Vérifier si toutes les dimensions requises sont remplies
  const allDimensionsFilled = (() => {
    switch(selectedShape) {
      case 0: // Circle
        return newDimensions.diametre && newDimensions.diametre !== '.';
      case 1: // Octogone
        return newDimensions.longueur && newDimensions.arc && 
               newDimensions.longueur !== '.' && newDimensions.arc !== '.';
      case 2: // Rectangle coins arrondis
        return newDimensions.longueur && newDimensions.largeur && newDimensions.arc &&
               newDimensions.longueur !== '.' && newDimensions.largeur !== '.' && 
               newDimensions.arc !== '.';
      case 3: // Rectangle chanfreiné
        return newDimensions.longueur && newDimensions.largeur && 
               newDimensions.arca && newDimensions.arcb &&
               newDimensions.longueur !== '.' && newDimensions.largeur !== '.' && 
               newDimensions.arca !== '.' && newDimensions.arcb !== '.';
      case 4: // Rectangle coins carrés
        return newDimensions.longueur && newDimensions.largeur &&
               newDimensions.longueur !== '.' && newDimensions.largeur !== '.';
      default:
        return false;
    }
  })();

  if (allDimensionsFilled) {
    // Calculer le prix en utilisant les valeurs numériques
    const calculatePrice = () => {
      let area;
      switch(selectedShape) {
        case 0:
          area = Number(newDimensions.diametre)/100 * Number(newDimensions.diametre)/100;
          break;
        case 1:
          area = (Number(newDimensions.longueur)/100) * (Number(newDimensions.longueur)/100);
          break;
        default:
          area = (Number(newDimensions.longueur)/100) * (Number(newDimensions.largeur)/100);
      }

      const basePrice = ((thickness === "2") || (pictures09.indexOf(selectedGalleryImage) === 1 || pictures09.indexOf(selectedGalleryImage) === 2)) ? 250 : 199;
      
      if (area < 0.49) {
        return Math.floor(area * basePrice + 70);
      } else if (area < 0.99) {
        return Math.floor(area * basePrice + 40);
      } else {
        return Math.floor(area * basePrice + 20);
      }
    };

    const newPrice = calculatePrice();
    setShowMessage(false);
    setPrixTotal(newPrice);
  } else {
    setShowMessage(true);
    setPrixTotal(0);
  }
};
useEffect(() => {
  if (dimensions.longueur || dimensions.diametre) {
    // Déclencher un recalcul du prix en réutilisant les dimensions actuelles
    if (dimensions.diametre) {
      handleDimensionChange('diametre', dimensions.diametre);
    } else if (dimensions.longueur) {
      handleDimensionChange('longueur', dimensions.longueur);
    }
  }
}, [thickness]);


const renderDimensionFields = () => {
  switch (selectedShape) {
    case 0: // Circle
      return (
        <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
          <Grid2 item xs={12}>
            <TextField
              label={`${t('Diametre')} (${t('cm')})`}
              variant="outlined"
              size="small"
              fullWidth
              dir={isArabic ? "rtl" : "ltr"}
              value={dimensions.diametre || ''}
              onChange={(e) => {
                
                const value = e.target.value.replace(',', '.');
                if (value === '' || value === '.' || !isNaN(value)) {
                handleDimensionChange('diametre', value);
                if (Number(value) > 140) {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    diametre: t('Diametre140')
                  }));
                } else {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    diametre: ''
                  }));
                }
                }
              }}
              error={!!dimensionErrors.diametre}
              helperText={dimensionErrors.diametre}
              sx={{
                '& .MuiInputLabel-root': {
                  left: isArabic ? 'auto !important' : '0px !important',
                  right: isArabic ? '28px !important' : 'auto !important',
                  transformOrigin: isArabic ? 'right' : 'left',
                },
                '& .MuiOutlinedInput-root': {
                  '& > input': {
                    textAlign: isArabic ? 'right' : 'left',
                  }
                },
                '& legend': {
                  textAlign: isArabic ? 'right' : 'left',
                }
              }}
            />
          </Grid2>
        </Grid2>
      );

    case 4: // Rectangle à coins carrés
      return (
        <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
          <Grid2 item xs={6}>
            <TextField
              label={`${t('Longueur')} (${t('cm')})`}
              variant="outlined"
              size="small"
              fullWidth
              value={dimensions.longueur || ''}
              onChange={(e) => {

                const value = e.target.value.replace(',', '.');
                if (value === '' || value === '.' || !isNaN(value)) {
                handleDimensionChange('longueur', value);
                if (Number(value) > 1000) {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    longueur: t('Longueur1000')
                  }));
                } else {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    longueur: ''
                  }));
                }
              }
              }}
              error={!!dimensionErrors.longueur}
              helperText={dimensionErrors.longueur}
              sx={{
                '& .MuiInputLabel-root': {
                  left: isArabic ? 'auto !important' : '0px !important',
                  right: isArabic ? '28px !important' : 'auto !important',
                  transformOrigin: isArabic ? 'right' : 'left',
                },
                '& .MuiOutlinedInput-root': {
                  '& > input': {
                    textAlign: isArabic ? 'right' : 'left',
                  }
                },
                '& legend': {
                  textAlign: isArabic ? 'right' : 'left',
                }
              }}
            />
          </Grid2>
          <Grid2 item xs={6}>
            <TextField
              label={`${t('Largeur')} (${t('cm')})`}
              variant="outlined"
              size="small"
              fullWidth
              value={dimensions.largeur || ''}
              onChange={(e) => {
                const value = e.target.value.replace(',', '.');
                if (value === '' || value === '.' || !isNaN(value)) {
                handleDimensionChange('largeur', value);
                if (Number(value) > 140) {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    largeur: t('Largeur140')
                  }));
                } else {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    largeur: ''
                  }));
                }
              }
              }}
              error={!!dimensionErrors.largeur}
              helperText={dimensionErrors.largeur}
              sx={{
                '& .MuiInputLabel-root': {
                  left: isArabic ? 'auto !important' : '0px !important',
                  right: isArabic ? '28px !important' : 'auto !important',
                  transformOrigin: isArabic ? 'right' : 'left',
                },
                '& .MuiOutlinedInput-root': {
                  '& > input': {
                    textAlign: isArabic ? 'right' : 'left',
                  }
                },
                '& legend': {
                  textAlign: isArabic ? 'right' : 'left',
                }
              }}
            />
          </Grid2>
        </Grid2>
      );

    case 2: // Rectangle à coins arrondis
      return (
        <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
          <Grid2 item xs={6}>
            <TextField
              label={`${t('Longueur')} (${t('cm')})`}
              variant="outlined"
              size="small"
              fullWidth
              value={dimensions.longueur || ''}
              onChange={(e) => {
                const value = e.target.value.replace(',', '.');
                if (value === '' || value === '.' || !isNaN(value)) {
                handleDimensionChange('longueur', value);
                if (Number(value) > 1000) {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    longueur: t('Longueur1000')
                  }));
                } else {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    longueur: ''
                  }));
                }
              }
              }}
              error={!!dimensionErrors.longueur}
              helperText={dimensionErrors.longueur}
              sx={{
                '& .MuiInputLabel-root': {
                  left: isArabic ? 'auto !important' : '0px !important',
                  right: isArabic ? '28px !important' : 'auto !important',
                  transformOrigin: isArabic ? 'right' : 'left',
                },
                '& .MuiOutlinedInput-root': {
                  '& > input': {
                    textAlign: isArabic ? 'right' : 'left',
                  }
                },
                '& legend': {
                  textAlign: isArabic ? 'right' : 'left',
                }
              }}
            />
          </Grid2>
          <Grid2 item xs={6}>
            <TextField
              label={`${t('Largeur')} (${t('cm')})`}
              variant="outlined"
              size="small"
              fullWidth
              value={dimensions.largeur || ''}
              onChange={(e) => {
                const value = e.target.value.replace(',', '.');
                if (value === '' || value === '.' || !isNaN(value)) {
                handleDimensionChange('largeur', value);
                if (Number(value) > 140) {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    largeur: t('Largeur140')
                  }));
                } else {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    largeur: ''
                  }));
                }
              }
              }}
              error={!!dimensionErrors.largeur}
              helperText={dimensionErrors.largeur}
              sx={{
                '& .MuiInputLabel-root': {
                  left: isArabic ? 'auto !important' : '0px !important',
                  right: isArabic ? '28px !important' : 'auto !important',
                  transformOrigin: isArabic ? 'right' : 'left',
                },
                '& .MuiOutlinedInput-root': {
                  '& > input': {
                    textAlign: isArabic ? 'right' : 'left',
                  }
                },
                '& legend': {
                  textAlign: isArabic ? 'right' : 'left',
                }
              }}
            />
          </Grid2>
          <Grid2 item xs={6}>
            <TextField
              label={`${t('Rayon')} (${t('cm')})`}
              variant="outlined"
              size="small"
              fullWidth
              value={dimensions.arc || ''}
              onChange={(e) => {
                const value = e.target.value.replace(',', '.');
                if (value === '' || value === '.' || !isNaN(value)) {
                handleDimensionChange('arc', value);
                if (Number(value) > Math.min(dimensions.longueur, dimensions.largeur) / 2) {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    arc: t('ArcDepasse')
                  }));
                } else {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    arc: ''
                  }));
                }
              }
              }}
              error={!!dimensionErrors.arc}
              helperText={dimensionErrors.arc}
              sx={{
                '& .MuiInputLabel-root': {
                  left: isArabic ? 'auto !important' : '0px !important',
                  right: isArabic ? '28px !important' : 'auto !important',
                  transformOrigin: isArabic ? 'right' : 'left',
                },
                '& .MuiOutlinedInput-root': {
                  '& > input': {
                    textAlign: isArabic ? 'right' : 'left',
                  }
                },
                '& legend': {
                  textAlign: isArabic ? 'right' : 'left',
                }
              }}
            />
          </Grid2>
        </Grid2>
      );

    case 3: // Rectangle chanfreiné
      return (
        <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
          <Grid2 item xs={6} sm={3}>
            <TextField
              label={`${t('Longueur')} (${t('cm')})`}
              variant="outlined"
              size="small"
              fullWidth
              value={dimensions.longueur || ''}
              onChange={(e) => {
                const value = e.target.value.replace(',', '.');
                if (value === '' || value === '.' || !isNaN(value)) {
                handleDimensionChange('longueur', value);
                if (Number(value) > 1000) {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    longueur: t('Longueur1000')
                  }));
                } else {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    longueur: ''
                  }));
                }
              }
              }}
              error={!!dimensionErrors.longueur}
              helperText={dimensionErrors.longueur}
              sx={{
                '& .MuiInputLabel-root': {
                  left: isArabic ? 'auto !important' : '0px !important',
                  right: isArabic ? '28px !important' : 'auto !important',
                  transformOrigin: isArabic ? 'right' : 'left',
                },
                '& .MuiOutlinedInput-root': {
                  '& > input': {
                    textAlign: isArabic ? 'right' : 'left',
                  }
                },
                '& legend': {
                  textAlign: isArabic ? 'right' : 'left',
                }
              }}
            />
          </Grid2>
          <Grid2 item xs={6} sm={3}>
            <TextField
              label={`${t('Largeur')} (${t('cm')})`}
              variant="outlined"
              size="small"
              fullWidth
              value={dimensions.largeur || ''}
              onChange={(e) => {
                const value = e.target.value.replace(',', '.');
                if (value === '' || value === '.' || !isNaN(value)) {
                handleDimensionChange('largeur', value);
                if (Number(value) > 140) {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    largeur: t('Largeur140')
                  }));
                } else {
                  setDimensionErrors((prev) => ({
                    ...prev,
                    largeur: ''
                  }));
                }
              }
              }}
              error={!!dimensionErrors.largeur}
              helperText={dimensionErrors.largeur}
              sx={{
                '& .MuiInputLabel-root': {
                  left: isArabic ? 'auto !important' : '0px !important',
                  right: isArabic ? '28px !important' : 'auto !important',
                  transformOrigin: isArabic ? 'right' : 'left',
                },
                '& .MuiOutlinedInput-root': {
                  '& > input': {
                    textAlign: isArabic ? 'right' : 'left',
                  }
                },
                '& legend': {
                  textAlign: isArabic ? 'right' : 'left',
                }
              }}
            />
          </Grid2>
          <Grid2 item xs={6} sm={3}>
            <TextField
              label={`${t('ArcA')} (${t('cm')})`}
              variant="outlined"
              size="small"
              fullWidth
              value={dimensions.arca || ''}
              onChange={(e) => {
                const value = e.target.value.replace(',', '.');
                if (value === '' || value === '.' || !isNaN(value)) {
                handleDimensionChange('arca', value);
                
                  setDimensionErrors((prev) => ({
                    ...prev,
                    arca: ''
                  }));
               
              }
              }}
              error={!!dimensionErrors.arca}
              helperText={dimensionErrors.arca}
              sx={{
                '& .MuiInputLabel-root': {
                  left: isArabic ? 'auto !important' : '0px !important',
                  right: isArabic ? '28px !important' : 'auto !important',
                  transformOrigin: isArabic ? 'right' : 'left',
                },
                '& .MuiOutlinedInput-root': {
                  '& > input': {
                    textAlign: isArabic ? 'right' : 'left',
                  }
                },
                '& legend': {
                  textAlign: isArabic ? 'right' : 'left',
                }
              }}
            />
          </Grid2>
          <Grid2 item xs={6} sm={3}>
  <TextField
    label={`${t('ArcB')} (${t('cm')})`}
    variant="outlined"
    size="small"
    fullWidth
    value={dimensions.arcb || ''}
    onChange={(e) => {
      const value = e.target.value.replace(',', '.');
      if (value === '' || value === '.' || !isNaN(value)) {
      handleDimensionChange('arcb', value);
       
        setDimensionErrors((prev) => ({
          ...prev,
          arcb: ''
        }));
       
    }
    }}
    error={!!dimensionErrors.arcb}
    helperText={dimensionErrors.arcb}
    sx={{
      '& .MuiInputLabel-root': {
        left: isArabic ? 'auto !important' : '0px !important',
        right: isArabic ? '28px !important' : 'auto !important',
        transformOrigin: isArabic ? 'right' : 'left',
      },
      '& .MuiOutlinedInput-root': {
        '& > input': {
          textAlign: isArabic ? 'right' : 'left',
        }
      },
      '& legend': {
        textAlign: isArabic ? 'right' : 'left',
      }
    }}
  />
</Grid2>
</Grid2>
);

case 1: // Octogone
  return (
    <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
      <Grid2 item xs={6}>
        <TextField
          label={`${t('Longueur')} (${t('cm')})`}
          variant="outlined"
          size="small"
          fullWidth
          value={dimensions.longueur || ''}
          onChange={(e) => {
            const value =  e.target.value.replace(',', '.');
            if (value === '' || value === '.' || !isNaN(value)) {
            handleDimensionChange('longueur', value);
            if (Number(value) > 140) {
              setDimensionErrors((prev) => ({
                ...prev,
                longueur: t('Longueur140')
              }));
            } else {
              setDimensionErrors((prev) => ({
                ...prev,
                longueur: ''
              }));
              // Revalider l'arc si il existe
              if (dimensions.arc) {
                if (Number(dimensions.arc) > Number(value)/2) {
                  setDimensionErrors(prev => ({
                    ...prev,
                    arc: t('ArcDepasse')
                  }));
                } else {
                  setDimensionErrors(prev => ({
                    ...prev,
                    arc: ''
                  }));
                }
              }
            }
            }
          }}
          error={!!dimensionErrors.longueur}
          helperText={dimensionErrors.longueur}
          sx={{
            '& .MuiInputLabel-root': {
              left: isArabic ? 'auto !important' : '0px !important',
              right: isArabic ? '28px !important' : 'auto !important',
              transformOrigin: isArabic ? 'right' : 'left',
            },
            '& .MuiOutlinedInput-root': {
              '& > input': {
                textAlign: isArabic ? 'right' : 'left',
              }
            },
            '& legend': {
              textAlign: isArabic ? 'right' : 'left',
            }
          }}
        />
      </Grid2>
      <Grid2 item xs={6}>
        <TextField
          label={`${t('Arc')} (${t('cm')})`}
          variant="outlined"
          size="small"
          fullWidth
          value={dimensions.arc || ''}
          onChange={(e) => {
            const value = e.target.value.replace(',', '.');
            if (value === '' || value === '.' || !isNaN(value)) {
            handleDimensionChange('arc', value);
            if (dimensions.longueur && Number(value) > Number(dimensions.longueur) / 2) {
              setDimensionErrors((prev) => ({
                ...prev,
                arc: t('ArcDepasse')
              }));
            } else {
              setDimensionErrors((prev) => ({
                ...prev,
                arc: ''
              }));
            }
          }
          }}
          error={!!dimensionErrors.arc}
          helperText={dimensionErrors.arc}
          sx={{
            '& .MuiInputLabel-root': {
              left: isArabic ? 'auto !important' : '0px !important',
              right: isArabic ? '28px !important' : 'auto !important',
              transformOrigin: isArabic ? 'right' : 'left',
            },
            '& .MuiOutlinedInput-root': {
              '& > input': {
                textAlign: isArabic ? 'right' : 'left',
              }
            },
            '& legend': {
              textAlign: isArabic ? 'right' : 'left',
            }
          }}
        />
      </Grid2>
    </Grid2>
  );
    default:
      return null;
  }
};


  // Add state for current picture index

  // Navigation functions
  const goToNextPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
    setMainPicture(pictures[currentPictureIndex === pictures.length - 1 ? 0 : currentPictureIndex + 1]);
    // Ne pas modifier setSelectedGalleryImage ici
  };

  const goToPreviousPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
    setMainPicture(pictures[currentPictureIndex === 0 ? pictures.length - 1 : currentPictureIndex - 1]);
    // Ne pas modifier setSelectedGalleryImage ici
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
        ) :  null
      ) : (
        <Box sx={{ position: 'relative', width: '100%', margin: '0 auto' }}>
          <Box
            component="img"
            src={mainPicture || pictures[currentPictureIndex]}
            alt="Main Product"
            sx={{
              marginLeft:-1,
              width: {
                xs: '100%', // Full width on extra small devices
                sm: '450px', // Larger phones and small tablets
                md: '550px'  // Desktop and larger devices
              },
              height: {
                xs: 'auto',  // Maintain aspect ratio on mobile
                sm: '650px',
                md: '550px'
              },
              maxWidth: '100%',
              objectFit: 'contain', // Maintain aspect ratio
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          />
        <NavigationButton
  onClick={goToPreviousPicture}
  sx={{
    left: -10, // Position inchangée
    width: 50, // Réduction de la largeur
    height: 50, // Réduction de la hauteur
    minWidth: 30, // Taille minimum
    minHeight: 30, // Taille minimum
    padding: 0, // Suppression de tout espace interne supplémentaire
  }}
>
  <ChevronLeft sx={{ fontSize: 20 }} /> {/* Réduction de la taille de l'icône */}
</NavigationButton>
         <NavigationButton
  onClick={goToNextPicture}
  sx={{
    right: -10, // Position à droite
    width: 50, // Réduction de la largeur du bouton
    height: 50, // Réduction de la hauteur du bouton
    minWidth: 30, // Taille minimum
    minHeight: 30, // Taille minimum
    padding: 0, // Suppression des marges internes
  }}
>
  <ChevronRight sx={{ fontSize: 20 }} /> {/* Taille réduite de l'icône */}
</NavigationButton>
        </Box>
      )}
    </Box>
  );
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(pictures09[initialIndex || 0]);
  const [mainPicture, setMainPicture] = useState(pictures09[initialIndex||0]);

// Ajouter ce useEffect
useEffect(() => {
  // Recalculer le prix quand l'image change
  if (selectedShape !== null && !showMessage) {
    const calculatePrice = () => {
      let area;
      switch(selectedShape) {
        case 0:
          area = dimensions.diametre/100 * dimensions.diametre/100;
          break;
        case 1:
          area = (dimensions.longueur/100) * (dimensions.longueur/100);
          break;
        default:
          area = (dimensions.longueur/100) * (dimensions.largeur/100);
      }

      const basePrice = (() => {
        if (pictures09.indexOf(selectedGalleryImage) === 1 || pictures09.indexOf(selectedGalleryImage) === 2) {
          return 250; // Prix fixe pour mat et doré
        } else {
          return thickness === "2" ? 250 : 199;
        }
      })();
      
      if (area < 0.49) {
        return Math.floor(area * basePrice + 70);
      } else if (area < 0.99) {
        return Math.floor(area * basePrice + 40);
      } else {
        return Math.floor(area * basePrice + 20);
      }
    };

    const newTotal = calculatePrice();
    setPrixTotal(newTotal);
    // Ajouter cette ligne pour mettre à jour formData.PrixTotal
    setFormData(prev => ({
      ...prev,
      PrixTotal: newTotal
    }));
  };


}, [selectedGalleryImage, thickness, dimensions]); // Dépendances du useEffect

// Modifier handlePictureClick pour être plus simple
const handlePictureClick = (picture, index) => {
  setMainPicture(picture);
  setSelectedGalleryImage(picture);
  setIsDynamicSVG(false);
  if (onImageClick) {
    onImageClick(index);
  }
};


  return (
    <Box 
    id="product-presentation"
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: '20px',
      padding: '20px',
      bgcolor:'#e6e6e6',
      width:'98%',
      
    }}>
      {/* First Box - Images and Title Section */}
      <Box sx={{
        flex: 1,
        width: '100%',
        order: { xs: 1, md: 1 }
      }}>
        <Box sx={{ padding: 2 ,marginTop:-4}}>
          {/* Title and text */}
          <Box sx={{ marginBottom: 1.5 ,marginLeft: { lg: 12},marginRight: { lg: 12}}}>
            <Typography variant="h5" sx={{ marginBottom: 0.5,marginTop:1.5}}>
              {title}
            </Typography>
            <Typography sx={{fontSize:14}} noWrap>
               {text}
              </Typography>

          </Box>

          {/* Main Image */}
          <Box sx={{ textAlign: "center", marginBottom: 2 }}>

            {isDynamicSVG ? (
              selectedShape === 0 ? (
                <DynamicCircleSVG
                  diameter={dimensions.diametre }

                  color="#9BC953"
                />
              ) : selectedShape === 1 ? (
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
            ):selectedShape === 3 ? (
  <RectangleChanfreine 
    width={dimensions.largeur}    // Changer longueur en largeur
    height={dimensions.longueur}  // Changer largeur en longueur
    arcA={dimensions.arca}
    arcB={dimensions.arcb}
    color="#9BC953" 
    displayValues={true}
  />
              )
                :  
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
                  onClick={() => handlePictureClick(picture, index)}
                  sx={{
                    width: "100%",
                    maxWidth: "70px",
                    height: "auto",
                    cursor: "pointer",
                    border: picture === selectedGalleryImage  ? "2px solid #9bc953" : "1px solid #ddd",
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
        order: { xs: 2, md: 2 },
        bgcolor:'white',
        padding :isMobile?0:2,
         
      }}>
        <Box sx={{
          padding: { xs: 2, md: 4 },
          maxWidth: "800px",
          margin: "0 auto",
          border: "1px solid #ddd",
          
        }}>
          {/* Rest of the Best-seller content remains the same */}
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            {t('product_presentation_best_seller')}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            {t('product_presentation_free_shipping')}
          </Typography>

          {/* Features */}
          {pictures09.indexOf(selectedGalleryImage) === 0 ? (
  <Box sx={{ marginBottom: 2 }}>
    <FeatureItem>{t('product_presentation_thickness_1_5mm')}</FeatureItem>
    <FeatureItem>{t('product_presentation_thickness_2mm')}</FeatureItem>
    <FeatureItem>{t('product_presentation_food_contact')}</FeatureItem>
    <FeatureItem>{t('product_presentation_protection')}</FeatureItem>
    <FeatureItem>{t('product_presentation_transparent')}</FeatureItem>
    <FeatureItem2 
        onClickCici={() => {
         
         handlePictureClick(pictures09[1],1)
        
     }}
    >
      {t('product_presentation_cancelicon')}
    </FeatureItem2>
  </Box>
) : pictures09.indexOf(selectedGalleryImage) === 1 ? (
  <Box sx={{ marginBottom: 2 }}>
    <FeatureItem>{t('product_presentation_thickness_1_5mm_mat')}</FeatureItem>
    <FeatureItem>{t('product_presentation_food_contact_dore_mat')}</FeatureItem>
    <FeatureItem>{t('product_presentation_protection_dore_mat')}</FeatureItem>
    <FeatureItem>{t('product_presentation_transparent_dore_mat')}</FeatureItem>
 
  </Box>
) :  pictures09.indexOf(selectedGalleryImage) === 2 ? (
  <Box sx={{ marginBottom: 2 }}>
    <FeatureItem>{t('product_presentation_thickness_1_5mm_dore')}</FeatureItem>
    <FeatureItem>{t('product_presentation_food_contact_dore_mat')}</FeatureItem>
    <FeatureItem>{t('product_presentation_protection_dore_mat')}</FeatureItem>
    <FeatureItem>{t('product_presentation_transparent_dore_mat')}</FeatureItem>
    <FeatureItem2
      onClickCici={() => {
        handlePictureClick(pictures09[1],1)
      }}
    >
      {t('product_presentation_cancelicon')}

    </FeatureItem2>
  </Box>
):null}

          {/* Availability */}
          <Typography variant="body1" sx={{ marginBottom: 1, color: "green" }}>
            {t('product_presentation_in_stock')}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 3 }}>
            {t('product_presentation_delivery_date', { startDate: deliveryDates.startDate, endDate:deliveryDates.endDate })}
          </Typography>

          {/* Shape Selection */}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            {t('product_presentation_table_shape')}
          </Typography>

          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom:2,
            gap: isMobile ? 2 : 2
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
          
          {shouldShowThicknessSection(pictures09.indexOf(selectedGalleryImage)) && (
  <>
    <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
      {t('product_presentation_thickness')}
    </Typography>
    
    <Grid2 container spacing={2} sx={{ marginBottom: 3 }}>
      <Grid2 item xs={6}>
        <Button
          fullWidth
          variant={thickness === "1.5" ? "contained" : "outlined"}
          onClick={() => setThickness("1.5")}
          sx={{
            backgroundColor: thickness === "1.5" ? "#9bc953" : "transparent",
            borderColor: "#9bc953",
            color: thickness === "1.5" ? "white" : "#9bc953",
            '&:hover': {
              backgroundColor: thickness === "1.5" ? "#8bb947" : "rgba(155, 201, 83, 0.1)",
              borderColor: "#9bc953"
            }
          }}
        >
          1.5 {t('mm')}
        </Button>
      </Grid2>
      <Grid2 item xs={6}>
        <Button
          fullWidth
          variant={thickness === "2" ? "contained" : "outlined"}
          onClick={() => setThickness("2")}
          sx={{
            backgroundColor: thickness === "2" ? "#9bc953" : "transparent",
            borderColor: "#9bc953",
            color: thickness === "2" ? "white" : "#9bc953",
            '&:hover': {
              backgroundColor: thickness === "2" ? "#8bb947" : "rgba(155, 201, 83, 0.1)",
              borderColor: "#9bc953"
            }
          }}
        >
          2 {t('mm')}
        </Button>
      </Grid2>
    </Grid2>
  </>
)}

            {/* Dimensions */}
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              {t('product_presentation_table_dimensions')}
            </Typography>

            {selectedShape !== null && renderDimensionFields()}

            {selectedShape === null && (
              <Typography variant="body2" color="textSecondary">
                {t('product_presentation_select_shape')}
              </Typography>
            )}
            {showMessage && (
              <Typography variant="body1" color="textSecondary">
                {t('product_presentation_enter_dimensions')}
              </Typography>
            )}
            <Box sx={{ marginTop: 3, textAlign: "center" }}>
  {/* Liste des nappes - toujours visible */}
  {tableCovers.map((cover, index) => {
  let dimensionsText = '';
 
  switch(cover.type) {
    case 'Cercle':
      dimensionsText = `${t("Diametre")} = ${cover.diametre}${t("cm")}`;
      break;
    case 'Octogone':
      dimensionsText = `${t("Longueur")} = ${cover.longueur}${t("cm")} | ${t("Arc")} = ${cover.arc}${t("cm")}`;
      break;
    case 'RectangleACoinsArrondis':
      dimensionsText = `${t("Longueur")} = ${cover.longueur}${t("cm")} | ${t("Largeur")} = ${cover.largeur}${t("cm")} | ${t("Rayon")} = ${cover.rayon}${t("cm")}`;
      break;
    case 'RectangleChanfreiné':
      dimensionsText = `${t("Longueur")} = ${cover.longueur}${t("cm")} | ${t("Largeur")} = ${cover.largeur}${t("cm")} | ${t("ArcA")} = ${cover.arcA}${t("cm")} | ${t("ArcB")} = ${cover.arcB}${t("cm")}`;
      break;
    case 'Rectangle':
      dimensionsText = `${t("Longueur")} = ${cover.longueur}${t("cm")} | ${t("Largeur")} = ${cover.largeur}${t("cm")}`;
      break;
  }
  
  // Calculer le prix à afficher en fonction de la logique mise à jour
  const displayPrice = cover.totalPrice !== undefined 
    ? cover.totalPrice 
    : (cover.area && cover.area < 0.49)
      ? Math.floor((cover.price * cover.area * (cover.quantity || 1)) + 105)
      : Math.floor(cover.price * (cover.quantity || 1));
  
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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
        <Typography variant="body2">
          [{t(cover.type)} {cover.materialType === 'transparente' 
            ? `${t('product_presentation_transparentse')} (${cover.thickness}${t("mm")})` 
            : cover.materialType === 'doree' 
              ? t('product_presentation_dore') 
              : t('product_presentation_mat')
          } {dimensionsText}]
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton
              sx={{backgroundColor:'#9BC953',color:'white' ,
              '&:hover': {
                  backgroundColor:'#9BC953',
                  border: '1px solid #9BC953',
                          }}}
              onClick={() => handleQuantityChange(index, Math.max(1, (cover.quantity || 1) - 1))}
              size="small"
            >
              <Minus size={16} />
            </IconButton>
            
            <Typography variant="body2">
              {cover.quantity || 1}
            </Typography>
            
            <IconButton
              sx={{backgroundColor:'#9BC953',color:'white' ,
              '&:hover': {
                  backgroundColor:'#9BC953',
                  border: '1px solid #9BC953',
                          }}}
              onClick={() => handleQuantityChange(index, (cover.quantity || 1) + 1)}
              size="small"
            >
              <Plus size={16} />
            </IconButton>
          </Box>
          
          <Typography variant="body2" sx={{ color: '#9BC953', fontWeight: 'bold' }}>
            {displayPrice} {t('dh')}
          </Typography>
        </Box>
      </Box>

      <Button
        onClick={() => handleRemoveCover(index)}
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
              <Box sx={{ marginTop: 3, textAlign: "center" }}>
                <Typography variant="h6" color="black">
                {t('product_presentation_total_price', { prixTotal })} 
                </Typography>
                <Typography variant="h17" color="black">
                  {t('product_presentation_free_shipping_note')}
                </Typography>
                <Button
                onClick={() => {
  let newCover;
  const isMaterialSpecial = pictures09.indexOf(selectedGalleryImage) === 1 || pictures09.indexOf(selectedGalleryImage) === 2;
  let materialType;
  
  if (pictures09.indexOf(selectedGalleryImage) === 0) {
    materialType = 'transparente';
  } else if (pictures09.indexOf(selectedGalleryImage) === 2) {
    materialType = 'doree';
  } else {
    materialType = 'matte';
  }
  
  // Calculer l'aire pour stockage
  let area;
  switch(selectedShape) {
    case 0: // Cercle
      area = (Number(dimensions.diametre)/100) * (Number(dimensions.diametre)/100);
      break;
    case 1: // Octogone
      area = (Number(dimensions.longueur)/100) * (Number(dimensions.longueur)/100);
      break;
    default: // Rectangles, etc.
      area = (Number(dimensions.longueur)/100) * (Number(dimensions.largeur)/100);
  }
  
  switch(selectedShape) {
    case 0: // Cercle
      newCover = {
        type: "Cercle",
        thickness: isMaterialSpecial ? null : thickness,
        materialType: materialType,
        diametre: dimensions.diametre,
        price: prixTotal,
        area: area // Stocker l'aire
      };
      break;
    case 1: // Octogone
      newCover = {
        type: "Octogone",
        thickness: isMaterialSpecial ? null : thickness,
        materialType: materialType,
        longueur: dimensions.longueur,
        arc: dimensions.arc,
        price: prixTotal,
        area: area // Stocker l'aire
      };
      break;
    case 2: // Rectangle à coins arrondis
      newCover = {
        type: "RectangleACoinsArrondis",
        thickness: isMaterialSpecial ? null : thickness,
        longueur: dimensions.longueur,
        materialType: materialType,
        largeur: dimensions.largeur,
        rayon: dimensions.arc,
        price: prixTotal,
        area: area // Stocker l'aire
      };
      break;
    case 3: // Rectangle chanfreiné
      newCover = {
        type: "RectangleChanfreiné",
        thickness: isMaterialSpecial ? null : thickness,
        longueur: dimensions.longueur,
        materialType: materialType,
        largeur: dimensions.largeur,
        arcA: dimensions.arca,
        arcB: dimensions.arcb,
        price: prixTotal,
        area: area // Stocker l'aire
      };
      break;
    case 4: // Rectangle
      newCover = {
        type: "Rectangle",
        thickness: isMaterialSpecial ? null : thickness,
        longueur: dimensions.longueur,
        materialType: materialType,
        largeur: dimensions.largeur,
        price: prixTotal,
        area: area // Stocker l'aire
      };
      break;
  }
  
  if (newCover) {
    const updatedCovers = [...tableCovers, newCover];
    setTableCovers(updatedCovers);
    
    // Calculer le nouveau prix total (somme de tous les articles)
    const newTotal = updatedCovers.reduce((sum, cover) => 
      sum + (cover.price * (cover.quantity || 1)), 0);
    setPrixTotal(newTotal);
    
    // Réinitialiser les états
    setDimensions({});
    setSelectedShape(null);
    setIsDynamicSVG(false);
  }
}}
                  variant="contained"
                  fullWidth
                  disabled={Object.values(dimensionErrors).some(error => error !== '')}
                  sx={{
                    backgroundColor: Object.values(dimensionErrors).some(error => error !== '') 
      ? "#ccc" 
      : "#9BC953",
    color: "white",
    fontWeight: "bold",
    borderRadius: "20px",
    padding: "12px 20px",
    marginTop: 2,
    textTransform: "none",
    "&:hover": {
      backgroundColor: dimensionErrors.longueur || dimensionErrors.largeur ? "#ccc" : "#7CA43B",
    },
    "&:disabled": {
      backgroundColor: "#ccc",
      color: "white",
    }
  }}
                >
                  {t('product_presentation_add_another')}
                </Button>
                </Box>
                </>
                
  )}

</Box>
</Box>


          

      <form onSubmit={handleSubmit} style={{ textAlign: isArabic ? 'right' : 'left' }}>
      
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        {t('product_presentation_your_info')}
      </Typography>

      <Grid2 container direction="column" spacing={2} sx={{ marginBottom: 3, textAlign: isArabic ? 'right' : 'left',
        flex: 1 }}>
        <Grid2 item xs={12}>
          <TextField
            label={t('product_presentation_email')}
            variant="standard"
            fullWidth
            value={formData.email}
            onChange={(e) => handleFormChange("email", e.target.value)}
            required
            sx={{ marginBottom: 2, "& .MuiInputLabel-root": { textAlign: isArabic ? "right" : "left", right: isArabic ? 0 : 'auto', left: isArabic ? 'auto' : 0 } }}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            label={t('product_presentation_full_name')}
            variant="standard"
            fullWidth
            value={formData.fullName}
            onChange={(e) => handleFormChange("fullName", e.target.value)}
            required
            sx={{ marginBottom: 2, "& .MuiInputLabel-root": { textAlign: isArabic ? "right" : "left", right: isArabic ? 0 : 'auto', left: isArabic ? 'auto' : 0 } }}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            label={t('product_presentation_phone')}
            variant="standard"
            fullWidth
            value={formData.phone}
            onChange={(e) => handleFormChange("phone", e.target.value)}
            required
            sx={{ marginBottom: 2, "& .MuiInputLabel-root": { textAlign: isArabic ? "right" : "left", right: isArabic ? 0 : 'auto', left: isArabic ? 'auto' : 0 } }}
          />
        </Grid2>
        <Grid2 item xs={12}>
          <TextField
            label={t('product_presentation_address')}
            variant="standard"
            fullWidth
            value={formData.address}
            onChange={(e) => handleFormChange("address", e.target.value)}
            required
            sx={{ marginBottom: 2, "& .MuiInputLabel-root": { textAlign: isArabic ? "right" : "left", right: isArabic ? 0 : 'auto', left: isArabic ? 'auto' : 0 } }}
          />
        </Grid2>
 
      </Grid2>
      <OrderSubmitButton 
  onSubmit={() => {
    setFormData({
      email: "",
      fullName: "",
      phone: "",
      address: "",
      promoCode: ""
    });
    setShowMessage(true)
    setPrixTotal(0);
    setTableCovers([]);
  }}
  formData={formData}
  prixTotal={prixTotal}
  tableCovers={tableCovers}
/>
    </form>
          <div style={{ marginTop: '4%' }}>
            <AssistanceComponent />
          </div>
        </Box>
      </Box>
    </Box>
  );
});

export default ProductPresentation;
