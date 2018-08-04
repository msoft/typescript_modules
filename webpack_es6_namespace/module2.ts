import module3Namespace from "./module3";

namespace module2Namespace {

    function privateFunc() {
        console.log("Executed from module2.privateFunc");
    }

    export function publicFunc() {
        privateFunc();

        console.log("Executed from module2.publicFunc");

        module3Namespace.publicFunc();
    }
}

export default module2Namespace;