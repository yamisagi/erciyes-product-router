import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../service/productService';

const Table = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getProducts();
        setData(response);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <section className='py-4 bg-gray-100'>
      <div className='w-full xl:w-8/12 mx-auto mt-12'>
        <div className='bg-white shadow-lg rounded'>
          <div className='px-4 py-3 border-b-2 border-gray-200'>
            <h3 className='font-semibold text-base text-indigo-700'>
              Product Information
            </h3>
          </div>
          <div className='block w-full overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-gray-200'>
                  <th className='px-6 py-3 text-xs uppercase font-semibold text-left'>
                    ID
                  </th>
                  <th className='px-6 py-3 text-xs uppercase font-semibold text-left'>
                    Name
                  </th>
                  <th className='px-6 py-3 text-xs uppercase font-semibold text-left'>
                    Unit Price
                  </th>
                  <th className='px-6 py-3 text-xs uppercase font-semibold text-left'>
                    Stock
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>/argon/</td>
                  <td className='px-6 py-4 whitespace-nowrap'>4,569</td>
                  <td className='px-6 py-4 whitespace-nowrap'>340</td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <i className='fas fa-arrow-up text-green-500 mr-2' />
                    46.53%
                  </td>
                </tr> */}
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
                  data?.map((product) => (
                    <tr key={product.id}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {product.id}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {product.name}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {product.unitPrice}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
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
