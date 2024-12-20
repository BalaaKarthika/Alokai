import React, { createContext, useContext, useState, useEffect } from 'react';
const WishlistContext = createContext();
export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  useEffect(() => {
    const storedWishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    setWishlistItems(storedWishlistItems);
  }, []);
  useEffect(() => {
    if (wishlistItems.length > 0) {
      localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    }
  }, [wishlistItems]);

  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => {
      if (prevItems.find((wishlistItem) => wishlistItem.id === item.id)) {
        return prevItems;
      }
      return [...prevItems, item]; 
    });
  };
  const removeFromWishlist = (itemId) => {
    setWishlistItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
