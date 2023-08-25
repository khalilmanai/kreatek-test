"use client";
import React, { useState } from "react";
import styles from "./Card.module.css";
import { CartContext } from "@/context/context";
const Card = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = CartContext();

  function increment() {
    setQuantity(quantity + 1);
  }
  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.name}>{item.label}</h2>
          <p>quantity : {item.qty}</p>
        </div>

        <div className={styles.box}>
          <label>Gift:</label>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="gift"
            checked={item.is_gift}
            disabled={!item.is_gift}
          />
          <div className={styles.bottomBox}>
            <button
              onClick={() => {
                decrement();
              }}
              className={styles.panel}>
              -
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => {
                increment();
              }}
              className={styles.panel}>
              +
            </button>
          </div>

          {item.is_gift ? (
            <button
              onClick={() => {
                addToCart(item, quantity, item.gift_price);
              }}
              className={styles.button}>
              {" "}
              buy ${item.gift_price}
            </button>
          ) : (
            <button
              onClick={() => {
                addToCart(item, quantity, item.price);
              }}
              className={styles.button}>
              {" "}
              buy ${item.price}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
