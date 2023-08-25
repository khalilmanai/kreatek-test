import React, { useEffect } from "react";
import styles from "./cartCard.module.css";
import { CartContext } from "@/context/context";
const CartCard = ({ item }) => {
  const { removeFromCart, count } = CartContext();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.name}>{item.label}</h2>
          <p>quantity : {count}</p>
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
          <button
            onClick={() => {
              removeFromCart(item.id);
            }}
            className={styles.button}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
