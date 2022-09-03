import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = ({products}) => {
  return <div data-testid="products-container">{products.map((el) => {
    // <h1>this is aman/</h1>
     return <ProductItem key={el.id} brand={el.brand} title={el.title}  price={el.price} image={el.image} category={el.category }/>
  })}</div>;
};
 
// export
export default ProductList;
