import React from "react";

const Basket = (props) => {
    return (
        <div>This is the basket.{props}</div>
    );
};

const Checkout = (props) => {
    return (
        <React.Fragment>
            <div>This is the checkout page.</div>
            <Basket cart={props}/>
        </React.Fragment>
    );
};

export default Checkout;