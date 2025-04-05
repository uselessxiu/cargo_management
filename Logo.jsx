import React from "react";
import styles from "./LoginPage.module.css";

export const Logo = ({ imageSrc }) => {
  return (
    <div className={styles.logoContainer}>
      <img src={imageSrc} alt="Logo" className={styles.logoIcon} />
      <h1 className={styles.logoText}>
        <span>STELLAR</span>
        <br />
        <span>STASH</span>
      </h1>
    </div>
  );
};
