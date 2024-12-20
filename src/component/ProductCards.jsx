import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SfButton, SfRating, SfCounter, SfIconShoppingCart, SfIconFavorite } from '@storefront-ui/react';
const SkeletonCard= () => (
  <div className="product-card border border-neutral-200 rounded-lg shadow-md p-4 animate-pulse">
    <div className="w-36 h-36 bg-neutral-300 rounded-md mb-4"></div>
    <div className="h-5 bg-neutral-300 rounded-md mb-2"></div>
    <div className="h-4 bg-neutral-300 rounded-md mb-2"></div>
    <div className="h-6 bg-neutral-300 rounded-md mb-4 w-1/2"></div>
    <div className="h-10 bg-neutral-300 rounded-md"></div>
  </div>
);

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
          <div className="relative">
            <Link to={`/productdetails/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="object-cover h-auto rounded-md aspect-square"
              />
            </Link>
            <SfButton
              variant="tertiary"
              size="sm"
              square
              className="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
              aria-label="Add to wishlist"
            >
              <SfIconFavorite size="sm" />
            </SfButton>
          </div>
          <div className="p-4 border-t border-neutral-200">
            <Link to={`/productdetails/${product.id}`}>
              <h3 className="font-bold text-lg">{product.title}</h3>
            </Link>
            <div className="flex items-center pt-1">
              <SfRating size="xs" value={product.rating.rate} max={5} />
              <SfCounter size="xs" className="pl-1">
                {product.rating.count}
              </SfCounter>
            </div>
            <span className="block pb-2 font-bold typography-text-lg">${product.price}</span>
            <SfButton size="sm" slotPrefix={<SfIconShoppingCart size="sm" />}>
              Add to Cart
            </SfButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
