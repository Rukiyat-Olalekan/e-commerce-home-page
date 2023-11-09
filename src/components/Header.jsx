import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="flex">
        <h1>Flavor Fiesta</h1>
        <ul>
          <li>Why us?</li>
          <li>
            Services
          </li>
          <li>Companies</li>
          <li>Pricing</li>
          <li>
            Contact Us 
          </li>
          <li>
            <button>Get Started</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
