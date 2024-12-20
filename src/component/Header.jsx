import React, { useState } from 'react';
import { useDisclosure } from '@storefront-ui/react';   
import { SfButton, SfDrawer, SfIconClose, SfListItem, SfIconSearch } from '@storefront-ui/react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext'; 
import { useWishlist } from '../Context/WishlistContext'; 
const categoriesContent = [
  {
    heading: 'Women',
    items: [
      { title: 'Womens Clothing', category: 'women\'s clothing' },
      { title: 'Jewelry', category: 'jewelery' },
    ],
  },
  {
    heading: 'Men',
    items: [
      { title: 'Mens Clothing', category: 'men\'s clothing' },
    ],
  },
  {
    heading: 'Electronics',
    items: [
      { title: 'Electronics', category: 'electronics' },
    ],
  },
];

export default function Header() {
  const { toggle, isOpen, close } = useDisclosure();
  const navigate = useNavigate();
  const { cartItems } = useCart(); 
  const { wishlistItems } = useWishlist(); 
  const [searchQuery, setSearchQuery] = useState('');
  const handleCategoryClick = (category) => {
    navigate(`/browse-products?category=${category}`);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse-products?search=${searchQuery.trim()}`);
      
    }
  };

  const handleCartClick = () => {
    navigate('/cartdetails');
  };
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistItemCount = wishlistItems.length; 

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 w-full bg-green-700 text-white z-20">
        <div className="flex justify-between items-center py-4 px-6">
          <Link to="/">
            <a href="#" aria-label="Homepage" className="flex items-center text-white">
              <img src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_sign_white.svg" alt="Logo" className="w-8 h-8" />
              <h1 className="ml-2 text-3xl">VueStorefront</h1>
            </a>
          </Link>
          <form onSubmit={handleSearchSubmit} className="flex items-center flex-grow max-w-md mx-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search products..."
              className="w-full py-2 px-4 rounded-l-md border-none focus:outline-none text-black"
            />
            <button type="submit" className="bg-white p-2 rounded-r-md">
              <SfIconSearch className="text-gray-600" />
            </button>
          </form>

          <div className="flex items-center space-x-4 relative">
            <Link to="/cartdetails">
              <button
                onClick={handleCartClick}
                className="text-white justify-center p-2 bg-transparent rounded-full hover:bg-gray-600 relative"
              >
                <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6 text-white" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </Link>
            <Link to="/wishlist">
              <button
                className="text-white justify-center p-2 bg-transparent rounded-full hover:bg-gray-600 relative"
              >
                <FontAwesomeIcon icon={faHeart} className="w-6 h-6 text-white" />
                {wishlistItemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistItemCount}
                  </span>
                )}
              </button>
            </Link>
            <SfButton
              className="hidden md:flex text-white bg-transparent font-body hover:bg-primary-800"
              variant="tertiary"
              onClick={toggle}
              square
            >
              <span className="hidden md:inline-flex whitespace-nowrap px-2">Browse products</span>
            </SfButton>
          </div>
        </div>
      </header>
      <SfDrawer
        open={isOpen}
        disableClickAway
        placement="top"
        className="md:max-w-[376px] w-full max-h-screen overflow-y-auto z-30 bg-white shadow-lg"
      >
        <div className="sticky top-0 flex justify-between items-center bg-primary-700 text-white py-2 px-4">
          <div className="text-lg font-medium">Browse Products</div>
          <SfButton square variant="tertiary" onClick={close} className="text-white">
            <SfIconClose />
          </SfButton>
        </div>
        {categoriesContent.map(({ heading, items }) => (
          <div key={heading} className="pt-6 text-black">
            <h2 className="font-medium text-neutral-900 p-4">{heading}</h2>
            <hr className="mb-3.5" />
            <ul>
              {items.map((item) => (
                <li key={item.title}>
                  <SfListItem
                    as="button"
                    size="sm"
                    onClick={() => handleCategoryClick(item.category)}
                    className="py-4"
                  >
                    {item.title}
                  </SfListItem>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </SfDrawer>
    </div>
  );
}
