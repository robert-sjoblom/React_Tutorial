class IObservable {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer)
    }
    removeObserver(observer, callback) {
        this.observers.pop(); //whatever
    }
    // notifyObservers() {
    //     this.observers.forEach() //map over observers and call each function
    // }

    printStatus() {
        console.log(this.observers[0]["temperature"](5));
    }
}

const WeatherStation = new IObservable();

WeatherStation.addObserver({"temperature": temp => console.log(temp)});

console.log("This happens first");
WeatherStation.printStatus();


