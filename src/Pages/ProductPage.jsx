import React, { useState } from 'react';
import TopNavigation from '../Components/TopNavigation';
import ProductPresentation from '../Components/ProductPresentation';
import Bestseler from '../Components/Bestseler';
import AssistanceComponent from '../Components/AssistanceComponent';
import Theendofthepage from '../Components/Theendofthepage';
import Footer from '../Components/Footer';
import Qcmpluspic from '../Components/Qcmpluspic';
import { Box } from '@mui/material';

const ProductPage = () => {
    const [selectedText, setSelectedText] = useState("Nappe transparente sur mesure chez Nappe.ma"); // Default text
    const [selectedtitre1, setSelectedtitre1] = useState("Découvrez l'élégance discrète de nos nappes transparentes sur mesure chez nappe.ma. À première vue, elles captivent par leur clarté cristalline, évoquant la beauté d'une surface en verre sans en présenter les risques. Chaque nappe, délicatement déroulée, adhère parfaitement à votre mobilier grâce à son poids, garantissant stabilité et élégance sans effort."); // Default text
    const [selectedtitre2, setSelectedtitre2] = useState("Idéale pour toute pièce de la maison, que ce soit votre table à manger, votre commode ou votre coiffeuse, notre nappe transparente transcende les attentes. Elle ne se contente pas d'ajouter une touche de sophistication ; elle offre une protection inégalée contre les rayures, les taches et l'usure quotidienne."); // Default text
    const [selectedtitre3, setSelectedtitre3] = useState("Aucune Tache sur Vos Tables"); // Default text
    const [selectedText2, setSelectedText2] = useState("Ne vous souciez plus de ce que vos enfants renversent sur la table à manger ni de la façon dont vous y faites face. Le film de table de 1.5 mm et 2 mm d’épaisseur protège efficacement votre belle table contre les agressions et ne laisse aucune chance aux taches. Il suffit d’essuyer le nappe transparente de la table et elle est à nouveau propre."); // Default text
    const [selectedtitre4, setSelectedtitre4] = useState("Transparente"); // Default text
    const [selectedText3, setSelectedText3] = useState("Gardez la vue sur votre belle table et ne cachez pas le grain. La surface reste visible et est encore plus accentuée par la feuille haute brillance."); // Default text
    
    const [title001, setSelectedTitle001] = useState("Nappe transparente"); // Default text
    const [title002, setSelectedTitle002] = useState("Conçu spécialement pour protéger votre table à manger."); // Default text

    
     

    const pictures = [
        "/assets/TransparantImages/6 (1).jpg",
        "/assets/TransparantImages/8.jpg",
        "/assets/TransparantImages/7.jpg",
        "/assets/ImageComponent/5.jpg",
    ];

    const ImageQcm1 = [
        "/assets/QcmImage/coll-img.png",
        
    ];
    const ImageQcm2 = [
        "/assets/QcmImage/collapse-mat.png",
       
    ];
    const ImageQcm3 = [
        "/assets/QcmImage/trior-machine.png",
         
    ];
    
    const pictures002 = [
        "/assets/Trior/nappe-tri-or-5.png",
        "/assets/Trior/nappe-tri-or-2.png",
        "/assets/Trior/nappe-tri-or-4.png",
    ];


    const pictures09 = [
        "/assets/TransparantImages/6 (1).jpg",
        "/assets/TransparantImages/nappe-mat-2.png",
        "/assets/TransparantImages/11.png",
    ];

    const pictures05 = [
        "/assets/MAT/nappe-mat-1.png",
        "/assets/MAT/nappe-mat-4.png",
        "/assets/MAT/nappe-mat-2 (1).png",
    ];

    const pictureso1 = [
        "/assets/ImageComponent/bg-img-2-mat.png",
    ];

    const picturesooo3 = [
        "/assets/ImageComponent/nappe-tri-or-1.png",
    ];


    const picturesoo2 = [
        "/assets/ImageComponent/bg-img-2.png",
    ];

    const pictureso2 = [
        "/assets/ImageComponent/bord-incline.png",
        "/assets/ImageComponent/des-taches-sur-la-table-mat.png",
    ];

    const picturesoo3 = [
        "/assets/ImageComponent/border.png",
        "/assets/ImageComponent/fast-clean.png",
    ];

    const picturesoo4 = [
        "/assets/ImageComponent/tri-or-1.png",
        "/assets/ImageComponent/tri-or-2.png",
    ];


 


    const [selectpictureso1, setSelectpictureso1] = useState(pictureso1); // Default text
    const [selectpictureso2, setSelectpictureso2] = useState(picturesoo3); // Default text
    const [pictures001, setSelectpictures001] = useState(pictures); // Default text
    const [pictures004, setSelectpictures004] = useState(ImageQcm1); // Default text



    // Handler for image clicks
    const handleImageClick = (index) => {
       if(index===0){
        setSelectedText("Nappe transparente sur mesure chez Nappe.ma")
        setSelectedtitre1("Découvrez l'élégance discrète de nos nappes transparentes sur mesure chez nappe.ma. À première vue, elles captivent par leur clarté cristalline, évoquant la beauté d'une surface en verre sans en présenter les risques. Chaque nappe, délicatement déroulée, adhère parfaitement à votre mobilier grâce à son poids, garantissant stabilité et élégance sans effort.")
        setSelectedtitre2("Idéale pour toute pièce de la maison, que ce soit votre table à manger, votre commode ou votre coiffeuse, notre nappe transparente transcende les attentes. Elle ne se contente pas d'ajouter une touche de sophistication ; elle offre une protection inégalée contre les rayures, les taches et l'usure quotidienne.")
        setSelectpictureso1(pictureso1)
        setSelectpictureso2(picturesoo3)
        setSelectedtitre3("Aucune Tache sur Vos Tables")
        setSelectedText2("Ne vous souciez plus de ce que vos enfants renversent sur la table à manger ni de la façon dont vous y faites face. Le film de table de 1.5 mm et 2 mm d’épaisseur protège efficacement votre belle table contre les agressions et ne laisse aucune chance aux taches. Il suffit d’essuyer le nappe transparente de la table et elle est à nouveau propre.")
        setSelectedtitre4("Transparente")
        setSelectedText3("Gardez la vue sur votre belle table et ne cachez pas le grain. La surface reste visible et est encore plus accentuée par la feuille haute brillance.")
        setSelectedTitle001("Nappe transparente")
        setSelectedTitle002("Conçu spécialement pour protéger votre table à manger.")
        setSelectpictures001(pictures)
        setSelectpictures004(ImageQcm1)
    }
       if(index===1){
        setSelectedText("La nappe mat")
        setSelectedtitre1("La nappe mat convient parfaitement aux tables et aux surfaces en verre extrêmement lisses. Sa surface légèrement mate ne permet pas la formation de bulles d’air.")
        setSelectedtitre2(" Que vous placiez le film de table sur la table à manger, la commode ou la coiffeuse, il a toujours un aspect de haute qualité et protège également la surface. ")
        setSelectpictureso1(pictureso1)
        setSelectpictureso2(pictureso2)
        setSelectedtitre3("Des taches sur la table ?")
        setSelectedText2("Ne vous souciez plus de ce que vos enfants renversent sur la table à manger ni de la façon dont vous y faites face. Le film de table de 1.5 mm et 2 mm d’épaisseur protège efficacement votre belle table contre les agressions et ne laisse aucune chance aux taches. Il suffit d’essuyer le nappe transparente de la table et elle est à nouveau propre.")
        setSelectedtitre4("Bord incliné")
        setSelectedText3("Il est difficile de croire qu’un bord incliné sur les bords du film puisse augmenter autant le confort d’assise. Les bords durs à angle droit peuvent entraîner une coupure désagréable dans l’avant-bras. Convainquez-vous en et remarquez déjà lorsque vous mettez le film mat qu’il se pose harmonieusement sur la table.")
        setSelectedTitle001("Nappe mat")
        setSelectedTitle002("Conçu spécialement pour protéger votre table à manger.")
        setSelectpictures001(pictures05)
        setSelectpictures004(ImageQcm2)
       }
       if(index===2){
        setSelectedText("Tri-Or: L'Héritage du Zelij dans votre Salon")
        setSelectedtitre1("Dans un coin tranquille du Maroc, où l'art et la tradition se mêlent, naît une nappe unique : la nappe Tri-Or. Inspirée par le riche héritage du Zelij marocain, cette création transparente est une célébration de l'artisanat marocain, conçue pour faire rayonner la tradition dans les foyers modernes. ")
        setSelectedtitre2(" Plus qu'un simple protecteur de table, elle sert de pont entre les traditions millénaires et l'esthétique contemporaine. Facile à nettoyer et sur mesure, elle sublime chaque salon marocain, y ajoutant une touche d'élégance discrète. ")
        setSelectpictureso1(picturesooo3)
        setSelectpictureso2(picturesoo4)
        setSelectedtitre3("Praticité et Durabilité")
        setSelectedText2("Conçue pour la vie quotidienne, cette nappe ne se contente pas d'embellir ; elle offre une protection durable et facile d'entretien pour vos tables, résistant aux taches et aux liquides tout en étant simple à nettoyer.")
        setSelectedtitre4("Élégance et Tradition Renouvelée")
        setSelectedText3("La nappe Tri-Or, avec ses motifs inspirés du Zelij marocain, apporte une touche d'élégance intemporelle à votre intérieur, fusionnant harmonieusement l'art ancestral marocain avec une esthétique moderne.")
        setSelectedTitle001("Nappe Tri-or")
        setSelectedTitle002("Conçue spécialement pour sublimer votre salon marocain.")
        setSelectpictures001(pictures002)
        setSelectpictures004(ImageQcm3)
        
       }
    };

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
            <ProductPresentation
                title={title001}
                text={title002}
                pictures={pictures001}
                pictures09={pictures09}
                onImageClick={handleImageClick} // Pass the handler to ProductPresentation
            />
            <Theendofthepage
                text={selectedText} // Use the selected text
                titre1={selectedtitre1}
                titre2={selectedtitre2}
                pictureso1={selectpictureso1}
                pictureso2={ selectpictureso2}
                titre3={ selectedtitre3} 
                text2={selectedText2}
                titre4={selectedtitre4}
                text3={selectedText3}
            />
            <Qcmpluspic 
                image={pictures004}
            />
            <Footer />
        </Box>
    );
};

export default ProductPage;