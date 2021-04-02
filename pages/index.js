import faker from "faker";
import Head from "next/head";
import Footer from "../Footer";
import dateFormatter from "../dateFormatter";
import styles from "../styles/Home.module.css";
import { traders } from "../data";

faker.seed(123);

const [firstTrader] = traders;
const [firstTraderFirstReview] = firstTrader.reviews;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
          <h2>You can trust our traders</h2>
          <p>Traders average ratings for 2021 ⭐⭐⭐⭐⭐</p>
          <p>
            {firstTrader.name}, {firstTrader.location} ⭐⭐⭐⭐⭐
            <br />"{firstTraderFirstReview.quote}."
            <br />
            {firstTraderFirstReview.name} on{" "}
            {dateFormatter.format(new Date(firstTraderFirstReview.date))}
          </p>
        </div>

        <div className={styles.section}>
          <h2>Proud of your work?</h2>
          <p>{(Math.random() * 1000 + 1).toFixed(3).replace(".", ",")}</p>
          <p>Searches made in the last 30 days by visitors</p>
        </div>

        <div className={styles.section}>
          <h2>Apply to join other tradespeople on our website!</h2>
          <ul>
            <li>
              <div>{faker.lorem.words()}</div>
              <div>{faker.lorem.sentence()}</div>
            </li>
            <li>
              <div>{faker.lorem.words()}</div>
              <div>{faker.lorem.sentence()}</div>
            </li>
            <li>
              <div>{faker.lorem.words()}</div>
              <div>{faker.lorem.sentence()}</div>
            </li>
            <li>
              <div>{faker.lorem.words()}</div>
              <div>{faker.lorem.sentence()}</div>
            </li>
            <li>
              <div>{faker.lorem.words()}</div>
              <div>{faker.lorem.sentence()}</div>
            </li>
            <li>
              <div>{faker.lorem.words()}</div>
              <div>{faker.lorem.sentence()}</div>
            </li>
            <li>
              <div>{faker.lorem.words()}</div>
              <div>{faker.lorem.sentence()}</div>
            </li>
            <li>
              <div>{faker.lorem.words()}</div>
              <div>{faker.lorem.sentence()}</div>
            </li>
          </ul>
          <button className={styles.button}>Join us</button>
        </div>

        <div className={styles.section}>
          <h2>{faker.lorem.words()}</h2>

          <div className={styles.grid}>
            <a href="#" className={styles.card}>
              <h3>{faker.lorem.words()}</h3>
              <p>{faker.lorem.sentence()}</p>
            </a>

            <a href="#" className={styles.card}>
              <h3>{faker.lorem.words()}</h3>
              <p>{faker.lorem.sentence()}</p>
            </a>

            <a href="#" className={styles.card}>
              <h3>{faker.lorem.words()}</h3>
              <p>{faker.lorem.sentence()}</p>
            </a>

            <a href="#" className={styles.card}>
              <h3>{faker.lorem.words()}</h3>
              <p>{faker.lorem.sentence()}</p>
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Latest news</h2>
          <p>
            {faker.lorem.sentence()}
            <br />
            {dateFormatter.format(faker.date.recent())}
          </p>
          <p>
            {faker.commerce.productName()}
            <br />
            {faker.commerce.productDescription()}....
          </p>
        </div>

        <div className={styles.section}>
          <h2>Help & Advice</h2>
          <p>
            {faker.lorem.sentence()}
            <br />
            {dateFormatter.format(faker.date.recent())}
          </p>
          <p>
            {faker.commerce.productName()}
            <br />
            {faker.commerce.productDescription()}....
          </p>
        </div>

        <div className={styles.section}>
          <h2>Download our app</h2>
          <p>Discover all the new features our app offers.</p>
          <p>Available to download on Android and iOS now!</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
