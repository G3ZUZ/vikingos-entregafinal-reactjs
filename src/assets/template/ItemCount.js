import React, { useState } from "react";

const ItemCount = ({ product, onAdd }) => {
  const stock = product.stock;
  const [count, setCount] = useState(0);

  const subtractProduct = () => {
    setCount(count - 1);
  };
  const addProduct = () => {
    setCount(count + 1);
  };
  const addCart = () => {
    onAdd(count);
  };

  return (
    <>
      <div style={style.containerItemCount}>
        <div style={style.itemQuantity}>
          <button
            style={style.btnQuantity}
            disabled={count === 0 ? true : false}
            onClick={subtractProduct}
          >
            -
          </button>
          <div style={style.count}>{count}</div>
          <button style={style.btnQuantity} onClick={addProduct}>
            +
          </button>
        </div>
        <button
          disabled={count > stock ? true : count === 0 ? true : false}
          onClick={addCart}
        >
          Agregar al Carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;

const style = {
  containerItemCount: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "120px",
  },
  itemQuantity: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  btnQuantity: {
    width: "20px",
  },
  count: {
    color: "#E2DFDC",
  },
};
