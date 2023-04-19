import React from "react";
import CartWidget from "../../assets/template/CartWidget";
import Navbar from "../../assets/template/Navbar";
import SocialNetwork from "../../assets/template/SocialNetwork";
import LogoLong from "../../assets/image/logos/logo-ch-long.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={style.header}>
      <section style={style.sectionHeaderTop}>
        <Link style={style.logoAndBrand} to={"/"}>
          <img style={style.img} src={LogoLong} alt="Logo Tienda Online" />
        </Link>
        <Link style={style.shoppingCart} to={"/cart"}>
          <CartWidget />
        </Link>
      </section>
      <section>
        <nav style={style.nav}>
          <Navbar />
          <SocialNetwork />
        </nav>
      </section>
    </header>
  );
};

export default Header;

const style = {
  header: {
    width: "100%",
    backgroundColor: "#322727",
    padding: "1vw 12vw 0",
    boxShadow: "inset rgba(0, 0, 0, 0.09) 0px -20px 12px",
  },
  sectionHeaderTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoAndBrand: {
    width: "fit-content",
    height: "fit-content",
  },
  img: {
    height: "50px",
  },
  shoppingCart: {
    position: "relative",
    backgroundColor: "unset",
    border: "unset",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "50px",
  },
};
