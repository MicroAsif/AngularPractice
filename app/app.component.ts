import { AuthorComponent } from './authors.component';
import { FavoriteComponent } from './favorite.component'; 
import { HeartComponent } from "./heart.component";
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular</h1> <author></author><favorite></favorite><heartgly></heartgly>',
    directives:[FavoriteComponent, AuthorComponent, HeartComponent]
})
export class AppComponent { 
title = "Angular App"

}