System.register(['./counter.component', '@angular/core/testing'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var counter_component_1, testing_1;
    var fixture;
    return {
        setters:[
            function (counter_component_1_1) {
                counter_component_1 = counter_component_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            }],
        execute: function() {
            describe('Counter component', function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({ declarations: [counter_component_1.CounterComponent] });
                    fixture = testing_1.TestBed.createComponent(counter_component_1.CounterComponent);
                    fixture.detectChanges();
                });
                it('should display a title', testing_1.async(function () {
                    var titleText = fixture.nativeElement.querySelector('h1').textContent;
                    expect(titleText).toEqual('Counter');
                }));
                it('should start with count 0, then increments by 1 when clicked', testing_1.async(function () {
                    var countElement = fixture.nativeElement.querySelector('strong');
                    expect(countElement.textContent).toEqual('0');
                    var incrementButton = fixture.nativeElement.querySelector('button');
                    incrementButton.click();
                    fixture.detectChanges();
                    expect(countElement.textContent).toEqual('1');
                }));
            });
        }
    }
});
//# sourceMappingURL=counter.component.spec.js.map