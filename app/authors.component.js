System.register(['./auto-grow.directive', 'angular2/core', './author.service'], function(exports_1, context_1) {
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
    var auto_grow_directive_1, core_1, author_service_1;
    var AuthorComponent;
    return {
        setters:[
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            }],
        execute: function() {
            AuthorComponent = (function () {
                function AuthorComponent(authorService) {
                    this.title = "The is the title of author page";
                    this.authors = authorService.getAuthor();
                }
                AuthorComponent = __decorate([
                    core_1.Component({
                        selector: 'author',
                        template: "\n        <p> {{title}}</p> <input type='text' autoGrow />\n       \n        <ul> \n            <li *ngFor='#author of authors'> {{author}}</li>\n        </ul> \n    ",
                        directives: [auto_grow_directive_1.AutoGrowDirective],
                        providers: [author_service_1.AuthorService]
                    }), 
                    __metadata('design:paramtypes', [author_service_1.AuthorService])
                ], AuthorComponent);
                return AuthorComponent;
            }());
            exports_1("AuthorComponent", AuthorComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map