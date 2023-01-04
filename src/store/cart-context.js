import React from "react";
const CartContex = React.createContext({
  items: [],
  totalAmaunt: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContex;
