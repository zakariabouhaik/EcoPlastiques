import React from 'react';
import TopNavigation from '../Components/TopNavigation';
import ProductPresentation from '../Components/ProductPresentation';
import Bestseler from '../Components/Bestseler';
import AssistanceComponent from '../Components/AssistanceComponent';
import Theendofthepage from '../Components/Theendofthepage';
import Footer from '../Components/Footer';
import Qcmpluspic from '../Components/Qcmpluspic';

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
        <div style={{margin:5}}>
            <TopNavigation />
                 {/* Colonne gauche */}
                     <ProductPresentation
                        title="Nappe transparente"
                        text="Conçu spécialement pour protéger votre table à manger."
                        pictures={pictures}
                        pictures09={pictures09}
                    />
 
               

            <Theendofthepage
                text="nnnn"
                titre1="eeeee"
                titre2="etgt4g4"
                pictureso1 ={pictureso1}
                pictureso2={pictureso2}
                titre3="egberjer"
                text2="wbjkwenjwenf"
            />
            <Qcmpluspic/>
            <Footer/>
        </div>
    );
};

export default ProductPage;
