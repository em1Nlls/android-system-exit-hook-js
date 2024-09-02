Java.perform(function() {
    console.log("Hooking System.exit...");

    var System = Java.use("java.lang.System");

    System.exit.overload('int').implementation = function(exitCode) {
        console.log("System.exit() called with exit code: " + exitCode);

        return;
    };
});
