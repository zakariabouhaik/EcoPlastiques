import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Alert, Box, CircularProgress, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

const OrderSubmitButton = ({ onSubmit, formData, prixTotal, tableCovers }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: '',
    fullName: '',
    phone: '',
    address: '',
    cart: ''
  });
  const { t } = useTranslation();
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      fullName: '',
      phone: '',
      address: '',
      cart: ''
    };

    // Validation du panier
    if (!tableCovers || tableCovers.length === 0) {
      newErrors.cart = t('Veuillez ajouter au moins un article au panier');
      isValid = false;
    }

    // Validation de l'email
    if (!formData.email) {
      newErrors.email = t('Veuillez entrer votre email');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('Email invalide');
      isValid = false;
    }

    // Validation du nom complet
    if (!formData.fullName) {
      newErrors.fullName = t('Veuillez entrer votre nom complet');
      isValid = false;
    }

    // Validation du téléphone
    if (!formData.phone) {
      newErrors.phone = t('Veuillez entrer votre numéro de téléphone');
      isValid = false;
    }

    // Validation de l'adresse
    if (!formData.address) {
      newErrors.address = t('Veuillez entrer votre adresse complète');
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };


   const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    
    return `${day}/${month}/${year} à ${hours}:${minutes}`;
  };


  const handleSubmitWithLoading = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("Email", formData.email);
    formDataToSubmit.append("Nom_complet", formData.fullName);
    formDataToSubmit.append("Telephone", formData.phone);
    formDataToSubmit.append("Adresse", formData.address);
    formDataToSubmit.append("PrixTotal", `${prixTotal} DHs`);
    
    // FIX: Utiliser CodePromo (avec C majuscule) pour correspondre au nom dans ProductPresentation
    formDataToSubmit.append("Code_Promo", formData.CodePromo || "Aucun");
    formDataToSubmit.append("Date_Commande", getCurrentDate());
    
    
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

    formDataToSubmit.append("Commande", orderDetails);
    
    // For debugging purposes
    console.log("Form data being submitted:");
    for (let pair of formDataToSubmit.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwt-9cBiZyAtA5H7oSKEUMnrV-lr8JufQDnsn9kjTsitV2ztXhWlTSBIAyV6q0GbH4z/exec",
        {
          method: "POST",
          body: formDataToSubmit
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        if (onSubmit) {
          onSubmit();
        }
        // Réinitialisation des erreurs
        setFormErrors({
          email: '',
          fullName: '',
          phone: '',
          address: '',
          cart: ''
        });
        // Redirection vers la page de remerciement
        navigate('/thankyou');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      {/* Affichage des erreurs groupées par catégorie */}
      {Object.entries(formErrors).map(([key, error]) => 
        error ? (
          <Alert 
            key={key}
            severity="error"
            sx={{ 
              mb: 1,
              backgroundColor: '#fff2f0',
              color: '#ff4d4f'
            }}
          >
            <Typography variant="body2">{error}</Typography>
          </Alert>
        ) : null
      )}

      <Button
        type="submit"
        onClick={handleSubmitWithLoading}
        disabled={isLoading}
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
        {isLoading ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CircularProgress size={20} color="inherit" />
            <Typography>{t('loading')}</Typography>
          </Box>
        ) : (
          t('product_presentation_order_now')
        )}
      </Button>
    </Box>
  );
};

export default OrderSubmitButton;