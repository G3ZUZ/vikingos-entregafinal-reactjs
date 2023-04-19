import React from "react";
import CategoriesSocialNetwork from "../../data/categoriesSocialNetwork.json";

const SocialNetwork = () => {
  return (
    <ul style={style.categoriesSocialNetwork}>
      {CategoriesSocialNetwork.map((category) => {
        return (
          <li style={style.li} key={category.id}>
            <a href={category.href} target="_blank" rel="noreferrer">
              <img
                style={style.img}
                src={require(`../${category.img}`)}
                alt={category.name}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialNetwork;

const style = {
  categoriesSocialNetwork: {
    display: "flex",
  },
  li: {
    listStyle: "none",
    textDecoration: "none",
    margin: "auto 0px auto 1vw",
  },
  img: {
    height: "24px",
  },
};
