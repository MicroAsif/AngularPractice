System.register(['./home.component', './user.component', 'angular2/router', 'angular2/core', './navbar.component', './post.component', './newuser.component', './not-found.component'], function(exports_1, context_1) {
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
    var home_component_1, user_component_1, router_1, core_1, navbar_component_1, post_component_1, newuser_component_1, not_found_component_1;
    var AppComponent;
    return {
        setters:[
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            },
            function (newuser_component_1_1) {
                newuser_component_1 = newuser_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/users', name: 'User', component: user_component_1.UserComponent },
                        { path: '/users/:id', name: 'EditUser', component: newuser_component_1.NewUserComponent },
                        { path: '/users/new', name: 'NewUser', component: newuser_component_1.NewUserComponent },
                        { path: '/posts', name: 'Post', component: post_component_1.PostComponent },
                        { path: '/', name: 'Home', component: home_component_1.HouseComponent, useAsDefault: true },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] },
                        { path: '/not-found', name: 'NotFound', component: not_found_component_1.NotFoundComponent }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: " \n                    <navbar> </navbar>\n                    \n                    <div class=\"container\">\n                           <router-outlet></router-outlet>\n                     </div>\n                ",
                        directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map