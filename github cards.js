const Card = (props) => {
    return (
        <div style={{margin: "1em"}}>
            <img width="75px" src={props.avatar_url}/>
            <div style={{display: "inline-block", marginLeft: 10}}>
                <div style={{fontSize: "1.25em", fontWeight: "bold"}}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

/*
{props.cards.map(card => <Card name={card.name} avatar_url={card.avatar_url} company={card.company} />)}
can be achieved with
{...card} <- spread operator. nice.

<form onSubmit={this.handleSubmit}>
  <input type="text"
    ref={(input) => this.userNameInput = input} //adds a reference point for react
    placeholder="Github username" />
  <button type="Submit">Add card</button>
</form>
);
*/

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card} />)}
        </div>
    );
};

class Form extends React.Component {
    state = { userName: "" };
    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        /*.then(resp => resp.json())*/
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState( { userName: "" });
            })

    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.userName}
                       onChange={(event) => this.setState({ userName: event.target.value })}
                       placeholder="Github username" />
                <button type="Submit">Add card</button>
            </form>
        );
    }
}

class App extends React.Component {
    state = {
        cards: []
    };

    addNewCard = (cardInfo) => {
        this.setState(prevState => ({
            cards: prevState.cards.concat(cardInfo)
        }))
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard}/>
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);