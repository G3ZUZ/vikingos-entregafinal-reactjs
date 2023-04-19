import React from "react";
import Header from "./components/Header/Header";
import ItemDetailContainer from "./components/Product/ItemDetailContainer";
import ItemListContainer from "./components/Landing/ItemListContainer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProductProvider } from "./context/CartProductContext";

const App = () => {
  const greeting = "LAS MEJORES BEBIDAS ENCONTRALAS ACÁ";
  const stockGreeting = "DE LA TIENDA, A TU CASA Y A UN SOLO CLICK";
  return (
    <BrowserRouter>
      <CartProductProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={greeting} />} />
          <Route
            path="/bebidas/:name"
            element={<ItemListContainer greeting={greeting} />}
          />
          <Route
            path="/bebidas/vodka/:id"
            element={<ItemDetailContainer />}
          />
          <Route
            path="/bebidas/whisky/:id"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/:name"
            element={<ItemListContainer stockGreeting={stockGreeting} />}
          />
        </Routes>
      </CartProductProvider>
    </BrowserRouter>
  );
};

export default App;
