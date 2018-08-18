import { publicFunc as publicFuncFromModule2 } from "./module2";

function privateFunc() {
    console.log("Executed from module1.privateFunc()");
}

function publicFunc() {
    privateFunc();

    console.log("Executed from module1.publicFunc()");

    publicFuncFromModule2();
}

export { publicFunc };