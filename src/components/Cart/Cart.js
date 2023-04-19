import React, { useContext, useState } from "react";
import { CartProductContext } from "../../context/CartProductContext";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Button, FormControl, Input, InputLabel } from "@mui/material";

export const Cart = () => {
  const { cart, cartQty, removeProduct, clearCart, total } =
    useContext(CartProductContext);
  const [err, setErr] = useState(false);
  const [buyer, setBuyer] = useState({});
  const [clickInButtonBuy, setClickInButtonBuy] = useState(false);
  const navigate = useNavigate();

  const clickSellsFirst = () => {
    setClickInButtonBuy(true);
  };

  const clickSells = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const sellColection = collection(db, "salesMade");
      addDoc(sellColection, {
        buyer,
        item: cart,
        total,
        time: serverTimestamp(),
      })
        .then((result) => {
          alert("Este es el ID de su compra " + result.id);
          stockChange();
          setClickInButtonBuy(false);
          clearCart();
          navigate("/");
        })

        .catch(() => {
          setErr(true);
        });
    } else {
      alert("Hubo un error");
    }
  };

  const stockChange = () => {
    cart.forEach((product) => {
      const docReference = doc(db, "products", product.id);
      updateDoc(docReference, { stock: product.stock - product.qty });
    });
  };

  const changeInput = (e) => {
    console.log(e);
    const key = e.target.id;
    const value = e.target.value;
    setBuyer((prevBuyer) => ({
      ...prevBuyer,
      [key]: value,
    }));
  };

  const validateForm = () => {
    if (
      buyer.firstName &&
      buyer.lastName &&
      buyer.phone &&
      buyer.email &&
      buyer.emailVerification &&
      buyer.emailVerification == buyer.email &&
      cart.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {!err ? (
        !clickInButtonBuy ? (
          <main style={style.main}>
            {cartQty !== 0 ? (
              <>
                <h1 style={style.div}>
                  AQUI ESTAN LOS OBJETOS QUE HAS SELECCIONADO
                </h1>
                <button onClick={() => clearCart()}>VACIAR</button>
                {cart.map((product) => {
                  return (
                    <div style={style.div} key={product.id}>
                      <img
                        style={style.img}
                        src={product.image}
                        alt={product.title}
                      />
                      <h2>
                        {product.title}---{product.viewcategory}
                      </h2>
                      <h4>Cantidad: {product.qty}</h4>
                      <h4>${product.price * product.qty}</h4>
                      <button
                        onClick={() =>
                          removeProduct(product.id, product.qty, product)
                        }
                      >
                        ELIMINAR
                      </button>
                    </div>
                  );
                })}
                <h2 style={style.div}>MONTO TOTAL EN ${total}</h2>
                <button onClick={clickSellsFirst}>IR A PAGAR</button>
              </>
            ) : (
              <>
                <h1 style={style.div2}>
                  EL CARRITO SE ENCUENTRA VACIO, VE <Link to={"/"}>AQUI</Link> PARA
                  SELECCIONAR PRODUCTOS
                </h1>
              </>
            )}
          </main>
        ) : (
          <div style={style.form}>
            <FormControl>
              <InputLabel htmlFor="firstName">NOMBRE</InputLabel>
              <Input id="firstName" type="text" onChange={changeInput}></Input>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="lastName">APELLIDO</InputLabel>
              <Input id="lastName" type="text" onChange={changeInput}></Input>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="">NUMERO DE CONTACTO</InputLabel>
              <Input id="phone" type="number" onChange={changeInput}></Input>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="email">EMAIL</InputLabel>
              <Input id="email" type="email" onChange={changeInput}></Input>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="emailVerification">
                Email Verification
              </InputLabel>
              <Input
                id="emailVerification"
                type="email"
                onChange={changeInput}
              ></Input>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={clickSells}
            >
              FINALIZAR
            </Button>
          </div>
        )
      ) : (
        <>
          <h2>UPS!! HAY UN ERROR...</h2>
        </>
      )}
    </>
  );
};

export default Cart;

const style = {
  main: {
    padding: "1vw 12vw 0px",
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1vw 0",
    color: "#000000",
  },

  div2: {
    margin: "1vw 0",
    color: "#E2DFDC",
  },
  img: {
    width: "10%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "650px",
  },
};
