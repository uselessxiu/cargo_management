"use client";

import React from "react";
import styles from "./InputDesign.module.css";
import IconWrapper from "./IconWrapper";

export const ActionCard = ({ icon, label, doubleWidth = false }) => {
  return (
    <article
      className={`${styles.actionCard} ${doubleWidth ? styles.doubleCard : ""}`}
    >
      {doubleWidth ? (
        <div className={styles.cardGroup}>
          {icon.map((iconItem, index) => (
            <div key={index} className={styles.cardContent}>
              <IconWrapper>
                <div dangerouslySetInnerHTML={{ __html: iconItem }} />
              </IconWrapper>
              <p className={styles.cardLabel}>{label[index]}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.cardContent}>
          <IconWrapper>
            <div dangerouslySetInnerHTML={{ __html: icon }} />
          </IconWrapper>
          <p className={styles.cardLabel}>{label}</p>
        </div>
      )}
    </article>
  );
};

export default ActionCard;
