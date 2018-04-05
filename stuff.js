const obj = {[dynamicKey]: someValue};

//if
const person = {
    name: name, //name: robert
    age: age,
};

//new
const person = {name, age}; //look up shorthand syntax for object key assignment

//old
const obj = {
    method: function(arg1, arg2) {
        //do stuff
    }
}

//new
const obj = {
    method(arg1, arg2) {
        //do stuff
    }
};

//combine
const obj = {
    [methodName](arg1, arg2) {
        //do stuff
    }
};

//es6 has getters
const user = {
    firstName: "John",
    lastName: "Doe"

    //es3
    fullName: function() {
        return this.firstName + " " + this.lastName;
    } // used like so: user.fullName();

    get fullname() {
        return this.firstName + " " + this.lastName;
    } // used like so: user.fullName; // runs every time
};

const user = {
    set userName(str) {
        log(this._userName + " changed name to " + str);
        this._userName = str;
    }
}

user.userName = "Steve"; //"Steve" is str in set userName(str)

const user = {
    set userName(str) {
        if (str.match(/[^a-z]/)) {
            throw "Name can only contain lowercase letters.";
        }
        this._userName = str;
    }
}
user.userName = "Bob"; //Name can only contain...

// ---------

//Destructuring and rest

const obj = { name: "Marc", age: 37 };
const { name } = obj; //Marc

//

var augmentedObj = {...oldObj, ...newProps}; //order matters, key name in both, last (newProps) name will be used

