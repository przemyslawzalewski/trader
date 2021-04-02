import faker from "faker";
import styles from "./styles/Home.module.css";

faker.seed(123);

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <p>
        A directory of traders you can trust because {faker.lorem.paragraph()}.
      </p>
      <div>
        <button className={styles.button}>See how it works</button>
      </div>
    </div>
  </footer>
);

export default Footer;
