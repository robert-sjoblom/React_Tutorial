import React from "react";

const Header = (props) => {
    return (
        <header style={{ height: "100px", display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "skyblue"}}>
            <div onClick={props.onClick} data-show="products" style={{textDecoration: "none", color: "white", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "-2px", fontSize: "4em"}}>Products</div>
            <div onClick={props.onClick} data-show="products" style={{textDecoration: "none", color: "white", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "-2px", fontSize: "4em"}}>Checkout</div>
        </header>
    );
};

export default Header;