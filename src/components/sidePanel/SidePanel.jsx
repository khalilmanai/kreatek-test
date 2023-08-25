import React from "react";
import styles from "./sidePanel.module.css";
import Image from "next/image";
import Link from "next/link";
import Tab from "../Tab/Tab";

const SidePanel = () => {
  const tabs = [
    {
      name: "Home",
      link: "/",
      icon: "product",
    },
    {
      name: "product",
      link: "/Shop",
      icon: "product",
    },
    {
      name: "cart",
      link: "/Cart",
      icon: "cart",
    },
  ];

  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.LogoContainer}>
          <Image
            className={styles.logo}
            width={300}
            height={100}
            src="https://kreatek.tn/images/logo.png"
          />
        </div>
      </Link>
      <div>
        {tabs.map((item) => (
          <Link href={item.link}>
            <Tab icon={item.icon} name={item.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidePanel;
