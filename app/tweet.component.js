System.register(['./tweet.service', './heart.component', "angular2/core"], function(exports_1, context_1) {
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
    var tweet_service_1, heart_component_1, core_1;
    var TweetComponent;
    return {
        setters:[
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetService) {
                    this.title = "tweet component";
                    this.totalLiked = 10;
                    this.iLiked = false;
                    this.tweets = tweetService.getAllTweets();
                }
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n                <h3> {{title}}</h3>\n                <div class=\"media\" >\n                    <div *ngFor='#t of tweets'> \n                    <div class=\"media-left\">\n                        <a href=\"#\">\n                        <img class=\"media-object\" [src]=\"t.image\" alt=\"...\">\n                        </a>\n                    </div>\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\"> {{t.name}} <span class=\"user\"> {{t.user}}</span></h4>\n                         <p> {{t.status}} </p>\n                         <heartgly [total-like-count]= \"t.total\" [iLike]=\"t.iLike\"> </heartgly>\n                    </div>\n                    </div>\n                </div>\n\n\n                ",
                        styles: ["\n                 img { \n                    height : 64px;\n                 }\n                 .user { \n                     color : #ccc;\n                 }\n                \n                "],
                        directives: [heart_component_1.HeartComponent],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map