// Module pattern
// const Module = function() {
//     const privateVar = "I am private?";
//     return ({
//         hello: function() {
//             console.log("Hello World!");
//         },
//         goodbye: function() {
//             console.log("Goodbye World!");
//         }
//     });
// }();

// Module.hello();

const repo = () => {
    // variables are not accessible from outside.
    // all methods have access
    const db = {};

    //define methods here
    const get = id => {
        console.log("Getting task " + id);
        return {
            name: "new task from db"
        };
    };

    const save = task => {
        console.log("Saving " + task.name + " to the db.");
    };
    
    // reveal them here.
    return {
        get: get,
        save: save
    };
};

module.exports = repo();