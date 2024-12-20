import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import BreadCrumbscategory from '../component/BreadCrumbscategory';
import SingleProductDetails from '../component/SingleProductDetails';
import SingleProduct from '../component/SingleProduct';
import Footer from '../component/Footer';
import Header from '../component/Header';
import ScrollBottomtoTop from '../component/ScrollBottomtoTop';

const ProductsDetails = () => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Product not found');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div>
      <Header />
      <button
        onClick={handleBackClick}
        className="absolute top-24 right-6 text-white bg-green-700 p-2 shadow-md hover:bg-green-800 focus:outline-none rounded-md"
      >
        --Back
      </button>

      <div className="min-h-screen bg-gray-50 pt-16"> 
        <div className="p-10 max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-4">
              <SingleProduct product={product} />
            </div>
            <div className="flex-1 p-4">
              <SingleProductDetails product={product} />
            </div>
          </div>
          <Footer />
          <ScrollBottomtoTop />
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
