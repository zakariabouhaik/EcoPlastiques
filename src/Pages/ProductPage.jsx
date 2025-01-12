import React, { useState, useEffect,forwardRef, useRef} from 'react';
import TopNavigation from '../Components/TopNavigation';
import ProductPresentation from '../Components/ProductPresentation';
import Bestseler from '../Components/Bestseler';
import AssistanceComponent from '../Components/AssistanceComponent';
import Theendofthepage from '../Components/Theendofthepage';
import Footer from '../Components/Footer';
import Qcmpluspic from '../Components/Qcmpluspic';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const ProductPage = () => {

    const qcmRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    const productPresentationRef = useRef(null);
    const location = useLocation();

    const {t, i18n} = useTranslation();

    const [selectedText, setSelectedText] = useState('');
    const [selectedtitre1, setSelectedtitre1] = useState('');
    const [selectedtitre2, setSelectedtitre2] = useState('');
    const [selectedtitre3, setSelectedtitre3] = useState('');
    const [selectedText2, setSelectedText2] = useState('');
    const [selectedtitre4, setSelectedtitre4] = useState('');
    const [selectedText3, setSelectedText3] = useState('');
    const [title001, setSelectedTitle001] = useState('');
    const [title002, setSelectedTitle002] = useState('');
   
  const selectedIndex = location.state?.selectedIndex ?? 0;


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
        "/assets/Trior/nappe-Dorée-5.png",
        "/assets/Trior/nappe-Dorée-2.png",
        "/assets/Trior/nappe-Dorée-4.png",
    ];


    const pictures09 = [
        "/assets/TransparantImages/6 (1).jpg",
        "/assets/TransparantImages/nappe-mat-2.png",
        "/assets/TransparantImages/11.png",
    ];

    useEffect(() => {
        const selectedIndex = location.state?.selectedIndex ?? 0;
        handleImageClick(selectedIndex);
    },[location.state?.selectedIndex, i18n.language]);

    const pictures05 = [
        "/assets/MAT/nappe-mat-1.png",
        "/assets/MAT/nappe-mat-4.png",
        "/assets/MAT/nappe-mat-2 (1).png",
    ];

    const pictureso1 = [
        "/assets/ImageComponent/bg-img-2-mat.png",
    ];

    const picturesooo3 = [
        "/assets/ImageComponent/nappe-Dorée-1.png",
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
        "/assets/ImageComponent/Dorée-1.png",
        "/assets/ImageComponent/Dorée-2.png",
    ];


    


    const [selectpictureso1, setSelectpictureso1] = useState(pictureso1); // Default text
    const [selectpictureso2, setSelectpictureso2] = useState(picturesoo3); // Default text
    const [pictures001, setSelectpictures001] = useState(pictures); // Default text
    const [pictures004, setSelectpictures004] = useState(ImageQcm1); // Default text
   

    // Handler for image clicks
    const handleImageClick = (index) => {
        if (index === 0) {
            setSelectedText(t("product_page1"));
            setSelectedtitre1(t("product_page2"));
            setSelectedtitre2(t("product_page3"));
            setSelectedtitre3(t("product_page4"));
            setSelectedText2(t("product_page5"));
            setSelectedtitre4(t("product_page6"));
            setSelectedText3(t("product_page7"));
            setSelectedTitle001(t("product_page8"));
            setSelectedTitle002(t("product_page9"));
            setSelectpictureso1(pictureso1);
            setSelectpictureso2(picturesoo3);
            setSelectpictures001(pictures);
            setSelectpictures004(ImageQcm1);
        }
        if (index === 1) {
            setSelectedText(t("product_page10"));
            setSelectedtitre1(t("product_page11"));
            setSelectedtitre2(t("product_page12"));
            setSelectedtitre3(t("product_page13"));
            setSelectedText2(t("product_page14"));
            setSelectedtitre4(t("product_page15"));
            setSelectedText3(t("product_page16"));
            setSelectedTitle001(t("product_page17"));
            setSelectedTitle002(t("product_page18"));
            setSelectpictureso1(pictureso1);
            setSelectpictureso2(pictureso2);
            setSelectpictures001(pictures05);
            setSelectpictures004(ImageQcm2);
        }
        if (index === 2) {
            setSelectedText(t("product_page19"));
            setSelectedtitre1(t("product_page20"));
            setSelectedtitre2(t("product_page21"));
            setSelectedtitre3(t("product_page22"));
            setSelectedText2(t("product_page23"));
            setSelectedtitre4(t("product_page24"));
            setSelectedText3(t("product_page25"));
            setSelectedTitle001(t("product_page26"));
            setSelectedTitle002(t("product_page27"));
            setSelectpictureso1(picturesooo3);
            setSelectpictureso2(picturesoo4);
            setSelectpictures001(pictures002);
            setSelectpictures004(ImageQcm3);
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
            ref={qcmRef}  
                title={title001}
                text={title002}
                pictures={pictures001}
                pictures09={pictures09}
                onImageClick={handleImageClick} // Pass the handler to ProductPresentation
                initialIndex={location.state?.selectedIndex ?? 0}
            />
            <Theendofthepage
            ref={productPresentationRef}  
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
          <Box id="qcm-section" ref={qcmRef}>
                <Qcmpluspic
                    image={pictures004}
                />
            </Box>
            <Footer />
        </Box>
    );
};

export default ProductPage;