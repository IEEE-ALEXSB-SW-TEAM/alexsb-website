import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import logo from '../../assets/AlexSBLogo.png'

function ImageSlider({ slides }) {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
        <img src={logo} width="250px" alt="ieee logo"></img>
        <h1>IEEE-AlexSB</h1>
        <h1>+22 years of innovation and development</h1>
      </text>
      </slider>
      );
};

export default ImageSlider;