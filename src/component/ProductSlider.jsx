import React, { useState, useEffect } from 'react';
import { SfButton, SfIconFavorite, SfScrollable } from '@storefront-ui/react';
import { useWishlist } from '../Context/WishlistContext';  

export default function ProductSlider() {
  const [products, setProducts] = useState([]);
  const { wishlistItems, addToWishlist } = useWishlist();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToWishlist = (product) => {
    addToWishlist(product); 
  };

  return (
    <div>
      <SfScrollable
        className="m-auto py-4 items-center w-full"
        buttons-placement="floating"
      >
        {products.map(({ id, title, price, image }) => (
          <div key={id} className="shrink-0 ring-1 ring-inset ring-neutral-200 rounded-md hover:shadow-lg w-[148px]">
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="block object-cover h-auto rounded-md"
                onClick={() => handleAddToWishlist({ id, title, price, image })}
              />
              <SfButton
                variant="tertiary"
                size="sm"
                square
                className="absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full"
                aria-label="Add to wishlist"
                onClick={() => handleAddToWishlist({ id, title, price, image })}
              >
                <SfIconFavorite size="sm" />
              </SfButton>
            </div>
            <div className="p-2">
              <h4>{title}</h4>
              <span>${price}</span>
            </div>
          </div>
        ))}
      </SfScrollable>
    </div>
  );
}
