import Head from "next/head";
import Footer from "../Footer";
import styles from "../styles/Home.module.css";
import { traders } from "../data";

export default function Search() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Find the most trusted local Plumbers in London | Trader</title>
        <link href="/favicon.png" rel="icon" type="image/png" />
      </Head>

      <main className={styles.main}>
        <a href="/">
          <h1 className={styles.title}>Find a local trader</h1>
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

        <div className={styles.section}>
          <h2>Plumbers in London</h2>
        </div>

        <div className={styles.section}>
          <div className={styles.list}>
            {traders.slice(0, 10).map((trader) => (
              <a
                href={`/traders/${trader.id}`}
                className={styles.listItem}
                key={trader.id}
              >
                <h3>
                  <div>{trader.name}</div>
                </h3>
                <p>
                  <b>{trader.trade}</b> in <b>{trader.location}</b>,{" "}
                  {trader.postCode}. Covering {trader.area} and Surrounding
                  Areas
                </p>
                <p>
                  {trader.ratings} reviews / {trader.rating} ⭐⭐⭐⭐⭐
                </p>
                <p>Phone: {trader.phone}</p>
                <div>
                  <button className={styles.button}>Email</button>{" "}
                  <button className={styles.button}>SMS</button>{" "}
                  <button className={styles.button}>Callback</button>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div>
            <button className={styles.button}>‹ Prev</button>{" "}
            <button className={styles.button}>› Next</button>
          </div>
          <div>Page 1 of 33</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
