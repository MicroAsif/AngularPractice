System.register(['reflect-metadata', 'zone.js', 'rxjs/add/operator/first', '@angular/common', '@angular/core', '@angular/platform-server', 'aspnet-prerendering', './app/app.server.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var common_1, core_1, platform_server_1, aspnet_prerendering_1, app_server_module_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_server_1_1) {
                platform_server_1 = platform_server_1_1;
            },
            function (aspnet_prerendering_1_1) {
                aspnet_prerendering_1 = aspnet_prerendering_1_1;
            },
            function (app_server_module_1_1) {
                app_server_module_1 = app_server_module_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            exports_1("default",aspnet_prerendering_1.createServerRenderer(function (params) {
                var providers = [
                    { provide: platform_server_1.INITIAL_CONFIG, useValue: { document: '<app></app>', url: params.url } },
                    { provide: common_1.APP_BASE_HREF, useValue: params.baseUrl },
                    { provide: 'BASE_URL', useValue: params.origin + params.baseUrl },
                ];
                return platform_server_1.platformDynamicServer(providers).bootstrapModule(app_server_module_1.AppModule).then(function (moduleRef) {
                    var appRef = moduleRef.injector.get(core_1.ApplicationRef);
                    var state = moduleRef.injector.get(platform_server_1.PlatformState);
                    var zone = moduleRef.injector.get(core_1.NgZone);
                    return new Promise(function (resolve, reject) {
                        zone.onError.subscribe(function (errorInfo) { return reject(errorInfo); });
                        appRef.isStable.first(function (isStable) { return isStable; }).subscribe(function () {
                            // Because 'onStable' fires before 'onError', we have to delay slightly before
                            // completing the request in case there's an error to report
                            setImmediate(function () {
                                resolve({
                                    html: state.renderToString()
                                });
                                moduleRef.destroy();
                            });
                        });
                    });
                });
            }));
        }
    }
});
//# sourceMappingURL=boot.server.js.map