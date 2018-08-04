import importedModule1 = require('./module1');

class Startup {

    public static main(): number {

        importedModule1.publicFunc();

        return 0;
    }
}

Startup.main();
