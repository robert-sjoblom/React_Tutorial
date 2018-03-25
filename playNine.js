const possibleCombinationSum = function(arr, n) {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
        arr.pop();
        return possibleCombinationSum(arr, n);
    }
    let listSize = arr.length, combinationsCount = (1 << listSize);
    for (let i = 1; i < combinationsCount ; i++ ) {
        let combinationSum = 0;
        for (let j=0 ; j < listSize ; j++) {
            if (i & (1 << j)) { combinationSum += arr[j]; }
        }
        if (n === combinationSum) { return true; }
    }
    return false;
};

const Stars = (props) => {
    return (
        <div className="col-5">
            {_.range(props.numberOfStars).map((star, i) => <i key={i} className="fa fa-star"></i>)}
        </div>
    );
};

const Button = (props) => {
    let button;

    switch(props.answerIsCorrect) {
        case true:
            button =
                <button onClick={props.acceptAnswer} className="btn btn-success">
                    <i className="fa fa-check"></i>
                </button>;
            break;
        case false:
            button =
                <button className="btn btn-danger" onClick={props.resetAnswer}>
                    <i className="fa fa-times"></i>
                </button>;
            break;
        default:
            button =
                <button className="btn" onClick={props.checkAnswer} disabled={props.selectedNumbers.length === 0}>=</button>;
            break;
    }

    return (
        <div className="col-2 text-center">
            {button}
            <br />
            <br />
            <button className="btn btn-warning btn-sm" disabled={props.redraws === 0} onClick={props.redraw}>
                <i className="fa fa-adjust"></i>{props.redraws}
            </button>
        </div>
    );
};

const Answer = (props) => {
    return (
        <div className="col-5">
            {props.selectedNumbers.map((number, i) => <span key={i} onClick={() => props.unselectNumber(number)}>{number}</span>)}
        </div>
    );
};

const Numbers = (props) => {
    const numberClassName = (number) => {
        if (props.usedNumbers.indexOf(number) >= 0) {
            return "used";
        }
        if (props.selectedNumbers.indexOf(number) >= 0) {
            return "selected";
        }
    };

    return (
        <div className="card text-center">
            <div>
                {Numbers.list.map((number, i) => <span key={i} className={numberClassName(number)} onClick={() => props.selectNumber(number)}>{number}</span>)}
            </div>
        </div>
    )
};
Numbers.list = _.range(1, 10);
//constant across all instances of Numbers

const DoneFrame = (props) => {
    return (
        <div className="text-center">
            <h2>{props.doneStatus}</h2>
            <button className="btn btn-secondary" onClick={props.resetGame}>Play Again?</button>
        </div>
    );
};

class Game extends React.Component {
    static randomNumber = () => { return 1 + Math.floor(Math.random() * 9) };
    static initialState = () => ({
        selectedNumbers: [],
        numberOfStars: Game.randomNumber(),
        answerIsCorrect: null,
        usedNumbers: [],
        redraws: 5,
        doneStatus: null,

    });

    state = Game.initialState();

    selectNumber = (clickedNumber) => {
        if (this.state.usedNumbers.indexOf(clickedNumber) < 0 && this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
            this.setState(prevState => ({
                answerIsCorrect: null,
                selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
            }));
        }
    };

    unselectNumber = (clickedNumber) => {
        this.setState(prevState => ({
            answerIsCorrect: null,
            selectedNumbers: prevState.selectedNumbers
            .filter(number => number !== clickedNumber)
        }))
    };

    checkAnswer = () => {
        this.setState(prevState => ({
            answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
        }));
    };

    acceptAnswer = () => {
        this.setState(prevState => ({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers: [],
            answerIsCorrect: null,
            numberOfStars: Game.randomNumber(),
        }), () => this.updateDoneStatus());
    };

    resetAnswer = () => {
        this.setState(prevState => ({
            selectedNumbers: [],
            answerIsCorrect: null,
        }))

    };

    redraw = () => {
        if (this.state.redraws > 0) {
            this.setState(prevState => ({
                numberOfStars: Game.randomNumber(),
                answerIsCorrect: null,
                selectedNumbers: [],
                redraws: prevState.redraws - 1
            }), () => this.updateDoneStatus())
        }
    };

    possibleSolutions = ({numberOfStars, usedNumbers})  => {
        const possibleNumbers = _.range(1, 10).filter(number => usedNumbers.indexOf(number) === -1);

        return possibleCombinationSum(possibleNumbers, numberOfStars)
    };

    updateDoneStatus = () => {
        this.setState(prevState => {
            if (prevState.usedNumbers.length === 9) {
                return { doneStatus: "Done. Nice!" };
            }
            if (!this.possibleSolutions(prevState) && prevState.redraws === 0) {
                return { doneStatus: "Game over!" };
            }
        })
    };

    resetGame = () => {
        this.setState(Game.initialState())
    };


    render() {
        const {
            selectedNumbers,
            numberOfStars,
            answerIsCorrect,
            usedNumbers,
            redraws,
            doneStatus,
        } = this.state; //without this, we would write this.state.selectedNumbers etc
        return (
            <div>
                <h3>Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={numberOfStars} />
                    <Button selectedNumbers={selectedNumbers}
                            redraws={redraws}
                            checkAnswer={this.checkAnswer}
                            answerIsCorrect={answerIsCorrect}
                            acceptAnswer={this.acceptAnswer}
                            redraw={this.redraw}
                            resetAnswer={this.resetAnswer}/>
                    <Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber} />
                </div>
                <br />
                {doneStatus ? <DoneFrame doneStatus={doneStatus} resetGame={this.resetGame} /> :
                    <Numbers selectedNumbers={selectedNumbers}
                             selectNumber={this.selectNumber}
                             usedNumbers={usedNumbers} />
                }
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Game />
            </div>
        )
    }
}

ReactDOM.render(<App />, mountNode);