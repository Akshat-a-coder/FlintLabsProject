import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/header";
import Main from "../components/main";

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>Get Token Price</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Main />
      </main>
    </section>
  );
}