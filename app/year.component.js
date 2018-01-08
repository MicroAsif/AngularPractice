System.register(['angular2/router', 'angular2/core'], function(exports_1, context_1) {
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
    var router_1, core_1;
    var YearComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            YearComponent = (function () {
                function YearComponent() {
                    this.archives = [];
                    this.archives = this.getArchives();
                }
                YearComponent.prototype.getArchives = function () {
                    return [{ month: 1, year: 2016 },
                        { month: 2, year: 2016 },
                        { month: 3, year: 2016 },
                        { month: 4, year: 2016 },
                        { month: 5, year: 2016 },
                        { month: 6, year: 2016 }];
                };
                YearComponent = __decorate([
                    core_1.Component({
                        selector: 'year',
                        template: "\n                <h3>Archives</h3>\n                <ul> \n                    <li *ngFor=\"#a of archives\" > <a  [routerLink] =\"['Archive', {year : a.year, month : a.month}]\"> {{a.year}} / {{a.month  }}</a></li> \n                </ul>\n            ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], YearComponent);
                return YearComponent;
            }());
            exports_1("YearComponent", YearComponent);
        }
    }
});
//# sourceMappingURL=year.component.js.map