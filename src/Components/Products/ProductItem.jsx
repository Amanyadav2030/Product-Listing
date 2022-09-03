import React from "react";

const ProductItem = ({brand,title,image,price,category}) => {
  // console.log({brand,title,image,price,category});
  return (
    <div 
      data-testid="product-item"
      style={{
        display: "flex",
        gap: "11px",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        flexDirection: "column",
      }}
      className="items"
    >
      <img data-testid="product-image" alt={title} src={image} height="100px" />
      <b data-testid="product-title" className="title">{title}</b>
      <span data-testid="product-price">₹ {price}</span>
      <div style={{ display: "flex" }}>
        <b data-testid="product-category" style={{
                  textDecoration: "underline",
                  fontSize: "18px",
                  letterSpacing: "0.5px",
                }}>{category}</b>
      </div>
    </div>
  );
};
export default ProductItem;
