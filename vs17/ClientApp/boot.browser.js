System.register(['reflect-metadata', 'zone.js', 'bootstrap', '@angular/core', '@angular/platform-browser-dynamic', './app/app.browser.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_dynamic_1, app_browser_module_1;
    var modulePromise;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_browser_module_1_1) {
                app_browser_module_1 = app_browser_module_1_1;
            }],
        execute: function() {
            if (module.hot) {
                module.hot.accept();
                module.hot.dispose(function () {
                    // Before restarting the app, we create a new root element and dispose the old one
                    var oldRootElem = document.querySelector('app');
                    var newRootElem = document.createElement('app');
                    oldRootElem;
                    !.parentNode;
                    !.insertBefore(newRootElem, oldRootElem);
                    modulePromise.then(function (appModule) { return appModule.destroy(); });
                });
            }
            else {
                core_1.enableProdMode();
            }
            // Note: @ng-tools/webpack looks for the following expression when performing production
            // builds. Don't change how this line looks, otherwise you may break tree-shaking.
            modulePromise = platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_browser_module_1.AppModule);
        }
    }
});
//# sourceMappingURL=boot.browser.js.map