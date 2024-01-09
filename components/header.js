import Image from "next/image";
import styles from "../styles/Home.module.css";

import Logo from "../public/assets/Moralis_logo.jpg";

export default function Header() {
  return (
    <section className={styles.header}>
      <Image src={Logo} alt="Logo image" width="102" height="80"/>
      <h1 className={styles.title}>Get Wallet's Native Token Balance</h1>
    </section>
  );
}