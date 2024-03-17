import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

function ImageSlider({ slides }) {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay interval (milliseconds)
      };
  
  return (
    <slider className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex}>
            <img src={slide.url} alt={slide.title}/>
          </div>
        ))}
      </Slider>
      <text className="text">
        <img src="http://localhost:3000/images/ieee_bg.png" width="250px"></img>
        <h1>IEEE-AlexSB</h1>
        <h1>+22 years of innovation and development</h1>
      </text>
      </slider>
      );
};

export default ImageSlider;