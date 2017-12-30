import { AutoGrowDirective } from './auto-grow.directive';
import { Component, Directive } from 'angular2/core';
import { AuthorService } from './author.service';

@Component({
    selector : 'author', 
    template : `
        <p> {{title}}</p> <input type='text' autoGrow />
       
        <ul> 
            <li *ngFor='#author of authors'> {{author}}</li>
        </ul> 
    `,
    directives : [AutoGrowDirective],
    providers : [AuthorService]
})

export class AuthorComponent { 
    title = "The is the title of author page";
    authors; 

    constructor(authorService : AuthorService){ 
        this.authors = authorService.getAuthor();
    }




}