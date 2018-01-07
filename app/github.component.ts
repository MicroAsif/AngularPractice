import { Component } from "angular2/core";
import { GithubService } from "./github.service";
import {HTTP_PROVIDERS} from "angular2/http"


@Component({
    selector : 'github', 
    template : `    
                <p> {{users.login}}</p>  
                    
                `, 
    providers :[GithubService, HTTP_PROVIDERS]
})

export class GithubComponent { 
    users ={ };
    followers = [];    
     constructor(private githubService : GithubService){

        this.users = this.githubService.getProfile()
        .subscribe(profile  => console.log(profile));

         this.githubService.getFollowers()
        .subscribe(followes  => console.log(followes));
    }
}