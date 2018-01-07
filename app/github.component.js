System.register(["angular2/core", "./github.service", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, github_service_1, http_1;
    var GithubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            GithubComponent = (function () {
                function GithubComponent(githubService) {
                    var _this = this;
                    this.githubService = githubService;
                    this.users = {};
                    this.followers = [];
                    this.users = this.githubService.getProfile()
                        .subscribe(function (profile) { return _this.users = profile; });
                    this.githubService.getFollowers()
                        .subscribe(function (followes) { return _this.followers = followes; });
                }
                GithubComponent = __decorate([
                    core_1.Component({
                        selector: 'github',
                        template: "  \n\n                <div class=\"media\" >\n                    <div> \n                    <div class=\"media-left\">\n                        <a href=\"#\">\n                        <img class=\"media-object\" [src]=\"users.avatar_url\" alt=\"...\">\n                        </a>\n                    </div>\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\"> {{users.name}} <span class=\"user\"> {{users.login}}</span></h4>\n                        <p> {{users.bio}} </p>\n                    </div>\n                    </div>\n                </div>\n                \n                <h3> my followers </h3>\n                <hr/>\n                <div class=\"media\" >\n                    <div *ngFor='#f of followers'> \n                    <div class=\"media-left\">\n                        <a href=\"#\">\n                        <img class=\"media-object\" [src]=\"f.avatar_url\" alt=\"...\">\n                        </a>\n                    </div>\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\"> {{f.login}}</h4>\n                    </div>\n                    </div>\n                </div>\n\n              \n\n                    \n                ",
                        styles: ["\n            img { \n                height : 100px;\n                margin : 2px;\n            }\n            .user { \n                color : #ccc;\n            }\n    "],
                        providers: [github_service_1.GithubService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], GithubComponent);
                return GithubComponent;
            }());
            exports_1("GithubComponent", GithubComponent);
        }
    }
});
//# sourceMappingURL=github.component.js.map