import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav>
      <div className="flex">
        <h1>Flavor Fiesta</h1>
        <ul className="lists">
          <li>Why us?</li>
          <li>
            <a href="/">Services</a>
            <div className="hidden services">
              <ul className="services-lists">
              <li>Take out</li>
                <li>Dine in</li>
                <li>Hire a chef</li>
              </ul>
            </div>
          </li>
          <li>Companies</li>
          <li>Pricing</li>
          <li>
            <a href="/">Contact Us</a>
            <div className="hidden contact">
              <ul className="contact-lists">
                <li>+353 90897867</li>
                <li>+353 90897867</li>
                <li>+353 90897867</li>
              </ul>
            </div>
          </li>
          <li>
            <button>Get Started</button>
          </li>
        </ul>
      </div>
      <div className="hidden menu-bar">
        <FontAwesomeIcon icon={faBars} size="3x" />
      </div>
    </nav>
  );
};

export default Header;
