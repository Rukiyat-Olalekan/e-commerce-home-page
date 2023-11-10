import React, { useState } from "react";
import { useEffect } from "react";
import tomatojpg from "../assets/tomato.jpg";

const menu = [
  "spicy soups",
  "crusty chicken",
  "peng porridge",
  "savory seafood",
];

const Home = () => {
  const [menuSlide, setMenuSlide] = useState("spicy soups");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentMenuIndex = menu.indexOf(menuSlide);
      const nextMenuIndex = (currentMenuIndex + 1) % menu.length;

      setMenuSlide(menu[nextMenuIndex]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [menuSlide]);

  return (
    <section className="home">
      <div className="text">
        <h1>
          Enjoy <span className="animate">{menuSlide}</span><br /> ready in 5 minutes
        </h1>
        <ul>
          <li>Fresh chef-cooked meals delivered to you.</li>
          <li>No market runs. No prep-time. No extra delivery fees.</li>
          <li>Just heat and eat.</li>
        </ul>
        <button>Try a Tasty Meal!</button>
      </div>
      <div className="image">
        <img src={tomatojpg} alt="tomato jpeg" />
      </div>
    </section>
  );
};

export default Home;
