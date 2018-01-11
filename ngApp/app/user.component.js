System.register(['./user.service', 'angular2/core', 'angular2/src/router/router_link'], function(exports_1, context_1) {
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
    var user_service_1, core_1, router_link_1;
    var UserComponent;
    return {
        setters:[
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_link_1_1) {
                router_link_1 = router_link_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(userService) {
                    var _this = this;
                    this.users = [];
                    userService.getUsers().subscribe(function (d) { return _this.users = d; });
                }
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'user',
                        template: "\n    \n                <h1> User </h1>\n\n                <p>\n                    <a [routerLink]=\"['NewUser']\" class=\"btn btn-primary\">Add User</a>\n                </p>\n                <table class=\"table table-hover table-bordered\">\n                    <thead>\n                    <tr>\n                        <th>Firstname</th>\n                        <th>Lastname</th>\n                        <th>Edit</th>\n                        <th>Delete</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"#u of users\">\n                        <td>{{u.name}}</td>\n                        <td>{{u.email}}</td>\n                        <td><a [routerLink]=\"['EditUser', { id: u.id }]\"><i class=\"glyphicon glyphicon-edit\"></i> </a></td>\n                        <td><a href=\"#\" class=\"glyphicon glyphicon-trash\"></a></td>\n                    </tr>\n                    </tbody>\n                </table>\n\n                ",
                        providers: [user_service_1.UserService],
                        directives: [router_link_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map