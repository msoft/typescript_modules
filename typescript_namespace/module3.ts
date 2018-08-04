namespace module3Namespace {

    function privateFunc() {
        console.log("Executed from module3.privateFuRnc");
    }

    export function publicFunc() {
        privateFunc();

        console.log("Executed from module3.publicFunc");
    }
}