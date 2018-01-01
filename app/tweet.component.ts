import { TweetService } from './tweet.service';
import { HeartComponent } from './heart.component';
import { Component } from "angular2/core";

@Component({
    selector : 'tweet', 
    template : `
                <h3> {{title}}</h3>
                <div class="media" >
                    <div *ngFor='#t of tweets'> 
                    <div class="media-left">
                        <a href="#">
                        <img class="media-object" [src]="t.image" alt="...">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading"> {{t.name}} <span class="user"> {{t.user}}</span></h4>
                         <p> {{t.status}} </p>
                         <heartgly [total-like-count]= "t.total" [iLike]="t.iLike"> </heartgly>
                    </div>
                    </div>
                </div>


                `, 
                styles: [`
                 img { 
                    height : 64px;
                 }
                 .user { 
                     color : #ccc;
                 }
                
                `], 
                directives: [HeartComponent], 
                providers : [TweetService]
})

export class TweetComponent { 
    title = "tweet component"

    totalLiked = 10; 
    iLiked = false;
    tweets;

    constructor(tweetService : TweetService){
        this.tweets = tweetService.getAllTweets();
    }


}