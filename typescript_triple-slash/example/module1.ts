/// <reference path="../other_modules/module2.ts" />

namespace NamespaceForModule1 {

    function privateFunc() {
        console.log("Executed from module1.privateFunc");

        NamespaceForModule2.publicFunc();
    }

    export function publicFunc() {
        privateFunc();

        console.log("Executed from module1.publicFunc");        
    }
}
