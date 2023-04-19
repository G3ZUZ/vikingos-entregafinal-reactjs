import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartProductContext } from "../../context/CartProductContext";

const CartWidget = () => {
  const { cartQty } = useContext(CartProductContext);

  return (
    <>
      <ShoppingCartIcon sx={{ color: "#E2DFDC" }} fontSize="large" />
      {cartQty === 0 ? (
        <span></span>
      ) : (
        <span style={style.cartCounter}>{cartQty}</span>
      )}
    </>
  );
};

export default CartWidget;
const style = {
  cartCounter: {
    color: "#000000",
    fontFamily: "texto",
    fontSize: "0.6rem",
    position: "absolute",
    top: "0",
    left: "60%",
    backgroundColor: "#11DA00",
    padding: "4px 8px",
    borderRadius: "0.8rem",
    zIndex: "10",
  },
};
