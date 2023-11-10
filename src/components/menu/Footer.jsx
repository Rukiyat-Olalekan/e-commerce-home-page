import styles from "./Footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <h5>Flavor Fiesta</h5>
          <p>Making your life easier is our pride.</p>
        </div>
        <div className={styles.services}>
          <ul>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Food</a>
            </li>
            <li>
              <a href="/">Cleaning</a>
            </li>
            <li>
              <a href="/">Laundry</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">Company</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/">Other</a>
            </li>
            <li>
              <a href="/">FAQs</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.socials}>
        <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </div>
      <p className={styles.reserved}>
        &copy; 2023 Flavor Fiesta. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
