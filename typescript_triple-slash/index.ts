/// <reference path="module1.ts" />

class Startup {

    public static main(): number {

        //console.log('Hello World');
        NamespaceForModule1.publicFunc();

        return 0;
    }
}

Startup.main();
