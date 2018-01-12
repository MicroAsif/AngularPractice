import { Http } from 'angular2/http';
import {Injectable } from "angular2/core";
import "rxjs/add/operator/map";

@Injectable()
export class PostService{
    posts = "https://jsonplaceholder.typicode.com/posts"
    constructor(private http: Http){
        
    }


    getPosts(filter?) {
        var url = this.posts;
        
        if (filter && filter.userId)
            url += "?userId=" + filter.userId;
        
		return this.http.get(url)
			.map(res => res.json());
	}

   
    getComments(postId){
		return this.http.get(this.posts + "/" + postId + "/comments")
			.map(res => res.json());
	}
}