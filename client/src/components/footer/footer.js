import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./footer.css";
import fb from "../../assets/icons8-facebook-50.png";
import tw from "../../assets/icons8-twitterx-50.png";
import ig from "../../assets/icons8-instagram-50.png";
import li from "../../assets/icons8-linkedin-50.png";
import ieee from "../../assets/AlexSBLogo.svg";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <img src={ieee} alt="ieee" />
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <br></br>
            <ul>
              <a href="#"><li>Events</li></a>
              <a href="#"><li>Team</li></a>
              <a href="#"><li>Gallery</li></a>
              <a href="#"><li>Terms and Conditions</li></a>
            </ul>
          </div>
          <div className="footer-section contact-us">
            <h2>Contact Us</h2>
            <br></br>
            <div className="contact">
              <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
              <br></br>
              <br></br>

              <span><i className="fas fa-envelope"></i> &nbsp; <a className="email-link" href="http://www.gmail.com"> ieee@alexsb.gmail.com</a  ></span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">

          <div className="socials">
            <a href="https://www.facebook.com/IEEE.AlexSB/" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="facebook" />
            </a>
            <a href="https://twitter.com/IEEEAlexSB" target="_blank" rel="noopener noreferrer">
              <img src={tw} alt="twitter" />
            </a>
            <a href="https://www.instagram.com/ieeealexsb/" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/ieee-alexsb/" target="_blank" rel="noopener noreferrer">
              <img src={li} alt="linkedin" />
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} IEEE-AlEXSB | All rights reserved | Terms of Service | Privacy
          </p>
        </div>

      </div>
    );
  }
}

export default Footer;