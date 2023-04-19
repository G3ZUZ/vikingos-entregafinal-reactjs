import React, { useState, useContext } from "react";
import ItemCount from "../../assets/template/ItemCount";
import { Link } from "react-router-dom";
import { CartProductContext } from "../../context/CartProductContext";

export const ItemDetail = ({ product }) => {
  const [buttonCartStatus, setButtonCartStatus] = useState(true);
  const { addProduct } = useContext(CartProductContext);

  const onAdd = (count) => {
    setButtonCartStatus(false);
    addProduct(product, count);
  };
  return (
    <>
      <div style={style.mainItemDetail}>
        <img
          style={style.imgItemDetail}
          src={product.image}
          alt={product.title}
        />
        <div style={style.infoItemDetail}>
          <h1 style={style.titleItemDetail}>{product.title}</h1>
          <p style={style.priceItemDetail}>${product.price}</p>
          <p style={style.descriptioItemDetail}>{product.description}</p>
          {buttonCartStatus ? (
            <ItemCount product={product} onAdd={onAdd} />
          ) : (
            <Link to={"/cart"}>
              <button>Finalizar Compra</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;

const style = {
  mainItemDetail: {
    display: "flex",
    flexWrap: "wrap",
    margin: "1vw 12vw 0px",
    justifyContent: "space-around",
  },
  imgItemDetail: {
    width: "35%",
  },
  infoItemDetail: {
    width: "40%",
  },
  titleItemDetail: {
    margin: "0 0 1vw",
    color: "#000000",
  },
  descriptioItemDetail: {
    margin: "0 0 1vw",
    color: "#000000",
  },
  priceItemDetail: {
    margin: "0 0 1vw",
    color: "#FF0000",
  },
};
