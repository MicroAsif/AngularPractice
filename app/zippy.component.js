System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.isVisible = false;
                }
                ZippyComponent.prototype.isClick = function () {
                    this.isVisible = !this.isVisible;
                };
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n    \n    <div class=\"panel panel-default\" >\n            <div class=\"panel-heading\" (click)=\"isClick()\">\n                <span  class=\"glyphicon pull-right\" [ngClass]=\"{\n                    'glyphicon-menu-up': isVisible,\n                    'glyphicon-menu-down': !isVisible\n                }\" ></span>\n                <ng-content select=\".heading\"></ng-content>\n            </div>\n            <div class=\"panel-body\" [ngClass]=\"{\n                'hide': !isVisible,\n                'show': isVisible\n            }\" >\n                <ng-content select=\".body\"></ng-content>\n            </div>\n    </div>\n    \n            ",
                        styles: ["\n                .hide{\n                    visibility:collapse;\n                }\n                .show {\n                    visibility:visible;\n                }\n            "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map