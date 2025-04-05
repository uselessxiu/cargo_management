import React from "react";
import styles from "./LoginPage.module.css";
import { Header } from "./Header";
import { LoginForm } from "./LoginForm";

export const LoginPage = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <LoginForm />
    </main>
  );
};

export default LoginPage;
