System.register(["angular2/core", "rxjs/Rx", "rxjs/add/operator/debounceTime", "rxjs/add/operator/map", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, Rx_1, common_1;
    var RxAdvantureComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            RxAdvantureComponent = (function () {
                function RxAdvantureComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    var searchs = this.form.find('search');
                    searchs.valueChanges.debounceTime(400)
                        .map(function (str) { return str.replace(' ', '-'); })
                        .subscribe(function (x) { return console.log(x); });
                    // var obs = Observable.fromArray([1,2,3]);
                    // obs.subscribe(o => console.log(o)); 
                    // var startDates = []; 
                    // var startDate = new Date(); 
                    // for(var day=-2; day<= 2; day++) { 
                    //         var date = new Date(
                    //             startDate.getFullYear(), 
                    //             startDate.getMonth(), 
                    //             startDate.getDate() + day);
                    //             startDates.push(date);
                    // }
                    // Observable.fromArray(startDates)
                    // .map(date => {console.log("getting deals for date :  " + date);
                    // return [1,2,3];
                    // })
                    // .subscribe(x => console.log(x));
                    // var ob = Observable.fromArray([1,2,3]); 
                    // var obs = Observable.empty(); 
                    //     obs = Observable.range(1,5); 
                    // obs.subscribe(x => console.log(x));
                    // var obs = Observable.interval(1000)
                    // .flatMap(d => {
                    //         console.log("getting data from server");
                    //         return Observable.of([1,2,3]);
                    // }) 
                    // obs.subscribe (x => console.log(x));
                    var userStream = Rx_1.Observable.of({
                        userId: 1, userName: "saimon"
                    }).delay(2000);
                    var tweetStream = Rx_1.Observable.of([1, 2, 3]).delay(1500);
                    Rx_1.Observable.forkJoin(userStream, tweetStream)
                        .map(function (joined) { return new Object({ user: joined[0], tweets: joined[1] }); })
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); });
                    // handling error
                    //  var observable = Observable.throw(new Error("cant get server")); 
                    //  observable.retry(3)
                    //  .subscribe(
                    //      x => console.log(x), 
                    //      err=> console.error(err)
                    //  )
                    // 
                    var counter = 0;
                    var a = Rx_1.Observable.of("url")
                        .flatMap(function () {
                        if (++counter < 2)
                            return Rx_1.Observable.throw(new Error("can't get to connect server"));
                        return Rx_1.Observable.of([1, 2, 3]);
                    });
                    a.retry(3).subscribe(function (x) { return console.log(x); }, function (err) { return console.error(err); });
                }
                RxAdvantureComponent = __decorate([
                    core_1.Component({
                        selector: 'Rx-Practice',
                        template: "\n                <form [ngFormModel]=\"form\"> \n                    <input id=\"search\" type=\"text\"  ngControl=\"search\" class=\"form-control\" placeholder=\"search your artist\" /> \n                </form>\n                "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], RxAdvantureComponent);
                return RxAdvantureComponent;
            }());
            exports_1("RxAdvantureComponent", RxAdvantureComponent);
        }
    }
});
//# sourceMappingURL=rxadventure.component.js.map