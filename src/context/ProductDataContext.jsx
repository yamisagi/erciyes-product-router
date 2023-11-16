import React, { createContext, useState, useContext } from 'react';

export const ProductDataContext = createContext();

const ProductDataContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductDataContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductDataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductData = () => {
  const context = useContext(ProductDataContext);
  if (context === undefined) {
    throw new Error(
      'useProductData must be used within a ProductDataContextProvider'
    );
  }
  return context;
};

export default ProductDataContextProvider;
