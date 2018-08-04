import importedModule2 = require('./module2');

function privateFunc() {
    console.log("Executed from module1.privateFunc");

    importedModule2.publicFunc();
}

export function publicFunc() {
    privateFunc();

    console.log("Executed from module1.publicFunc");        
}
