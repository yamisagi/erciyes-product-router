import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Navbar from '../components/Navbar';
import { useProductData } from '../context/ProductDataContext';

const AppRouter = () => {
  const { products } = useProductData();
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/detail/:id'
          element={<ProductDetail product={products} />}
        />
      </Routes>
    </>
  );
};

export default AppRouter;
