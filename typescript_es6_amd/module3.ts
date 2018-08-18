
function privateFunc() {
    console.log("Executed from module3.privateFunc()");
}

function publicFuncFromModule3() {
    privateFunc();

    console.log("Executed from module3.publicFuncFromModule3()");
}

export { publicFuncFromModule3 };
