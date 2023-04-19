import React from "react";
import Item from "./Item";

export const ItemList = ({ productsList }) => {
  return (
    <div style={style.div}>
      {productsList.map((product) => {
        return (
          <Item
            key={product.id}
            product={product}
            productsList={productsList}
          />
        );
      })}
    </div>
  );
};

export default ItemList;

const style = {
  div: {
    display: "flex",
    flexWrap: "wrap",
    margin: "1vw 12vw 0px",
    justifyContent: "space-between",
  },
};
