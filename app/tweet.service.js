System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getAllTweets = function () {
                    return [
                        {
                            total: 10,
                            iLike: false,
                            user: '@microasif',
                            name: 'Asif Rahman',
                            image: 'https://avatars2.githubusercontent.com/u/4785749?s=460&amp;v=4',
                            status: 'ng is awesome, loving it'
                        },
                        {
                            total: 6,
                            iLike: true,
                            user: '@saimon',
                            name: 'Saimon Anam',
                            image: 'https://avatars2.githubusercontent.com/u/14140483?s=460&amp;v=4',
                            status: 'ng kope is going'
                        },
                        {
                            total: 8,
                            iLike: false,
                            user: '@anotheruser',
                            name: 'Lorem Lorem',
                            image: 'http://lorempixel.com/100/100/people/?1',
                            status: 'Happy new year, 2018'
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map