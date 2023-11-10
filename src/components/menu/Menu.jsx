import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <section className={styles.menu}>
      <h1>Our Menu</h1>
      <ul>
        <li>
          {" "}
          <a href="/">Swallow</a>
        </li>
        <li>
          {" "}
          <a href="/">Rice</a>
        </li>
        <li>
          <a href="/">Soups</a>
        </li>
        <li>
          <a href="/">Pasta</a>
        </li>
        <li>
          <a href="/">Salads</a>
        </li>
        <li>
          <a href="/">Pizza</a>
        </li>
        <li>
          {" "}
          <a href="/">Smoothies</a>
        </li>
        <li>
          {" "}
          <a href="/">Juice</a>
        </li>
        <li>
          {" "}
          <a href="/">Pastry</a>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
