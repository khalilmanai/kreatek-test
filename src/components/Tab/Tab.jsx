"use client";
import React from "react";
import { IoCartOutline, IoStorefrontOutline } from "react-icons/io5";
import styles from "./Tab.module.css";

const Tab = ({ icon, name }) => {
  let tabIcon;
  switch (icon) {
    case "cart":
      tabIcon = <IoCartOutline />;
      break;
    case "product":
      tabIcon = <IoStorefrontOutline />;
      break;
    case "home":
      tabIcon = <IoHomeOutline />;
      break;
  }

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{tabIcon}</div>
      <p className={styles.text}>{name}</p>
    </div>
  );
};

export default Tab;
