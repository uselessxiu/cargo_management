"use client";

import React from "react";
import styles from "./InputDesign.module.css";
import ActionGrid from "./ActionGrid";

const InputDesign = () => {
  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.mainTitle}>How can I help you, Astronomer?</h1>
      <section className={styles.contentSection}>
        <ActionGrid />
      </section>
    </main>
  );
};

export default InputDesign;
