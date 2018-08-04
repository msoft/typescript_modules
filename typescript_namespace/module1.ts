import namespaceForModule2 = module2Namespace;

namespace module1Namespace {

    function privateFunc() {
        console.log("Executed from module1.privateFunc");
    }

    export function publicFunc() {
        privateFunc();

        console.log("Executed from module1.publicFunc");

        namespaceForModule2.publicFunc();
    }
}
