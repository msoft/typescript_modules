// import { namespace2 } from './module2';
// import { namespace2 } from './module2';

// import { module2 } from './module2';
// import importedModule2 = module2Namespace;
// import { module2Namespace } from "./module2";

import { publicFunc as publicFuncFromModule2 } from "./module2";

function privateFunc() {
    console.log("Executed from module1.privateFunc");
}

function publicFunc() {
    privateFunc();

    console.log("Executed from module1.publicFunc");

    publicFuncFromModule2();
}

export { publicFunc };