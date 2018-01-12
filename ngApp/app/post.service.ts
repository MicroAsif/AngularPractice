import { Http } from 'angular2/http';
import {Injectable } from "angular2/core";
import "rxjs/add/operator/map";

@Injectable()
export class PostService{
    posts = "https://jsonplaceholder.typicode.com/posts"
    constructor(private http: Http){
        
    }

    getPost(){
        return this.http.get(this.posts).map(data => data.json());
        
    }
}