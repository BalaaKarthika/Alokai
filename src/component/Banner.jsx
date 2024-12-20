import { SfButton } from '@storefront-ui/react';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Banner() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 
  const handleButtonClick = () => {
    navigate('/products'); 
  };
  useEffect(() => { 
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.slice(13, 16))) 
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 max-w-[1420px] mx-auto">
      {products.map((product) => {
        const { title, category, image } = product;
        const displayDetails = {
          image,
          title,
          subtitle: category, 
          buttonText: 'Shop Now',
          reverse: false, 
          backgroundColor: 'bg-neutral-200', 
          titleClass: 'md:typography-display-2',
          subtitleClass: 'md:typography-headline-6',
        };
        return (
          <div
            key={title}
            className={classNames(
              'relative flex md:max-w-[1536px] md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full',
              displayDetails.backgroundColor,
            )}
          >
            <a
              className="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
              aria-label={title}
              href="/products"
            />
            <div
              className={classNames('flex justify-between overflow-hidden grow', {
                'flex-row-reverse': displayDetails.reverse,
              })}
            >
              <div className="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
                <p
                  className={classNames('uppercase typography-text-xs block font-bold tracking-widest', displayDetails.subtitleClass)}
                >
                  {displayDetails.subtitle}
                </p>
                <h2 className={classNames('mb-4 mt-2 font-bold typography-display-3', displayDetails.titleClass)}>{displayDetails.title}</h2>
                <p className="typography-text-base block mb-4">{displayDetails.description}</p>
                <SfButton className="!bg-black" onClick={handleButtonClick}>
                  {displayDetails.buttonText}
                </SfButton>
              </div>  
              
              <img src={displayDetails.image} alt={displayDetails.title} className="w-1/2 self-end object-contain" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
