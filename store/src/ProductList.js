import React from "react";
import ProductCard from "./ProductCard";

const ProductList = (props) => {
    return (
        <div>
            {props.prod.map(product => <ProductCard key={product.id} {...product} onClick={props.addToCart} showProduct={props.showProduct}/>)}
        </div>
    );
};

export default ProductList;