const Task = require("./classTask");
const Repo = require("./taskRepository");

// const task1 = new Task("Create a demo for constructors");
const task1 = new Task(Repo.get(1));

const task2 = new Task({name: "Create a demo for modules.name"});
const task3 = new Task({name: "Create a demo for singletons.name"});
const task4 = new Task({name: "Create a demo for prototypes.name"});

task1.complete();
task2.save();
task3.save();
task4.save();

