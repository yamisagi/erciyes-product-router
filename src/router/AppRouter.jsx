import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Navbar from '../components/Navbar';

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default AppRouter;
