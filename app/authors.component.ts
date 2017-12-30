import { Component } from 'angular2/core';
import { AuthorService } from './author.service';

@Component({
    selector : 'author', 
    template : `
        <p> {{title}}</p>
        <ul> 
            <li *ngFor='#author of authors'> {{author}}</li>
        </ul> 
    `,
    providers : [AuthorService]
})

export class AuthorComponent { 
    title = "The is the title of author page";
    authors; 

    constructor(authorService : AuthorService){ 
        this.authors = authorService.getAuthor();
    }




}