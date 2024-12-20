import React from 'react';
import MyCart from './component/MyCart';
import OrderSummary from './component/OrderSummary';
import Footer from './component/Footer';
import Header from './component/Header'; 

export const CartDetails = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div>
      <div className="mb-4"> 
        <Header />
      </div>
      <button
        onClick={handleBackClick}
        className="absolute top-24 right-2 text-white bg-green-600 p-2 shadow-md hover:bg-green-800 focus:outline-none rounded-md z-10"
      >
        Back to Shopping
      </button>
      <div className="min-h-screen bg-gray-50 pt-16"> 
        <div className="p-10 max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
            <div className="flex-1 bg-gray-100 p-8 rounded-md shadow-lg md:mr-6">
              <MyCart />
            </div>
            <div className="flex-1 bg-gray-200 p-8 rounded-md shadow-lg mt-6 md:mt-0">
              <OrderSummary />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
