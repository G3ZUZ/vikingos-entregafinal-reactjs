import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [err, setErr] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, id);

    getDoc(refDoc)
      .then((data) => {
        const product = {
          ...data.data(),
          id: data.id,
        };
        setProduct(product);
      })
      .catch(() => {
        setErr(true);
      });
  }, [id]);

  return (
    <main>
      {!err ? (
        <ItemDetail product={product} />
      ) : (
        <>
          <h2>UPS!! HAY UN ERROR...</h2>
        </>
      )}
    </main>
  );
};

export default ItemDetailContainer;
