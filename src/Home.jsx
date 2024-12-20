import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import ProductSlider from './component/ProductSlider';
import ScrollBottomtoTop from './component/ScrollBottomtoTop';
import Hero from './component/Hero';
import Banner from './component/Banner';

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Banner/>     
      <div className="mt-16" >
        <ProductSlider/>
      </div>
      <ScrollBottomtoTop />
      <Footer />
    </div>
  );
};
