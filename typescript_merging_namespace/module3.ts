namespace module2Namespace {

    function privateFunc() {
        console.log("Executed from privateFunc() in module3.ts");
    }

    export function otherPublicFunc() {
        privateFunc();

        console.log("Executed from otherPublicFunc() in module3.ts");
    }
}