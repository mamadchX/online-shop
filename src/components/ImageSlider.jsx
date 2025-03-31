import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Using Feather Icons

// Custom Arrow Components with Tailwind
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
    aria-label="Next slide"
  >
    <FiChevronRight className="h-5 w-5" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
    aria-label="Previous slide"
  >
    <FiChevronLeft className="h-5 w-5" />
  </button>
);

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // Custom dots styling
    appendDots: dots => (
      <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 transform">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-2 w-2 rounded-full bg-white/50 transition-all hover:bg-white"></div>
    ),
  };

  // Replace these with your actual image imports
  const images = [
    'src/assets/images/slider/1.jpg',
    'src/assets/images/slider/2.jpg',
    'src/assets/images/slider/4.jpg',
    'src/assets/images/slider/5.jpg',
  ];

  return (
    <div className="relative w-full overflow-hidden ">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-35 w-full md:h-65">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;