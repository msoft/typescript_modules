
function privateFunc() {
    console.log("Executed from module3.privateFuRnc");
}

function publicFunc() {
    privateFunc();

    console.log("Executed from module3.publicFunc");
}

export { publicFunc };