/// <reference path="module3.ts" />

namespace NamespaceForModule2 {

    function privateFunc() {
        console.log("Executed from module2.privateFunc");
    }

    export function publicFunc() {
        privateFunc();

        console.log("Executed from module2.publicFunc");

        NamespaceForModule3.publicFunc();
    }
}