import { Http } from "angular2/http";
import { Injectable } from "angular2/core";
import "rxjs/add/operator/map";

@Injectable()
export class GithubService { 
    private _follow = "https://api.github.com/users/microasif/followers";
    private _baseUrl = "https://api.github.com/users/microasif";
    constructor(private http : Http) { 

    }

    getProfile() { 
        return this.http.get(this._baseUrl).map(user => user.json());
    }

    getFollowers() { 
       return  this.http.get(this._follow).map(followers => followers.json());
    }

}