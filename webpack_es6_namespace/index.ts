import module1Namespace from "./module1";

class Startup {

    public static main(): number {
    
        module1Namespace.publicFunc();

        return 0;
    }
}

Startup.main();
