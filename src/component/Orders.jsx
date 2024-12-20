import React, { useState, useEffect, useRef } from 'react';
import { SfButton, SfInput } from '@storefront-ui/react';
import { Link } from 'react-router-dom';
import { useCart } from "../Context/CartContext";

export default function Orders() {
  const { cartItems } = useCart();
  const [inputValue, setInputValue] = useState('');
  const [promoCode, setPromoCode] = useState(0);
  const [errorAlert, setErrorAlert] = useState(false);
  const errorTimer = useRef(0);
  useEffect(() => {
    clearTimeout(errorTimer.current);
    errorTimer.current = window.setTimeout(() => setErrorAlert(false), 5000);
    return () => clearTimeout(errorTimer.current);
  }, [errorAlert]);

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

  const itemsSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const totalPrice = () => itemsSubtotal() + promoCode;
  const checkPromoCode = (event) => {
    event.preventDefault();

    if (inputValue.toUpperCase() === 'VSF2020') {
      const newTotalPrice = totalPrice() - 100;
      if (newTotalPrice >= 200) {
        setPromoCode(-100);  
      } else {
        setErrorAlert(true);
      }
    } else if (inputValue) {
      setErrorAlert(true); 
    }
  };
  const removePromoCode = () => {
    setPromoCode(0);
  };
  return (
    <div>
      {errorAlert && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 flex items-center bg-red-500 text-white text-lg font-semibold py-2 px-3 rounded-md shadow-lg z-50">
          <span>Promo code is only valid for orders above $200</span>
        </div>
      )}
      <div className="md:shadow-lg md:rounded-md md:border md:border-neutral-100 mt-16"> 
        <div className="flex justify-between items-end bg-neutral-100 md:bg-transparent py-2 px-4 md:px-6 md:pt-6 md:pb-4">
          <p className="typography-headline-4 font-bold md:typography-headline-3">Order Summary</p>
          <p className="typography-text-base font-medium">(Items: {cartItems.length})</p>
        </div>
        <div className="px-4 pb-4 mt-3 md:px-6 md:pb-6 md:mt-0">
          <div className="flex justify-between typography-text-base pb-4">
            <div className="flex flex-col grow pr-2">
              <p>Items Subtotal</p>
              <p className="my-2">Estimated Sales Tax</p>
              <p>Delivery</p>
            </div>
            <div className="flex flex-col text-right">
              <p>{formatPrice(itemsSubtotal())}</p>
              <p>{formatPrice(0)}</p> 
            </div>
          </div>

          {promoCode ? (
            <div className="flex items-center mb-5 py-5 border-y border-neutral-200">
              <p>PromoCode</p>
              <SfButton size="sm" variant="tertiary" className="ml-auto mr-2" onClick={removePromoCode}>
                Remove
              </SfButton>
              <p>{formatPrice(promoCode)}</p>
            </div>
          ) : (
            <form className="flex gap-x-2 py-4 border-y border-neutral-200 mb-4" onSubmit={checkPromoCode}>
              <SfInput
                value={inputValue}
                placeholder="Enter promo code"
                wrapperClassName="grow"
                onChange={(event) => setInputValue(event.target.value)}
              />
              <SfButton type="submit" variant="secondary">
                Apply
              </SfButton>
            </form>
          )}
          <div className="flex justify-between typography-headline-4 md:typography-headline-3 font-bold pb-4 mb-4 border-b border-neutral-200">
            <p>Total</p>
            <p>{formatPrice(totalPrice())}</p>
          </div>
          <Link to='/product-details/cart-details/CheckOutDetails'>
            <SfButton size="lg" className="w-full">
              Place Order and Pay
            </SfButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
