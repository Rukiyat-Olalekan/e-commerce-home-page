import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showServices, setShowServices] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleServices = (e) => {
    e.preventDefault();
    setShowServices(!showServices);
    setShowContact(false);
  };

  const handleContact = (e) => {
    e.preventDefault();
    setShowContact(!showContact);
    setShowServices(false);
  };

  const handleOutsideClick = (e) => {
    // Check if the click is outside the services and contact sections
    if (
      !e.target.closest(".services") &&
      !e.target.closest(".contact") &&
      !e.target.closest(".lists li")
    ) {
      setShowServices(false);
      setShowContact(false);
    }
  };

  useEffect(() => {
    // Add click event listener to the document body
    document.body.addEventListener("click", handleOutsideClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav>
      <div className="flex">
        <h1>Flavor Fiesta</h1>
        <ul className="lists">
          <li>Why us?</li>
          <li onClick={handleServices}>
            <a href="/">Services</a>
            <div className={`services ${showServices ? "block" : "hidden"}`}>
              <ul className="services-lists">
                <li>Take out</li>
                <li>Dine in</li>
                <li>Hire a chef</li>
              </ul>
            </div>
          </li>
          <li>Companies</li>
          <li>Pricing</li>
          <li onClick={handleContact}>
            <a href="/">Contact Us</a>
            <div className={`contact ${showContact ? "block" : "hidden"}`}>
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
      {showMenu ? (
        <div
          className={`menu-bar ${showMenu ? "" : "hidden"}`}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <FontAwesomeIcon icon={faTimes} size="3x" />
        </div>
      ) : (
        <div
          className={`menu-bar ${showMenu ? "" : "hidden"}`}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <FontAwesomeIcon icon={faBars} size="3x" />
        </div>
      )}
      {showMenu && (
        <ul className="mobile-lists">
          <li>
            <a href="/">Why Us</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Companies</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <button>Try It Now</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
