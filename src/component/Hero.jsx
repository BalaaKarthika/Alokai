
import { SfButton } from '@storefront-ui/react';
import { Link } from 'react-router-dom';

export default function Hero({
  title = "Feel the music",
  description = "Spatial audio. Adjustable ear cups. On-device controls. All-day battery.",
  buttonText = "Order now",
  buttonLink = "/Products",
  desktopImage = "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg.png",
  mobileImage = "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-bg-mobile.png",
  productImage = "https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/hero-headphones.png",
}) {
  return (
    <div className="relative min-h-[576px]">
      <picture>
        <source srcSet={desktopImage} media="(min-width: 768px)" />
        <img
          src={mobileImage}
          alt="Background"
          className="absolute w-full h-full z-[-1] object-cover"
        />
      </picture>
      <div className="md:flex md:flex-row-reverse md:justify-center min-h-[576px] max-w-[1526px] mx-auto">
        <div className="flex flex-col md:basis-2/4 md:items-stretch md:overflow-hidden">
          <img
            src={productImage}
            alt="Product"
            className="h-full object-cover object-left"
          />
        </div>
        <div className="p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4">
          <p className="typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase">
            {title}
          </p>
          <p className="typography-text-base md:typography-text-lg">
            {description}
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <Link to={buttonLink}>
              <SfButton size="lg">{buttonText}</SfButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
