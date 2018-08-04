import { publicFunc as publicFuncFromModule3 } from './module3.js';


function privateFunc() {
    console.log("Executed from module2.privateFuRnc");
}

function publicFunc() {
    privateFunc();

    console.log("Executed from module2.publicFunc");

    publicFuncFromModule3();
}

export { publicFunc };
