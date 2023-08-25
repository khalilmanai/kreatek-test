"use client";
import React from "react";
import styles from "./layout.module.css";
import { CartContext } from "@/context/context";
import CartCard from "@/components/cartCard/cartCard";
const page = () => {
  const { cartItem, calculateTotal } = CartContext();
  console.log(cartItem);
  return (
    <div className={styles.container}>
      <h1>This is your cart:</h1>
      <div className={styles.box}>
        {cartItem.map((product) => (
          <CartCard key={product.id} item={product} />
        ))}
      </div>
      <div className={styles.total}>
        <h1> Your total is : {calculateTotal}</h1>
      </div>
    </div>
  );
};

export default page;
