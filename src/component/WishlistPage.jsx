import React from 'react';
import { useWishlist } from '../Context/WishlistContext'; 
import { useCart } from '../Context/CartContext'; 
import Footer from './Footer';
import Header from './Header';


const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist(); 
  const { addToCart } = useCart(); 

  const handleAddToCart = (item) => {
    addToCart(item); 
    removeFromWishlist(item.id); 
  };
  const handleRemoveFromWishlist = (id) => {
    removeFromWishlist(id); 
  };

  return (
    <div>
      <Header />  
      
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty. Start adding products!</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {wishlistItems.map(({ id, title, image, price }) => (
              <div
                key={id}
                className="flex flex-col items-center bg-white p-4 rounded-md shadow-md"
              >
                <img
                  src={image}
                  alt={title}
                  className="object-cover h-32 w-32 rounded-md mb-4"
                />
                <h4 className="text-lg font-semibold mb-2 text-center">{title}</h4>
                <span className="text-xl font-bold text-green-600 mb-4">${price}</span>
                <button
                  onClick={() => handleAddToCart({ id, title, image, price })}
                  className="mt-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-500"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(id)}
                  className="mt-2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                >
                  Remove from Wishlist
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default WishlistPage;
