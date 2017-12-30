import { AuthorComponent } from './authors.component';
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular</h1> <author></author>',
    directives: [AuthorComponent]
})
export class AppComponent { 


}