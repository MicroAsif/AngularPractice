System.register(['@angular/core/testing', "@angular/platform-browser", './customer.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, platform_browser_1, customer_component_1;
    var component, fixture;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (customer_component_1_1) {
                customer_component_1 = customer_component_1_1;
            }],
        execute: function() {
            describe('customer component', function () {
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [customer_component_1.CustomerComponent],
                        imports: [platform_browser_1.BrowserModule],
                        providers: [
                            { provide: testing_1.ComponentFixtureAutoDetect, useValue: true }
                        ]
                    });
                    fixture = testing_1.TestBed.createComponent(customer_component_1.CustomerComponent);
                    component = fixture.componentInstance;
                }));
                it('should do something', testing_1.async(function () {
                    expect(true).toEqual(true);
                }));
            });
        }
    }
});
//# sourceMappingURL=customer.component.spec.js.map