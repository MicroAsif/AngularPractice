System.register(['reflect-metadata', 'zone.js', 'zone.js/dist/long-stack-trace-zone', 'zone.js/dist/proxy.js', 'zone.js/dist/sync-test', 'zone.js/dist/jasmine-patch', 'zone.js/dist/async-test', 'zone.js/dist/fake-async-test', '@angular/core/testing', '@angular/platform-browser-dynamic/testing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing, testingBrowser;
    var context;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (testing_1) {
                testing = testing_1;
            },
            function (testingBrowser_1) {
                testingBrowser = testingBrowser_1;
            }],
        execute: function() {
            // Prevent Karma from running prematurely
            __karma__.loaded = function () { };
            // First, initialize the Angular testing environment
            testing.getTestBed().initTestEnvironment(testingBrowser.BrowserDynamicTestingModule, testingBrowser.platformBrowserDynamicTesting());
            // Then we find all the tests
            context = require.context('../', true, /\.spec\.ts$/);
            // And load the modules
            context.keys().map(context);
            // Finally, start Karma to run the tests
            __karma__.start();
        }
    }
});
//# sourceMappingURL=boot-tests.js.map