import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";

class ImageSlider extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set autoplay interval (milliseconds)
      };
  
      return (
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Image 1" width = "1200px"  />
          </div>
          <div>
            <img src={image2} alt="Image 2" width = "1200px"  />
          </div>
          <div>
            <img src={image3} alt="Image 3" width = "1200px" />
          </div>
        </Slider>
      );
    }
  }
  
  export default ImageSlider;
  