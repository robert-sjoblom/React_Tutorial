export default class Character {
    constructor() {
        this.attributes = new Attributes();
    }
}

class Attributes {
    constructor() {
        this.attributes = {
            constitution: new Attribute(),
            strength: new Attribute(),
            dexterity: new Attribute(),
            intelligence: new Attribute(),
            wisdom: new Attribute(),
            charisma: new Attribute()
        };
    }
    validator() {
        let sum = 0;
        // for (const key in this.attributes) {
        //     if (this.attributes.hasOwnProperty(key)) {
        //         const element = this.attributes[key].mod;
        //         sum += element;
        //     }
        // }
        console.log("Validator was called, returned", (sum>=0));
        return (sum >= 0);
    }
}
class Attribute {
    constructor() {
        this.value = getDiceRoll(1, 6, 3);
        this.mod = -2;
    }
}

function getDiceRoll(start, end, noOfDice = 1) {
    let sum = 0;
    for (let i = 0; i < noOfDice; i++) {
        sum += Math.floor((Math.random() * end) + start);
    }
    return sum;
}

