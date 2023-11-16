import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../service/productService';
import { useProductData } from '../context/ProductDataContext';

const Table = () => {
  const { products, setProducts, setSelectedId } = useProductData();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProducts();
        response.sort((a, b) => a.id - b.id);
        setProducts(response);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getData();
    // Eğer setProducts fonksiyonunu dependency array içerisine eklersek sonsuz döngüye gireriz.
    // Çünkü setProducts fonksiyonu her render olduğunda değişecektir. Her ne kadar içerik aynı olsa da fonksiyonun referansı değişecektir :)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='py-6 px bg-gray-100'>
      <div className='w-full xl:w-8/12 bg-white mx-auto'>
        <div className='bg-white shadow-lg rounded p-2'>
          <div className='px-4 py-3 border-b-2 border-gray-200'>
            <h3 className='font-semibold text-base text-indigo-700'>
              Product Information
            </h3>
          </div>
          <div className='block w-full overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-gray-200'>
                  <th className='px-2 sm:px-6 py-3 text-xs sm:text-sm uppercase font-semibold text-left'>
                    ID
                  </th>
                  <th className='px-2 sm:px-6 py-3 text-xs sm:text-sm uppercase font-semibold text-left'>
                    Name
                  </th>
                  <th className='px-2 sm:px-6 py-3 text-xs sm:text-sm uppercase font-semibold text-left'>
                    Unit Price
                  </th>
                  <th className='px-2 sm:px-6 py-3 text-xs sm:text-sm uppercase font-semibold text-left'>
                    Stock
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan='4' className='text-center'>
                      <div className='flex justify-center items-center'>
                        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900' />
                      </div>
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan='4' className='text-center'>
                      <div className='flex justify-center items-center'>
                        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900' />
                      </div>
                    </td>
                  </tr>
                ) : (
                  products?.map((product) => (
                    <tr key={product.id}>
                      <td className='px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap'>
                        <Link
                          to={`/detail/${product.id}`}
                          onClick={() => setSelectedId(product.id)}
                          className='text-indigo-700 hover:text-indigo-900'
                        >
                          {product.id}
                        </Link>
                      </td>
                      <td className='px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap'>
                        {product.name}
                      </td>
                      <td className='px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap'>
                        {product.unitPrice}
                      </td>
                      <td className='px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap'>
                        {product.unitsInStock}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
