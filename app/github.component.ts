import { Component } from "angular2/core";
import { GithubService } from "./github.service";
import {HTTP_PROVIDERS} from "angular2/http"


@Component({
    selector : 'github', 
    template : `  

                <div class="media" >
                    <div> 
                    <div class="media-left">
                        <a href="#">
                        <img class="media-object" [src]="users.avatar_url" alt="...">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading"> {{users.name}} <span class="user"> {{users.login}}</span></h4>
                        <p> {{users.bio}} </p>
                    </div>
                    </div>
                </div>
                
                <h3> my followers </h3>
                <hr/>
                <div class="media" >
                    <div *ngFor='#f of followers'> 
                    <div class="media-left">
                        <a href="#">
                        <img class="media-object" [src]="f.avatar_url" alt="...">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading"> {{f.login}}</h4>
                    </div>
                    </div>
                </div>

              

                    
                `, 
    styles : [`
            img { 
                height : 100px;
                margin : 2px;
            }
            .user { 
                color : #ccc;
            }
    `], 
    providers :[GithubService, HTTP_PROVIDERS]
})

export class GithubComponent { 
    users ={ };
    followers = [];    
     constructor(private githubService : GithubService){

        this.users = this.githubService.getProfile()
        .subscribe(profile  => this.users = profile);

         this.githubService.getFollowers()
        .subscribe(followes  => this.followers = followes);
    }
}