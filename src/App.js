import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import Test from './Pages/Test';
import { useTranslation } from 'react-i18next';

const App = () => {
  const {t} = useTranslation();
  const object = t("Home");
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;