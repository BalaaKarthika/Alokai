import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { useCart } from '../Context/CartContext';  

const SkeletonLoader = () => (
  <div className="product-card border border-neutral-200 rounded-lg shadow-md p-4 animate-pulse">
    <div className="w-36 h-36 bg-neutral-300 rounded-md mb-4"></div>
    <div className="h-5 bg-neutral-300 rounded-md mb-2"></div>
    <div className="h-4 bg-neutral-300 rounded-md mb-2"></div>
    <div className="h-6 bg-neutral-300 rounded-md mb-4 w-1/2"></div>
    <div className="h-10 bg-neutral-300 rounded-md"></div>
  </div>
);

const BrowseProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);  
  const location = useLocation();
  const categoryQuery = new URLSearchParams(location.search).get('category');
  const { addToCart } = useCart(); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (categoryQuery) {
      const filtered = products.filter((product) =>
        product.category.toLowerCase() === categoryQuery.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [categoryQuery, products]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAlert(true); 
    setTimeout(() => {
      setShowAlert(false); 
    }, 3000);
  };

  const handleBackClick = () => {
    window.history.back();
  };

  if (loading) {
    return (
      <div className="mt-20">
        <Header />
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
        </div>
        <Footer />
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="mt-20">
        <Header />
      </div>
      {showAlert && (
        <div className="fixed top-[calc(4rem+1rem)] right-4 flex items-center bg-green-500 text-white text-lg py-2 px-4 rounded-md shadow-lg z-50">
          <span>Cart Updated</span>
        </div>
      )}
      <button
        onClick={handleBackClick}
        className="absolute top-20 right-2 text-white bg-green-600 p-2 shadow-md hover:bg-green-800 focus:outline-none rounded-md z-10"
      >
        Back to Shopping
      </button>

      <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card border border-neutral-200 rounded-lg shadow-md hover:shadow-lg p-4">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-36 h-36 object-cover rounded-md mb-4" 
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <p className="text-lg font-bold text-gray-900 mb-4">${product.price}</p>
              <button
                onClick={() => handleAddToCart(product)} 
                className="w-full py-2 bg-green-700 text-white rounded-md hover:bg-blue-500 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BrowseProducts;
