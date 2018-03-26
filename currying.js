const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const someArr = ["A", "B", "C", "D"];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueA: "",
            valueB: "some initial value",
            valueC: "",
            valueD: "blah blah"
        };
    }

    handleChange = param => e => {
        const nextValue = e.target.value;
        this.setState({ ["value" + param]: nextValue });
    };

    render() {
        return (
            <div style={styles}>
                {someArr.map(obj => {
                    return (
                        <div>
                            <label>
                                {`input ${obj}   `}
                            </label>
                            <input
                                type="text"
                                value={this.state["value" + obj]}
                                onChange={this.handleChange(obj)}
                            />
                            <br />
                            <br />
                        </div>
                    );
                })}
            </div>
        );
    }
}
ReactDOM.render( < App /> , document.getElementById("root"));