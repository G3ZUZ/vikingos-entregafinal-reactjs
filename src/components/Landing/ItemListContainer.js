import React, { useState, useEffect, useContext } from "react";
import { CartProductContext } from "../../context/CartProductContext";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import Loader from "../../assets/template/Loader";

export const ItemListContainer = ({ greeting, stockGreeting }) => {
  const [productsList, setProductsList] = useState([]);
  const [err, setErr] = useState(false);
  const { name } = useParams();
  const { flag, flagFunctionFalse } = useContext(CartProductContext);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const productsFiltered = name
      ? name === "Stock"
        ? productsCollection
        : query(productsCollection, where("category", "==", name))
      : productsCollection;

    getDocs(productsFiltered)
      .then((data) => {
        const listDB = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProductsList(listDB);
      })
      .catch(() => {
        setErr(true);
      });
    flagFunctionFalse();
  }, [name, flag]);

  return (
    <main>
      <h1 style={style.greeting}>
        {name === "Stock" ? stockGreeting : greeting}
      </h1>
      {!err ? (
        <>
          {productsList.length ? (
            <ItemList productsList={productsList} />
          ) : (
            <Loader />
          )}
        </>
      ) : (
        <>
          <h2>UPS!! HAY UN ERROR...</h2>
        </>
      )}
    </main>
  );
};

export default ItemListContainer;

const style = {
  greeting: {
    textAlign: "center",
    padding: "1vw 0px 0px",
    fontFamily: "logotipo",
    fontSize: "2.5rem",
    color: "#E2DFDC",
  },
};
