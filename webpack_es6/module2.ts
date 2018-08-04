import module3Namespace from "./module3";

function privateFunc() {
    console.log("Executed from module2.privateFunc");
}

function publicFunc() {
    privateFunc();

    console.log("Executed from module2.publicFunc");

    module3Namespace.publicFunc();
}

export { publicFunc };