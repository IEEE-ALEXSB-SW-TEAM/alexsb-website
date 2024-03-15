import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider({ slides }) {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Set autoplay interval (milliseconds)
      };
  
  return (
        <Slider {...settings}>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex}>
              <img src={slide.url} alt={slide.title} />
            </div>
          ))}
        </Slider>
      );
};

export default ImageSlider;
  