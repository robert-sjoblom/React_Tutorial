class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    complete() {
        console.log("Completing task " + this.name);
        this.completed = true;
    }

    save() {
        console.log("Saving Task: " + this.name);
    }
}

module.exports = Task;