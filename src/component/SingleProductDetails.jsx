import React, { useState } from 'react';
import { SfButton, SfIconShoppingCart } from '@storefront-ui/react';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext'; 

const SingleProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); 
  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, Math.min(999, parseInt(e.target.value))));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col items-start">
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="font-bold text-xl mb-4">${product.price}</p>
      <p className="text-sm text-gray-700 mb-4">{product.description}</p>

      <div className="flex items-center mb-4 gap-4">
        <div className="flex items-center">
          <button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity <= 1}
            className="px-4 py-2 border"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 text-center border px-2 py-1"
            min="1"
            max="999"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            disabled={quantity >= 999}
            className="px-4 py-2 border"
          >
            +
          </button>
        </div>

        <Link to="/cartdetails">
          <SfButton
            size="sm"
            className="flex items-center justify-center"
            slotPrefix={<SfIconShoppingCart size="sm" />}
            onClick={handleAddToCart} 
          >
            Add to Cart
          </SfButton>
        </Link>
      </div>
    </div>
  );
};

export default SingleProductDetails;

