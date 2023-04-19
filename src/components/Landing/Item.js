import React, { useState, useContext } from "react";
import { CartProductContext } from "../../context/CartProductContext";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { TitleTwoTone } from "@mui/icons-material";

export const Item = ({ product, productsList }) => {
  const { flagFunctionTrue } = useContext(CartProductContext);
  const { name } = useParams();
  const routeName = name;
  const [newStock, setNewStock] = useState(0);

  const clickUpdateValue = (id) => {
    flagFunctionTrue();
    productsList.forEach(() => {
      const docReference = doc(db, "products", id);
      updateDoc(docReference, { stock: parseInt(newStock) });
    });
  };
console.log(productsList)
  return (
    <Card style={styles.container}>
      <CardActionArea>
        <CardMedia component="img" image={product.image} alt={product.title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
          >
            {product.title}
          </Typography>
          {routeName === "Stock" ? (
            <>
              <Typography style={styles.price}>
                Stock Actual {product.stock}
              </Typography>
              <Typography style={styles.price}>
                Introduzca el nuevo stock
              </Typography>
            </>
          ) : (
            <Typography style={styles.price}>${product.price}</Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {routeName === "Stock" ? (
          <>
            <input
              type="number"
              onChange={(e) => setNewStock(e.target.value)}
            />
            <Button onClick={() => clickUpdateValue(product.id, newStock)}>
              ACTUALIZAR
            </Button>
          </>
        ) : (
          <Link to={`/bebidas/${product.category}/${product.id}`}>
            <Button size="small" color="primary">
              VER DETALLES
            </Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
};

export default Item;

const styles = {
  container: {
    width: "20%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 1vw 1vw",
    backgroundColor: "#929292",
  },
  title: {
    fontFamily: "titulo",
    fontSize: "1.2rem",
    color: "#E2DFDC",
    overflow: "hidden",
  },
  price: {
    color: "#E2DFDC",
  },
};
