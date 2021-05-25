import React from "react";
import {Grid} from "@material-ui/core";
import Product from "../Product/Product";
import useStyles from './styles';
const products = [
  { id: 1, name: "Shoes", description: "Running shoes.", price: "$5", image: "https://productimages.hepsiburada.net/s/9/200-296/9184644595762.jpg"},
  { id: 2, name: "Macbook", description: "Apple Macbook.", price: "$10", image: "https://productimages.hepsiburada.net/s/49/375/10983949860914.jpg" },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
    <div  className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;