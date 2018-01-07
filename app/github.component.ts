import { Component } from "angular2/core";
import { GithubService } from "./github.service";
import {HTTP_PROVIDERS} from "angular2/http"


@Component({
    selector : 'github', 
    template : `
                    
                `, 
    providers :[GithubService, HTTP_PROVIDERS]
})

export class GithubComponent { 
    constructor(private githubService : GithubService){ 
         this.githubService.getFollowers()
        .subscribe(profile => console.log(profile));
    }
}