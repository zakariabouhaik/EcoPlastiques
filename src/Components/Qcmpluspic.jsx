import React from 'react';
import ProductInfo from './ProductInfo';

const Qcmpluspic = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Occupe toute la hauteur de la page
      }}
    >
      {/* Première moitié : ProductInfo */}
      <div style={{ flex: 1, padding: '20px' }}>
        <ProductInfo />
      </div>

      {/* Deuxième moitié : Image */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="/assets/ImageComponent/5.jpg"
          alt="EcoPlastique logo"
          style={{
            maxWidth: '80%',
            height: 'auto',
            borderRadius:10
          }}
        />
      </div>
    </div>
  );
};

export default Qcmpluspic;
