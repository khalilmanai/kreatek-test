"use client";
import React from "react";
import { CartContext } from "../../context/context";
import Card from "@/components/card/Card";
import styles from "./layout.module.css";
const Products = () => {
  const { productsList } = CartContext();
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {productsList.map((product) => (
          <Card item={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
