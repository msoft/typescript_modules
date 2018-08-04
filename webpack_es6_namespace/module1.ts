// import { namespace2 } from './module2';
// import { namespace2 } from './module2';

// import { module2 } from './module2';
// import importedModule2 = module2Namespace;
// import { module2Namespace } from "./module2";

import module2Namespace from "./module2";

namespace module1Namespace {

    function privateFunc() {
        console.log("Executed from module1.privateFunc");
    }

    export function publicFunc() {
        privateFunc();

        console.log("Executed from module1.publicFunc");

        module2Namespace.publicFunc();
    }
}

export default module1Namespace;