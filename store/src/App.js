import React, {Component} from "react";
import ProductList from "./ProductList";
import Header from "./Header";
import CartSpan from "./cart";

class App extends Component {
    state = {
        products: [{
            name: "Caltrops",
            price: "5 sp",
            desc: "Hurts to walk on",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Drevnosti_RG_v3_ill130c_-_Caltrop.jpg/250px-Drevnosti_RG_v3_ill130c_-_Caltrop.jpg",
            id: 1
        },
            {
                name: "Bedroll",
                price: "1 gp",
                desc: "To sleep in.",
                url: "https://images-na.ssl-images-amazon.com/images/I/41inhK8vL5L._SY355_.jpg",
                id: 2
            }
        ],
        cart: {
        }
    };

    addToCart = (id, event) => {
        const productID = id.toString();
        const cart = this.state.cart;

        if (cart[productID]) {
            cart[productID] += 1;
        } else {
            cart[productID] = 1;
        }

        event.stopPropagation();
        this.setState(prevState => ({
            cart: cart
        }))
    };

    showProduct = (id) => {
        console.log("Product was pressed!", id);
    };

    render() {
        return (
            <div>
                <Header/>
                <ProductList prod={this.state.products} addToCart={this.addToCart} showProduct={this.showProduct}/>
                <CartSpan cart={this.state.cart}/>
            </div>
        );
    }
}
export default App;