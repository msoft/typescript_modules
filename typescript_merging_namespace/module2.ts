namespace module2Namespace {

    function privateFunc() {
        console.log("Executed from module2.privateFunc()");
    }

    export function publicFunc() {
        privateFunc();

        console.log("Executed from module2.publicFunc()");

        otherPublicFunc();
    }
}