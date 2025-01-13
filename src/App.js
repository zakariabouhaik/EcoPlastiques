import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import Test from './Pages/Test';
import { useTranslation } from 'react-i18next';
import ContactForm from './Pages/ContactForm';
import PolitiquedeConfide from './Pages/PolitiquedeConfide';
import Proposdenous from './Pages/Proposdenous';
import PolitiqueRetourRemboursement from './Pages/PolitiqueRetourRemboursement';

const App = () => {
  const {t} = useTranslation();
  const object = t("Home");
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/Confidentialite" element={<PolitiquedeConfide/>} />
          <Route path="/A_propos_de_nous" element={<Proposdenous/>} />
          <Route path="/Politique_retour_remboursement" element={<PolitiqueRetourRemboursement/>} />
          <Route path="*" element={<div>Page non trouvée</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;