import React, { Component } from "react";
import Header from "./Header";
import Character from "./Character"

class App extends Component {
    state = {
        char: new Character(),
        render: false
    };

    reroll = () => {
        this.setState({
            char: new Character()
        })
        console.log("rolled new attributes!");
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <Attribute value="12" mod="-1"/>
                <RerollButton show={this.state.char.attributes.validator()} onClick={this.reroll} />
            </React.Fragment>
        );
    }
}

const RerollButton = props => {
    if (props.show) {
        return <button onClick={props.onClick}>Reroll</button>
    } else {
        return null;
    }
    
}

const Attributes = prop => {
    return (
        null
    )

}
const Attribute = prop => <div className="attribute">{prop.value} | {prop.mod}</div>;

export default App;