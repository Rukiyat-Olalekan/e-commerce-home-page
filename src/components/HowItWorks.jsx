import React from "react";
import tomatojpg from "../assets/tomato.jpg"

const HowItWorks = () => {
  return (
    <section className="home flex">
      <div className="text">
        <h1 className="header">How it works</h1>
        <ul className="border">
          <li>
            <h2>Choose your plan</h2>
            <p>
              Sign up on the Flavor Fiesta app. Choose a meal schedule that
              works for you; when you want it. It takes less than 5 minutes.
            </p>
          </li>
          <li>
            <h2>We Cook and Deliver</h2>
            <p>
              We cook up your picks from our rich menu and deliver them to you
              on schedule. At no extra delivery costs.
            </p>
          </li>
          <li>
            <h2>You heat and eat</h2>
            <p>
              It's ready to eat in 5 minutes. Or you can refrigerate for later!
            </p>
          </li>
          <div>
            <button>Order Now!</button>
          </div>
        </ul>
      </div>
      <div className="image">
        <img src={tomatojpg} alt="" />
      </div>
    </section>
  );
};

export default HowItWorks;
