// const Button = (props) => {
// 	return (
//   	<button>5</button>
//   );
// }
// ReactDOM.render(<Button />, mountNode);
// class Button extends React.Component {
// 	// old way of doing it:
// 	// constructor(props) {
// 	// super(props);
// 	// this.state = { counter: 0 }
// 	// }
// 	// handleClick = () => {
//   //Async option, might hit race condition
//   // 	this.setState({
//   //   	counter: this.state.counter + 1
//   //   })
//   // };
// 	// Use this if object depends on previous state
//   // this.setState((prevState) => {
//   // 	return {
//   //   	counter: prevState.counter + 1
//   //   };
//   // });
//   // }
//   render() {
//     return (
//       <button onClick={this.handleClick}>+1</button>
//     );
//   }
// }

class Button extends React.Component {
    handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue)
    };

    render() {
        return (
            <button onClick={this.handleClick}>+{this.props.incrementValue}</button>
        );
    }
}

const Result = (props) => {
    return (<div>{props.counter}</div>)
};

class App extends React.Component {
    state = {counter: 0};

    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
            counter: prevState.counter + incrementValue
        }));
    };
    render() {
        return (
            <div>
                <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
                <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
                <Result counter={this.state.counter}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, mountNode);