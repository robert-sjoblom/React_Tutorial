export default class Character {
    constructor() {
        this.attributes = new Attributes();
    }

    validator() {
        let sum = 0;
        for (const key in this.attributes) {
            if (this.attributes.hasOwnProperty(key)) {
                const element = this.attributes[key].mod;
                sum += element;
            }
        }
        return (sum >= 0);
    }
}

class Attributes {
    constructor() {
        this.constitution = new Attribute();
        this.strength = new Attribute();
        this.dexterity = new Attribute();
        this.intelligence = new Attribute();
        this.wisdom = new Attribute();
        this.charisma = new Attribute();
    }
}
class Attribute {
    constructor() {
        this.value = getDiceRoll(1, 6, 3);
        this.mod = -2;
    }
}

function getDiceRoll(start, end, noOfDice=1) {
    let sum = 0;
    for (let i = 0; i < noOfDice; i++) {
        sum += Math.floor((Math.random()*end) + start);
    }
    return sum;
}

