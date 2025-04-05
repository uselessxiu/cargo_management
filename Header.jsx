import React from "react";
import styles from "./LoginPage.module.css";
import { Logo } from "./Logo";
import { ProfileIcon } from "./ProfileIcon";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div />
      <Logo imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ba66cd1f7ffa6b093b2efb097a34be7c0228a42d" />
      <nav className={styles.navigation}>
        <button className={styles.navButton}>HOME</button>
        <button className={styles.navButton}>CARGO</button>
        <button className={styles.navButton}>STATS</button>
      </nav>
      <div className={styles.profileContainer}>
        <ProfileIcon />
      </div>
    </header>
  );
};
