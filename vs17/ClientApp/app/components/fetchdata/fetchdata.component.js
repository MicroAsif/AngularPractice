System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1;
    var FetchDataComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            FetchDataComponent = (function () {
                function FetchDataComponent(http, baseUrl) {
                    var _this = this;
                    http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(function (result) {
                        _this.forecasts = result.json();
                    }, function (error) { return console.error(error); });
                }
                FetchDataComponent = __decorate([
                    core_1.Component({
                        selector: 'fetchdata',
                        templateUrl: './fetchdata.component.html'
                    }),
                    __param(1, core_1.Inject('BASE_URL')), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, String])
                ], FetchDataComponent);
                return FetchDataComponent;
                var _a;
            }());
            exports_1("FetchDataComponent", FetchDataComponent);
        }
    }
});
//# sourceMappingURL=fetchdata.component.js.map