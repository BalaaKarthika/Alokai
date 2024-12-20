
import React, { useState } from 'react';

const SingleProduct = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const formattedImages = [
    {
      imageSrc: product.image,
      imageThumbSrc: product.image,
      alt: product.title,
    },
    ...(product.additionalImages || []).map((image, index) => ({
      imageSrc: image,
      imageThumbSrc: image,
      alt: `${product.title} - Image ${index + 2}`,
    })),
  ];
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center w-full mb-4">
        <img
          src={formattedImages[activeIndex].imageSrc}
          alt={formattedImages[activeIndex].alt}
          className="max-w-full max-h-[400px] object-contain"
        />
      </div>
      <div className="flex gap-3 mb-4 overflow-x-auto w-full px-4">
        {formattedImages.map(({ imageThumbSrc, alt }, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`p-2 border-2 rounded-md transition-all duration-200 ${
              activeIndex === index ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <img
              src={imageThumbSrc}
              alt={alt}
              className="w-20 h-20 object-cover rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
};


export default SingleProduct;