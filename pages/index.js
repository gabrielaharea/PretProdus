import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PretProdus</title>
        <meta name="description" content="Pretul produselor alimentare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      homepage
    </div>
  );
}
