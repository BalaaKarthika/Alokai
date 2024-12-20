import React, { useState } from 'react';
import Contactform from '../component/Contactform';
import BillingAddress from '../component/BillingAddress';
import PaymentMethod from '../component/PaymentMethod';
import Orders from '../component/Orders';
import Header from '../component/Header';
import ShippingAddress from '../component/ShippingAddress';

const CheckOut = () => {
  const [activeForm, setActiveForm] = useState('');

  const handleFormToggle = (formName) => {
    setActiveForm((prevForm) => (prevForm === formName ? '' : formName)); 
  };
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-20"> 
      <Header />
      <button
        onClick={handleBackClick}
        className="absolute top-24 right-2 text-white bg-green-600 p-2 shadow-md hover:bg-green-800 focus:outline-none rounded-md z-10"
      >
        Back to Shopping
      </button>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side */}
        <div className="flex-1 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-4xl font-bold mb-4">Checkout</h2>
          
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <h6>Add your email and phone number to communicate with the store</h6>

          <button
            onClick={() => handleFormToggle('contact')}
            className="w-full mb-4 py-2 px-4 bg-green-700 text-white rounded-md"
          >
            Contact Information
          </button>
          {activeForm === 'contact' && <Contactform />} 

          <hr className="my-4" />
          <h3 className="text-xl font-bold mb-4">Billing Address</h3>
          <h6>Add a billing address. You will receive the invoice to the email address provided above.</h6>
          <button
            onClick={() => handleFormToggle('billing')}
            className="w-full mb-4 py-2 px-4 bg-green-700 text-white rounded-md"
          >
            Billing Address
          </button>
          {activeForm === 'billing' && <BillingAddress />} 

          <hr className="my-4" />
          <h3 className="text-xl font-bold mb-4">Shipping Address</h3>
          <h6>Add a shipping address to view shipping details.</h6>
          <button
            onClick={() => handleFormToggle('shipping')}
            className="w-full mb-4 py-2 px-4 bg-green-700 text-white rounded-md"
          >
            Shipping Address
          </button>
          {activeForm === 'shipping' && <ShippingAddress />} 
          <hr className="my-4" />
          <PaymentMethod />
        </div>
        <div className="flex-1 bg-gray-100 p-6 rounded-md shadow-md">
          <Orders />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
