const Task = require("./class");

const task1 = new Task("Create a demo for constructors");
const task2 = new Task("Create a demo for modules.");
const task3 = new Task("Create a demo for singletons.");
const task4 = new Task("Create a demo for prototypes.");

task1.complete();
task2.save();
task3.save();
task4.save();