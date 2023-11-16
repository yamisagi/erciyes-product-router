import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductData } from '../context/ProductDataContext';
const ProductDetail = () => {
  const { products } = useProductData();
  
  console.log(products);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    if (products.length === 0 || id == 'null') {
      // string olarak yazmamızın sebebi useParams hook'unun id'yi string olarak döndürmesi
      navigate('/');
      return;
    }
  }, [products, navigate, id]);

  const currentProduct = products.find((product) => product.id === Number(id));

  return (
    <div className='container mx-auto mt-8 p-6 text-center bg-gray-100 rounded-lg shadow-md'>
      <div className='flex flex-col items-center'>
        <div className='md:w-1/2 md:ml-8 mt-4 md:mt-0'>
          <h1 className='text-4xl font-bold text-indigo-700 mb-2'>
            {currentProduct?.name}
          </h1>
          <p className='text-gray-600 mb-2'>
            <span className='font-semibold'>ID:</span> {currentProduct?.id}
          </p>
          <p className='text-gray-600 mb-2'>
            <span className='font-semibold'>Category ID:</span>{' '}
            {currentProduct?.categoryId}
          </p>
          <p className='text-gray-600 mb-2'>
            <span className='font-semibold'>Supplier ID:</span>{' '}
            {currentProduct?.supplierId}
          </p>
          <p className='text-gray-600 mb-2'>
            <span className='font-semibold'>Quantity Per Unit:</span>{' '}
            {currentProduct?.quantityPerUnit}
          </p>
          <p className='text-gray-600 mb-2'>
            <span className='font-semibold'>Unit Price:</span> $
            {currentProduct?.unitPrice?.toFixed(2)}
          </p>
          <p className='text-gray-600 mb-2'>
            <span className='font-semibold'>Units in Stock:</span>{' '}
            {currentProduct?.unitsInStock}
          </p>
          <p className='text-gray-600 mb-2'>
            <span className='font-semibold'>Units on Order:</span>{' '}
            {currentProduct?.unitsOnOrder}
          </p>
          <p className='text-gray-600 mb-2'>
            <span className='font-semibold'>Reorder Level:</span>{' '}
            {currentProduct?.reorderLevel}
          </p>
          <p
            className={`text-${
              currentProduct?.discontinued ? 'red' : 'green'
            }-600 font-semibold mt-2`}
          >
            {currentProduct?.discontinued ? 'Discontinued' : 'Available'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
