System.register(['./rxadventure.component', './zippy.component', './authors.component', './favorite.component', "./heart.component", 'angular2/core', './vote.component', './tweet.component', './subscription-form.component', './changepassword.component'], function(exports_1, context_1) {
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
    var rxadventure_component_1, zippy_component_1, authors_component_1, favorite_component_1, heart_component_1, core_1, vote_component_1, tweet_component_1, subscription_form_component_1, changepassword_component_1;
    var AppComponent;
    return {
        setters:[
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
            function (core_1_1) {
                core_1 = core_1_1;
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
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n                <h1>Hello Angular</h1>\n                <Rx-Practice> </Rx-Practice>\n                <br/> \n                 <author></author>\n                 <favorite></favorite>\n                 \n                 <heartgly [total-like-count]= \"tweet.total\" [iLike]=\"tweet.iLike\"></heartgly>\n                 <vote [count]=\"post.voteCount\" [myVote]=\"post.myVote\" (vote)=\"voteChange($event)\"></vote>\n                 <tweet> </tweet>\n                 <zippy  *ngFor=\"#p of panels\">\n                    \n                        <div class=\"heading\"> {{p.head}}</div>\n                        <div class=\"body\">{{p.content}}</div>\n                    \n                    \n                 </zippy>\n                <subscription-form></subscription-form>\n                 <change-password-form></change-password-form>\n               ",
                        directives: [favorite_component_1.FavoriteComponent, authors_component_1.AuthorComponent, heart_component_1.HeartComponent,
                            vote_component_1.VoteComponent, tweet_component_1.TweetComponent, zippy_component_1.ZippyComponent,
                            subscription_form_component_1.SubscriptionFormComponent, changepassword_component_1.ChangePasswordFormComponent, rxadventure_component_1.RxAdvantureComponent]
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