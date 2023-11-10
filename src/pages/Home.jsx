import React, { useState } from "react";
import { useEffect } from "react";
import tomatojpg from "../assets/tomato.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import HowItWorks from "../components/HowItWorks";
import Menu from "../components/menu/Menu";
import MenuLists from "../components/menu/MenuLists";
import Reviews from "../components/Reviews";

const menu = [
  "spicy soups",
  "crusty chicken",
  "peng porridge",
  "savory seafood",
];

export function Welcome() {
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
    <section className="home bg flex">
      <div className="text">
        <h1>
          Enjoy <span className="animate">{menuSlide}</span> ready in 5 minutes
        </h1>
        <ul>
          <li>
            Fresh chef-cooked meals delivered to you.
            <FontAwesomeIcon icon={faCheck} />
          </li>

          <li>
            No market runs. No prep-time. No extra delivery fees.
            <FontAwesomeIcon icon={faCheck} />
          </li>

          <li>
            Just heat and eat.
            <FontAwesomeIcon icon={faCheck} />
          </li>
        </ul>
        <li className="button">
          <button>Try a Tasty Meal!</button>
        </li>
      </div>
      <div className="image">
        <img src={tomatojpg} alt="tomato jpeg" />
      </div>
    </section>
  );
}

const Home = () => {
  return (
    <>
      <Welcome />
      <HowItWorks />
      <Menu />
      <MenuLists />
      <Reviews />
    </>
  );
};

export default Home;
