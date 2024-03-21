import React, { Component } from "react";
import BoardCard from "./boardCard";   
import "./ourBoard.css";   

import boardMembers from "./boardMembers";   
import Slider from "react-slick";
class OurBoardSection extends Component {
    render() {
        const settings = {
            dots: false,   
            infinite: true,
            speed: 500,
            slidesToShow: 4,   
            slidesToScroll: 1,
            autoplay: true,   
            autoplaySpeed: 2000,   
            responsive: [
                {
                  breakpoint: 991,   
                  settings: {
                    slidesToShow: 2,   
                  },
                },
                {
                  breakpoint: 700,   
                  settings: {
                    slidesToShow: 1,   
                  },
                },
              ],
          };
        return (

            <>
                <section className="our-board-section">
                    <h2 className="section-title">OUR BOARD</h2>
                    <Slider {...settings} className="slider-container">
                        {boardMembers.map((member, index) => (
                            <BoardCard key={index} {...member} />
                        ))}
                    </Slider>
                </section>
            </>
        );
    }
}

export default OurBoardSection;
