"use client";
import React from "react";
import styles from "./LoginPage.module.css";

export const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.loginSection}>
      <h2 className={styles.loginTitle}>LOGIN</h2>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label className={styles.inputLabel}>USER ID</label>
        <input type="text" className={styles.inputField} aria-label="User ID" />
        <label className={styles.inputLabel}>PASSWORD</label>
        <input
          type="password"
          className={styles.inputField}
          aria-label="Password"
        />
        <button type="submit" className={styles.submitButton}>
          ENTER
        </button>
      </form>
    </section>
  );
};
