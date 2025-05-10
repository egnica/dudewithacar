import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Dude with a Car (dot com)</h1>
      <h2>Coming soon</h2>
    </div>
  );
}
