const BASE_URL = 'https://northwind.vercel.app/api/products';

export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
};
