import React from "react";
import CategoriesNavbar from "../../data/categoriesNavbar.json";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul style={style.categoriesList}>
      {CategoriesNavbar.map((category) => {
        return (
          <li style={style.li} key={category.id}>
            <NavLink style={style.a} to={category.route}>
              {category.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;

const style = {
  categoriesList: {
    display: "flex",
  },
  li: {
    margin: "auto 2vw auto 0",
    listStyle: "none",
    textDecoration: "none",
  },
  a: {
    fontFamily: "texto",
    fontSize: "1rem",
    color: "#FF1616",
    listStyle: "none",
    textDecoration: "none",
  },
};
