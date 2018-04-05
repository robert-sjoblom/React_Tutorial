import React from "react";

const Image = (props) => {
    return (
        <img width="75px" src={props.url} alt={props.alt} />
    );
};

const ProductCard = (props) => {
    return (
        <div data-value-id={props.id} onClick={() => props.showProduct(props.id)}>
            <h3>{props.name}</h3>
            <Image url={props.url} alt="a product" />
            <div>{props.desc}</div>
            <div>{props.price}</div>
            <button onClick={(e) => props.onClick(props.id, e)}>Add to cart</button>
        </div>
    );
};

const ProductList = (props) => {
    return (
        <React.Fragment>
            {props.prod.map(product => <ProductCard key={product.id} {...product} onClick={props.addToCart} showProduct={props.showProduct}/>)}
        </React.Fragment>
    );
};

export default ProductList;