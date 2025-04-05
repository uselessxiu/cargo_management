"use client";

import React from "react";
import styles from "./InputDesign.module.css";
import ActionCard from "./ActionCard";

const ICONS = {
  plus: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 10V38M10 24H38" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  search: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42 42L33.3 33.3M38 22C38 30.8366 30.8366 38 22 38C13.1634 38 6 30.8366 6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  delete: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 42C12.9 42 11.9583 41.6083 11.175 40.825C10.3917 40.0417 10 39.1 10 38V12H8V8H18V6H30V8H40V12H38V38C38 39.1 37.6083 40.0417 36.825 40.825C36.0417 41.6083 35.1 42 34 42H14ZM34 12H14V38H34V12ZM18 34H22V16H18V34ZM26 34H30V16H26V34Z" fill="white"></path></svg>`,
  fastForward: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 38L44 24L26 10V38Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 38L22 24L4 10V38Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  download: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30M14 20L24 30M24 30L34 20M24 30V6" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  upload: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42 30V38C42 39.0609 41.5786 40.0783 40.8284 40.8284C40.0783 41.5786 39.0609 42 38 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V30M34 16L24 6M24 6L14 16M24 6V30" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  fileText: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V16M28 4L40 16M28 4V16H40M32 26H16M32 34H16M20 18H16" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
};

export const ActionGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <ActionCard
        doubleWidth={true}
        icon={[ICONS.plus, ICONS.search]}
        label={["Placement", "Retrieve"]}
      />
      <ActionCard icon={ICONS.delete} label="Dispose" />
      <ActionCard icon={ICONS.fastForward} label="Simulate" />
      <ActionCard
        doubleWidth={true}
        icon={[ICONS.download, ICONS.upload]}
        label={["Load CSV", "Export CSV"]}
      />
      <ActionCard icon={ICONS.fileText} label="Log File" />
    </div>
  );
};

export default ActionGrid;
