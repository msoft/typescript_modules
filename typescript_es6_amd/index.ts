import { publicFunc as publicFuncFromModule1 } from './module1.js';

class Startup {

    public static main(): number {

        publicFuncFromModule1();

        return 0;
    }
}

Startup.main();
