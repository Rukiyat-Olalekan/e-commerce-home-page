import styles from "./Reviews.module.css";

import tomato from "../assets/tomato.jpg";

const profile = [
  {
    id: 1,
    photo: tomato,
    handle: "@adakanma",
    name: "Adaku",
    review:
      "Got my first meal from @flavorfiesta today and I'm sold. I was made for this lifestyle",
  },
  {
    id: 2,
    photo: tomato,
    handle: "@adakanma",
    name: "Adaku",
    review:
      "Got my first meal from @flavorfiesta today and I'm sold. I was made for this lifestyle",
  },
  {
    id: 3,
    photo: tomato,
    handle: "@adakanma",
    name: "Adaku",
    review:
      "Got my first meal from @flavorfiesta today and I'm sold. I was made for this lifestyle",
  },
];

export const ReviewCard = ({ name, handle, review, photo }) => {
  return (
    <li className={styles.card}>
      <div className={styles["profile-photo"]}>
        <img src={photo} alt={name} />
        <div>
          <p>{name}</p>
          <p className={styles.handle}>{handle}</p>
        </div>
      </div>
      <p className={styles.review}>{review}</p>
    </li>
  );
};

const Reviews = () => {
  return (
    <ul className={styles["review-lists"]}>
      {profile.map((person) => {
        return (
          <ReviewCard
            key={person.id}
            name={person.name}
            photo={person.photo}
            review={person.review}
            handle={person.handle}
          />
        );
      })}
    </ul>
  );
};

export default Reviews;
