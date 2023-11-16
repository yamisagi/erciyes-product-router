import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const ProductDetail = ({product}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    navigate('/');
    return null;
  }

  return (
    <div className="container mx-auto mt-8">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img src={`https://placekitten.com/400/300`} alt={product.name} className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-2">ID: {product.id}</p>
        <p className="text-gray-600 mt-2">Category ID: {product.categoryId}</p>
        <p className="text-gray-600 mt-2">Supplier ID: {product.supplierId}</p>
        <p className="text-gray-600 mt-2">Quantity Per Unit: {product.quantityPerUnit}</p>
        <p className="text-gray-600 mt-2">Unit Price: ${product.unitPrice.toFixed(2)}</p>
        <p className="text-gray-600 mt-2">Units in Stock: {product.unitsInStock}</p>
        <p className="text-gray-600 mt-2">Units on Order: {product.unitsOnOrder}</p>
        <p className="text-gray-600 mt-2">Reorder Level: {product.reorderLevel}</p>
        <p className={`text-${product.discontinued ? 'red' : 'green'}-600 mt-2`}>
          {product.discontinued ? 'Discontinued' : 'Available'}
        </p>
        {/* Diğer içerikler */}
      </div>
    </div>
  </div>
  );
};

export default ProductDetail;
