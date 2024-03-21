import React, { Component } from "react";
import BoardCard from "./boardCard";   
import "./ourBoard.css";   
import boardMembers from "./boardMembers";   
import Slider from "react-slick";

/**
 * Represents the section displaying the board members.
 * @class
 */
class OurBoardSection extends Component {
    /**
     * Renders the board section.
     * @returns {JSX.Element} JSX representing the board section.
     */
    render() {
        /**
         * Settings for the slider component.
         * @type {object}
         */
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
                    {/* Slider component */}
                    <Slider {...settings} className="slider-container">
                        {/* Mapping through board members and rendering BoardCard component */}
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
