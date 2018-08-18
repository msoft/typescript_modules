import * as FromModule3 from './module3.js';

function privateFunc() {
    console.log("Executed from module2.privateFunc()");
}

function publicFunc() {
    privateFunc();

    console.log("Executed from module2.publicFunc()");

    FromModule3.publicFuncFromModule3();
}

export { publicFunc };
