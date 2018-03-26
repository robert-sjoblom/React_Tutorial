import React from "react"; //eslint-disable-line

const CartSpan = (props) => {
    const totalAmt = Object.keys(props.cart)
        .reduce((sum, key) => sum + props.cart[key], 0) || null;

    return (<span>{totalAmt}</span>);
};

const Basket = (props) => {
    return (
        <div></div>
    )
}
export default CartSpan;