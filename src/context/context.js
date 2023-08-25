"use client";
import products from "@/products/products";
const { useContext, createContext, useState } = require("react");

const ctx = createContext();

const CartContext = () => useContext(ctx);

const CartProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(products);
  const [userCredit, setUserCredit] = useState(100);
  const [cartItem, setCartItem] = useState([]);
  const [count, setCount] = useState();
  const [price, setPrice] = useState();
  const addToCart = (item, qte, price) => {
    setCount(qte);
    setPrice(price);

    // Check if the item is already in the cart
    const existingCartItemIndex = cartItem.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItem = [...cartItem];
      updatedCartItem[existingCartItemIndex].quantity += qte;
      setCartItem(updatedCartItem);
    } else {
      if (qte * price > userCredit) {
        alert(`Not enough funds! You need ${qte * price - userCredit} more.`);
      } else if (item.qty < qte) {
        alert(`We cannot provide the requested quantity.`);
      } else {
        const updatedItems = [...cartItem, { ...item, quantity: qte }];
        setCartItem(updatedItems);
        setProductsList((prevProducts) =>
          prevProducts.map((product) =>
            product.id === item.id
              ? { ...product, qty: product.qty - qte }
              : product
          )
        );
        setUserCredit(userCredit - qte * price);
      }
    }
  };

  const removeFromCart = (itemId) => {
    setCount(count - 1);

    if (count <= 1) {
      const updatedItems = cartItem.filter((item) => item.id !== itemId);
      setCartItem(updatedItems);
      const updatedProducts = productsList.map((product) =>
        product.id === itemId
          ? { ...product, qty: product.qty + count }
          : product
      );
      setProductsList(updatedProducts);

      setUserCredit(
        userCredit +
          count * products.find((product) => product.id === itemId).price
      );
    }
  };

  const calculateTotal = () => {
    const result = cartItem.reduce(
      (total, item) => total + item.price * item.quantity
    );
    console.log(result);
    return result;
  };

  const cart = {
    productsList,
    count,
    cartItem,
    addToCart,
    removeFromCart,
    calculateTotal,
  };
  return <ctx.Provider value={cart}>{children}</ctx.Provider>;
};

module.exports = { CartProvider, CartContext };
