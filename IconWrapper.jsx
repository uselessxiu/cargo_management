"use client";

import React from "react";
import styles from "./InputDesign.module.css";

export const IconWrapper = ({ children }) => {
  return <div className={styles.iconContainer}>{children}</div>;
};

export default IconWrapper;
