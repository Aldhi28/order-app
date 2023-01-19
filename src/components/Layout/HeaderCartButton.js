import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContex from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlihted] = useState(false);
  const cartCtx = useContext(CartContex);

  const { items } = cartCtx;

  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlihted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlihted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.Icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
