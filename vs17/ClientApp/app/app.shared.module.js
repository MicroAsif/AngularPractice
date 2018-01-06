System.register(['@angular/core', '@angular/common', '@angular/forms', '@angular/http', '@angular/router', 'ngx-pagination', './components/app/app.component', './components/navmenu/navmenu.component', './components/home/home.component', './components/fetchdata/fetchdata.component', './components/counter/counter.component', './components/calculator/calculate.component', './components/customer/customer.component'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, http_1, router_1, ngx_pagination_1, app_component_1, navmenu_component_1, home_component_1, fetchdata_component_1, counter_component_1, calculate_component_1, customer_component_1;
    var AppModuleShared;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ngx_pagination_1_1) {
                ngx_pagination_1 = ngx_pagination_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (navmenu_component_1_1) {
                navmenu_component_1 = navmenu_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (fetchdata_component_1_1) {
                fetchdata_component_1 = fetchdata_component_1_1;
            },
            function (counter_component_1_1) {
                counter_component_1 = counter_component_1_1;
            },
            function (calculate_component_1_1) {
                calculate_component_1 = calculate_component_1_1;
            },
            function (customer_component_1_1) {
                customer_component_1 = customer_component_1_1;
            }],
        execute: function() {
            AppModuleShared = (function () {
                function AppModuleShared() {
                }
                AppModuleShared = __decorate([
                    core_1.NgModule({
                        declarations: [
                            app_component_1.AppComponent,
                            navmenu_component_1.NavMenuComponent,
                            counter_component_1.CounterComponent,
                            fetchdata_component_1.FetchDataComponent,
                            home_component_1.HomeComponent,
                            calculate_component_1.CalculateComponent,
                            customer_component_1.CustomerComponent
                        ],
                        imports: [
                            common_1.CommonModule,
                            ngx_pagination_1.NgxPaginationModule,
                            http_1.HttpModule,
                            forms_1.FormsModule,
                            router_1.RouterModule.forRoot([
                                { path: '', redirectTo: 'home', pathMatch: 'full' },
                                { path: 'home', component: home_component_1.HomeComponent },
                                { path: 'counter', component: counter_component_1.CounterComponent },
                                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
                                { path: 'calculator', component: calculate_component_1.CalculateComponent },
                                { path: 'customer', component: customer_component_1.CustomerComponent },
                                { path: '**', redirectTo: 'home' }
                            ])
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModuleShared);
                return AppModuleShared;
            }());
            exports_1("AppModuleShared", AppModuleShared);
        }
    }
});
//# sourceMappingURL=app.shared.module.js.map