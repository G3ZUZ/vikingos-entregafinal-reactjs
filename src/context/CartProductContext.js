import React, { createContext, useState, useEffect } from "react";

export const CartProductContext = createContext();

export const CartProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartQty, setCartQty] = useState(0);
  const [total, setTotal] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let qtyInitial = 0;
    cart.forEach((product) => {
      qtyInitial += product.qty;
    });
    setCartQty(qtyInitial);
    setTotal(cart.reduce((acc, item) => acc + item.qty * item.price, 0));
  }, [cart]);

  const addProduct = (product, qty) => {
    if (isInCart(product.id)) {
      setCart(
        cart.map((productCart) => {
          if (productCart.id === product.id) return { ...productCart, qty };
          return productCart;
        })
      );
    } else {
      setCart([...cart, { ...product, qty }]);
    }
  };

  const flagFunctionTrue = () => {
    setFlag(true);
  };
  const flagFunctionFalse = () => {
    setFlag(false);
  };

  const removeProduct = (id, qty, product) => {
    if (qty > 1) {
      qty--;
      setCart(
        cart.map((productCart) => {
          if (productCart.id === product.id) return { ...productCart, qty };
          return productCart;
        })
      );
    } else {
      setCart(cart.filter((product) => product.id !== id));
    }
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartProductContext.Provider
      value={{
        cart,
        cartQty,
        total,
        flag,
        addProduct,
        removeProduct,
        clearCart,
        flagFunctionFalse,
        flagFunctionTrue,
      }}
    >
      {children}
    </CartProductContext.Provider>
  );
};
