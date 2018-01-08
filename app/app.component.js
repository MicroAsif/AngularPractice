System.register(['angular2/core', './rxadventure.component', './zippy.component', './authors.component', './favorite.component', "./heart.component", './vote.component', './tweet.component', './subscription-form.component', './changepassword.component', './github.component', "angular2/router", "./year.component", "./month.component"], function(exports_1, context_1) {
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
    var core_1, rxadventure_component_1, zippy_component_1, authors_component_1, favorite_component_1, heart_component_1, vote_component_1, tweet_component_1, subscription_form_component_1, changepassword_component_1, github_component_1, router_1, year_component_1, month_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rxadventure_component_1_1) {
                rxadventure_component_1 = rxadventure_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (subscription_form_component_1_1) {
                subscription_form_component_1 = subscription_form_component_1_1;
            },
            function (changepassword_component_1_1) {
                changepassword_component_1 = changepassword_component_1_1;
            },
            function (github_component_1_1) {
                github_component_1 = github_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (year_component_1_1) {
                year_component_1 = year_component_1_1;
            },
            function (month_component_1_1) {
                month_component_1 = month_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Angular App";
                    this.tweet = {
                        total: 10,
                        iLike: false
                    };
                    this.post = {
                        voteCount: 10,
                        myVote: 0
                    };
                    this.panels = [{
                            head: "hello heading 1",
                            content: "Content heere"
                        },
                        {
                            head: "hello heading 2",
                            content: "Content heere"
                        }];
                }
                AppComponent.prototype.voteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/years', name: 'Year', component: year_component_1.YearComponent, useAsDefault: true },
                        { path: '/months', name: 'Month', component: month_component_1.MonthComponent },
                        { path: '/archives/:year/:month', name: 'Archive', component: month_component_1.MonthComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Year'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/app/app.component.html',
                        // template: `
                        //             <h1>Hello Angular</h1>
                        //             <br/>
                        //                 <year></year>
                        //                 <month></month>
                        //             <br/>
                        //             <br/>
                        //              <github></github>
                        //              <br/> <br/> 
                        //             <Rx-Practice> </Rx-Practice>
                        //             <br/> 
                        //              <author></author>
                        //              <favorite></favorite>
                        //              <heartgly [total-like-count]= "tweet.total" [iLike]="tweet.iLike"></heartgly>
                        //              <vote [count]="post.voteCount" [myVote]="post.myVote" (vote)="voteChange($event)"></vote>
                        //              <tweet> </tweet>
                        //              <zippy  *ngFor="#p of panels">
                        //                     <div class="heading"> {{p.head}}</div>
                        //                     <div class="body">{{p.content}}</div>
                        //              </zippy>
                        //             <subscription-form></subscription-form>
                        //              <change-password-form></change-password-form>
                        //            `,
                        directives: [favorite_component_1.FavoriteComponent, authors_component_1.AuthorComponent, heart_component_1.HeartComponent,
                            vote_component_1.VoteComponent, tweet_component_1.TweetComponent, zippy_component_1.ZippyComponent,
                            subscription_form_component_1.SubscriptionFormComponent, changepassword_component_1.ChangePasswordFormComponent, rxadventure_component_1.RxAdvantureComponent, github_component_1.GithubComponent,
                            year_component_1.YearComponent, month_component_1.MonthComponent, router_1.ROUTER_DIRECTIVES]
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