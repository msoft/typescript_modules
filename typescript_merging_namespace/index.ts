import namespaceForModule1 = module1Namespace;

class Startup {

    public static main(): number {

        module1Namespace.publicFunc();

        return 0;
    }
}

Startup.main();
