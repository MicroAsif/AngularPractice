System.register(['./spinner.component', './post.service', 'angular2/core'], function(exports_1, context_1) {
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
    var spinner_component_1, post_service_1, core_1;
    var PostComponent;
    return {
        setters:[
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
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
                PostComponent.prototype.select = function (p) {
                    this.currentPost = p;
                };
                PostComponent = __decorate([
                    core_1.Component({
                        selector: 'post',
                        template: "\n        <h1> Post </h1>\n        <spinner [visible]=\"isLoading\"> </spinner>\n        <div class=\"row\"> \n            <div class=\"col-md-6\"> \n                <ul class=\"list-group posts\">\n                    <li *ngFor=\"#p of posts\" \n                    [class.active]=\"currentPost == p\"\n                    (click)=\"select(p)\"\n                    class=\"list-group-item\">{{ p.title }}></li>\n                </ul>\n            </div>\n                <div class=\"col-md-6\"> \n                    <div *ngIf=\"currentPost\" class=\"panel panel-default\">\n                        <div class=\"panel-heading\">\n                            <h3 class=\"panel-title\">{{ currentPost.title }}</h3>\n                        </div>\n                    <div class=\"panel-body\">\n                        <p>{{ currentPost.body }}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n            ",
                        styles: ["\n        .posts li { cursor: default; }\n        .posts li:hover { background: #ecf0f1; } \n        .list-group-item.active, \n        .list-group-item.active:hover, \n        .list-group-item.active:focus { \n        background-color: #ecf0f1;\n        border-color: #ecf0f1; \n        color: #2c3e50;\n    \n    "],
                        directives: [spinner_component_1.SpinnerComponent],
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