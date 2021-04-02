import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Footer from "../../Footer";
import dateFormatter from "../../dateFormatter";
import { traders } from "../../data";

export default function Home({ trader }) {
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
          <h2>DJ and Sons Plumbing & Heating</h2>
        </div>

        <div className={styles.section}>
          <div className={styles.list}>
            {[trader].map((trader) => (
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
          <h2>Profile</h2>
          {trader.description.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.section}>
          <h2>Reviews</h2>
        </div>

        <div className={styles.section}>
          <div className={styles.list}>
            {trader.reviews.map((review) => (
              <div className={styles.listItem} key={review.id}>
                <h3>
                  <div>
                    {review.name} {dateFormatter.format(new Date(review.date))}
                  </div>
                </h3>
                <p>"{review.quote}"</p>
                <p>{review.rating} ⭐⭐⭐⭐⭐</p>
                {review.reply && <p>Trader reply: "{review.reply}"</p>}
                <div>
                  <div>Initial impression ⭐⭐⭐⭐⭐</div>
                  <div>Cleanliness ⭐⭐⭐⭐⭐</div>
                  <div>Value ⭐⭐⭐⭐⭐</div>
                  <div>Punctuality ⭐⭐⭐⭐⭐</div>
                  <div>Quality ⭐⭐⭐⭐⭐</div>
                  <div>Overall opinion ⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = traders.map((trader) => ({
    params: { id: trader.id },
  }));

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const trader = traders.find((x) => x.id === params.id);

  return { props: { trader } };
}