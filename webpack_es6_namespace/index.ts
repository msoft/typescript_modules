// import { module1Namespace } from './module1';

// class Startup {

//     public static main(): number {

//         //console.log('Hello World');
//         module1Namespace.publicFunc();

//         return 0;
//     }
// }

// Startup.main();

// <reference path="module1.ts" />

// import importedNamespace1 = namespace1;
// import { namespace1 } from './module1';
// import importedModule1 = module1Namespace;
import module1Namespace from "./module1";
// import module2Namespace from "./module2";

class Startup {

    public static main(): number {
    
        module1Namespace.publicFunc();

        return 0;
    }
}

Startup.main();
