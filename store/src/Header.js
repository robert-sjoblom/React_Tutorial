import React from "react";

const Header = () => {
    return (
        <header style={{ height: "100px", display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "salmon"}}>
            <a href="" data-show="products" style={{textDecoration: "none", color: "white", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "-2px", fontSize: "4em"}}>Products</a>
            <a href="" data-show="checkout" style={{textDecoration: "none", color: "white", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "-2px", fontSize: "4em"}}>Checkout</a>
        </header>
    );
};

export default Header;