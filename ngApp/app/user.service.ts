import { Http } from 'angular2/http';
import {Injectable } from "angular2/core";
import "rxjs/add/operator/map";


@Injectable()
export class UserService { 

     url = "https://jsonplaceholder.typicode.com/users"; 

    constructor(private http: Http) { 

    }

    getUsers() { 
       return this.http.get(this.url).map(u => u.json());
    }
}