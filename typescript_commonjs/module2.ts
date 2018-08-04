import importedModule3 = require('./module3');

function privateFunc() {
    console.log("Executed from module2.privateFunc");
}

export function publicFunc() {
    privateFunc();

    console.log("Executed from module2.publicFunc");

    importedModule3.publicFunc();
}