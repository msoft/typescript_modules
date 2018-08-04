import namespaceForModule3 = module3Namespace;

namespace module2Namespace {

    function privateFunc() {
        console.log("Executed from module2.privateFuRnc");
    }

    export function publicFunc() {
        privateFunc();

        console.log("Executed from module2.publicFunc");

        namespaceForModule3.publicFunc();
    }
}