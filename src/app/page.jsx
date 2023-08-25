import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        Welcome to the Kreatek Store
        <br />
        check the panel on the left to consult the products
      </h1>
    </div>
  );
}
