import React from 'react';
import TopNavigation from '../Components/TopNavigation';
import ProductPresentation from '../Components/ProductPresentation';
import Bestseler from '../Components/Bestseler';
import AssistanceComponent from '../Components/AssistanceComponent';
import Theendofthepage from '../Components/Theendofthepage';
import Footer from '../Components/Footer';
import Qcmpluspic from '../Components/Qcmpluspic';

import { Box, Link, Typography } from '@mui/material';


const ProductPage = () => {
    const pictures = [
        "/assets/TransparantImages/6 (1).jpg",
        "/assets/TransparantImages/8.jpg",
        "/assets/TransparantImages/7.jpg",
        "/assets/ImageComponent/5.jpg",
    ];

    const pictures09 = [
        "/assets/TransparantImages/6 (1).jpg",
        "/assets/TransparantImages/nappe-mat-2.png",
        "/assets/TransparantImages/11.png",
         
    ];

    const pictureso1 = [
        "/assets/ImageComponent/bg-img-2-mat.png",
      
    ];
    const pictureso2 = [
          "/assets/TransparantImages/8.jpg",
        "/assets/TransparantImages/7.jpg",
    ];

    return (
        <Box 
         sx={{ 
                width: '100%',
                 
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
             >
            <TopNavigation />
                 {/* Colonne gauche */}
                     <ProductPresentation
                        title="Nappe transparente"
                        text="Conçu spécialement pour protéger votre table à manger."
                        pictures={pictures}
                        pictures09={pictures09}
                    />
 
               

            <Theendofthepage
                text="Nappe transparente sur mesure chez Nappe.ma"
                titre1="Découvrez l'élégance discrète de nos nappes transparentes sur mesure chez nappe.ma. À première vue, elles captivent par leur clarté cristalline, évoquant la beauté d'une surface en verre sans en présenter les risques. Chaque nappe, délicatement déroulée, adhère parfaitement à votre mobilier grâce à son poids, garantissant stabilité et élégance sans effort."
                titre2="Idéale pour toute pièce de la maison, que ce soit votre table à manger, votre commode ou votre coiffeuse, notre nappe transparente transcende les attentes. Elle ne se contente pas d'ajouter une touche de sophistication ; elle offre une protection inégalée contre les rayures, les taches et l'usure quotidienne."
                pictureso1 ={pictureso1}
                pictureso2={pictureso2}
                titre3="Aucune Tache sur Vos Tables"
                text2="Ne vous souciez plus de ce que vos enfants renversent sur la table à manger ni de la façon dont vous y faites face. Le film de table de 1.5 mm et 2 mm d’épaisseur protège efficacement votre belle table contre les agressions et ne laisse aucune chance aux taches. Il suffit d’essuyer le nappe transparente de la table et elle est à nouveau propre."
                titre4="Transparente"
                text3="Gardez la vue sur votre belle table et ne cachez pas le grain. La surface reste visible et est encore plus accentuée par la feuille haute brillance."
            />
            <Qcmpluspic/>
            <Footer/>
        </Box>
    );
};

export default ProductPage;
