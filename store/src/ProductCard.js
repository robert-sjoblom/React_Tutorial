import React from "react";

const ProductCard = (props) => {
    return (
        <div data-value-id={props.id} onClick={() => props.showProduct(props.id)}>
            <h3>{props.name}</h3>
            <img width="75px" src={props.url} alt="a product"/>
            <div>{props.desc}</div>
            <div>{props.price}</div>
            <button onClick={(e) => props.onClick(props.id, e)}>Add to cart</button>
        </div>
    );
};

export default ProductCard;