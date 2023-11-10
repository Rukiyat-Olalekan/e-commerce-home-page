import styles from "./MenuLists.module.css";
import cheese from "../../assets/tomato.jpg";

const foods = [
  {
    id: 1,
    name: "Amala",
    photo: cheese,
    description: "Amala, efo riro, shaki, liver, beef",
  },
  {
    id: 2,
    name: "Amala",
    photo: cheese,
    description: "Amala, efo riro, shaki, liver, beef",
  },
  {
    id: 3,
    name: "Amala",
    photo: cheese,
    description: "Amala, efo riro, shaki, liver, beef",
  },
];

export const MenuCard = ({ name, photo, description }) => {
  return (
    <li className={styles.card}>
      <img src={photo} alt={name} />
      <p>{description}</p>
    </li>
  );
};

const MenuLists = () => {
  return (
    <>
      {" "}
      <ul className={styles["food-lists"]}>
        {foods.map((food) => {
          return (
            <MenuCard
              key={food.id}
              name={food.name}
              photo={food.photo}
              description={food.description}
            />
          );
        })}
      </ul>
      <div className={styles.button}>
        <button>Get A Taste</button>
      </div>
    </>
  );
};

export default MenuLists;
