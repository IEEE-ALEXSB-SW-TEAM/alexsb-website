import React, { Component } from "react";
import "./footer.css";
import fb from "../../assets/icons8-facebook-50.png";
import tw from "../../assets/icons8-twitterx-50.png";
import ig from "../../assets/icons8-instagram-50.png";
import li from "../../assets/icons8-linkedin-50.png";
import ieee from "../../assets/AlexSBLogo.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <img src={ieee} alt="IEEE Logo" />
          </div>
          <div className="footer-section links">
            <h2>Navigate</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/activities">Activities</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section ieee">
            <h2>About IEEE</h2>
            <ul>
              <li><a href="https://www.ieee.org/">IEEE</a></li>
              <li><a href="https://www.ieee.org/membership/index.html">IEEE membership</a></li>
              <li><a href="https://students.ieee.org/student-branches/">IEEE student branches</a></li>
              <li><a href="https://ieeer8.org/student-activities/sa-committee/sac/">IEEE Region8 SAC</a></li>
              <li><a href="https://www.ieee.org/p9-26.html">Nondiscrimination Policy</a></li>
              <li><a href="https://www.ieee.org/p9-26.html">IEEE privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section contact-us">
            <h2>Contact Us</h2>
            <ul className="contact">
              <li>
                <span><i className="fas fa-phone"></i> &nbsp; +201029094184</span>
              </li>
              <li>
                <span><i className="fas fa-envelope"></i> &nbsp; 
                  <a className="email-link" href="mailto:alex.sb.ieee22@gmail.com">alex.sb.ieee22@gmail.com</a>
                </span>
              </li>
              <li>
                <span><i className="fas fa-location"></i> &nbsp; 
                  <a className="location" href="https://www.google.com/maps/place/%D9%83%D9%84%D9%8A%D8%A9+%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D8%A9+-+%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9%E2%80%AD/@31.206247,29.9248221,15z/data=!4m6!3m5!1s0x14f5c38beb5b1711:0x39b32d42ccaf2a88!8m2!3d31.206247!4d29.9248221!16s%2Fm%2F03gs25d?entry=ttu" target="_blank">Our location</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="socials">
            <a href="https://www.facebook.com/IEEE.AlexSB/" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="https://twitter.com/IEEEAlexSB" target="_blank" rel="noopener noreferrer">
              <img src={tw} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/ieeealexsb/" target="_blank" rel="noopener noreferrer">
              <img src={ig} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/ieee-alexsb/" target="_blank" rel="noopener noreferrer">
              <img src={li} alt="LinkedIn" />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} IEEE-AlexSB | All rights reserved</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
