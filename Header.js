import styles from "./styles/Home.module.css";

const Header = () => (
  <header className={styles.header}>
    <a href="/">
      <h1 className={styles.title}>
        <img className={styles.logo} src="/favicon.png" /> Find a local trader
      </h1>
    </a>

    <form action="/search" className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="q"
        placeholder="Trade (e.g. Plumber)"
      />
      <input
        className={styles.input}
        type="text"
        name="location"
        placeholder="Near"
      />
      <button className={styles.button}>Search</button>
    </form>
  </header>
);

export default Header;
