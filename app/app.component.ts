import { ZippyComponent } from './zippy.component';
import { AuthorComponent } from './authors.component';
import { FavoriteComponent } from './favorite.component'; 
import { HeartComponent } from "./heart.component";
import {Component} from 'angular2/core';
import { VoteComponent } from './vote.component';
import { TweetComponent } from './tweet.component';

@Component({
    selector: 'my-app',
    template: `
                <h1>Hello Angular</h1>
                 <author></author>
                 <favorite></favorite>
                 
                 <heartgly [total-like-count]= "tweet.total" [iLike]="tweet.iLike"></heartgly>
                 <vote [count]="post.voteCount" [myVote]="post.myVote" (vote)="voteChange($event)"></vote>
                 <tweet> </tweet>
                 <zippy  *ngFor="#p of panels">
                    
                        <div class="heading"> {{p.head}}</div>
                        <div class="body">{{p.content}}</div>
                    
                    
                 </zippy>
               `,
    directives:[FavoriteComponent, AuthorComponent, HeartComponent, VoteComponent, TweetComponent, ZippyComponent]
})
export class AppComponent { 
title = "Angular App"

    tweet = { 
        total : 10,
        iLike : false
    }

    post = { 
        voteCount : 10, 
        myVote : 0
    }

    voteChange($event){
        console.log($event);
    }

    panels = [{ 
        head : "hello heading 1", 
        content : "Content heere"
    },
    {
        head : "hello heading 2", 
        content : "Content heere"
    }]


}