
namespace module3Namespace {

    function privateFunc() {
        console.log("Executed from module3.privateFunc");
    }

    export function publicFunc() {
        privateFunc();

        console.log("Executed from module3.publicFunc");
    }
}

export default module3Namespace;