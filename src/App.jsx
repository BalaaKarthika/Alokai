import React from 'react'
import './style.css'
import { Routes, Route } from 'react-router-dom'

import { Home } from './Home'
import Categories from './Pages/Categories'
import ProductsDetails from './Pages/ProductsDetails'
import { CartDetails } from './CartDetails'
import CheckOutDetails from './Pages/CheckOutDetails'
import { CartProvider } from './Context/CartContext'
import BrowseProducts from './component/BrowseProducts'
import WishlistPage from './component/WishlistPage'
import { WishlistProvider } from './Context/WishlistContext'

export const App = () => {
  return (
    <div> 
      {/* Wrapping app with CartProvider and WishlistProvider to manage state */}
      <CartProvider> 
        <WishlistProvider>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} /> 

            {/* Wishlist Page */}
            <Route path="/wishlist" element={<WishlistPage />} /> 

            {/* Browse Products */}
            <Route path="/browse-products" element={<BrowseProducts />} />

            {/* Categories Page */}
            <Route path="/Products" element={<Categories />} />

            {/* Product Details Page */}
            <Route path="/productdetails/:productId" element={<ProductsDetails />} />

            {/* Cart Details Page */}
            <Route path="/cartdetails" element={<CartDetails />} />

            {/* Checkout Page */}
            <Route path="/product-details/cart-details/CheckOutDetails" element={<CheckOutDetails />} />
          </Routes>
        </WishlistProvider>
      </CartProvider>
    </div>
  )
}
