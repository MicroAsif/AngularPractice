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
    var HeartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeartComponent = (function () {
                function HeartComponent() {
                    this.count = 10;
                    this.isActive = true;
                }
                HeartComponent.prototype.heartClick = function () {
                    if (this.isActive) {
                        this.isActive = false;
                        this.count = this.count + 1;
                    }
                    else {
                        this.isActive = true;
                        this.count = this.count - 1;
                    }
                };
                HeartComponent = __decorate([
                    core_1.Component({
                        selector: 'heartgly',
                        template: "\n        <p> Heart Component </p>\n        <i class=\"glyphicon glyphicon-heart \" [style.color]= \"isActive ? '#ccc' : 'deeppink'\"  (click)=\"heartClick()\"> </i> <span>  {{count}}</span>\n                ",
                        styles: ["\n        .glyphicon {cursor: pointer;}\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeartComponent);
                return HeartComponent;
            }());
            exports_1("HeartComponent", HeartComponent);
        }
    }
});
//# sourceMappingURL=heart.component.js.map