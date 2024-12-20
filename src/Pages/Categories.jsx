import React from 'react'
import ProductCards from '../component/ProductCards'
import Filters from '../component/Filters'
import BreadCrumbs from '../component/BreadCrumbs'
import Footer from '../component/Footer'
import Header from '../component/Header'
import ScrollBottomtoTop from '../component/ScrollBottomtoTop'

const Categories = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div>
      <Header />
      <button
        onClick={handleBackClick}
        className="absolute top-24 right-2 text-white bg-green-600 p-2 shadow-md hover:bg-green-800 focus:outline-none rounded-md z-10"
      >
        --Back
      </button>
      <main className=""> 
        <div className='mx-10 my-20'>
          <BreadCrumbs/>
        </div>
        <div className='mx-10 my-20'>
          <h1 className="text-3xl font-bold mb-2">All Products</h1>
          <div className="flex gap-6">
            <Filters/>
            <ProductCards/>
          </div>
        </div>
        <ScrollBottomtoTop/>
        <Footer />
      </main>
    </div>
  )
}

export default Categories
