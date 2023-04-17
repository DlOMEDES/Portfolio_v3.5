import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.banner}>
        <h1>Live from main Index SECTION</h1>
      </section>
    </>
  );
}