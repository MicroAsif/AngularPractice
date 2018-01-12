System.register(['./post.service', 'angular2/core'], function(exports_1, context_1) {
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
    var post_service_1, core_1;
    var PostComponent;
    return {
        setters:[
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PostComponent = (function () {
                function PostComponent(postService) {
                    var _this = this;
                    this.posts = [];
                    this.isLoading = true;
                    postService.getPost().subscribe(function (p) { return _this.posts = p; }, null, function () { _this.isLoading = false; });
                }
                PostComponent = __decorate([
                    core_1.Component({
                        selector: 'post',
                        template: "\n        <h1> Post </h1>\n        <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        <ul class=\"list-group\">\n            <li *ngFor=\"#p of posts\" class=\"list-group-item\">{{ p.title }}</li>\n        </ul>\n    ",
                        providers: [post_service_1.PostService]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], PostComponent);
                return PostComponent;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});
//# sourceMappingURL=post.component.js.map