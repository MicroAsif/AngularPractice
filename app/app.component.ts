import { Component } from 'angular2/core';
import { RxAdvantureComponent } from './rxadventure.component';
import { ZippyComponent } from './zippy.component';
import { AuthorComponent } from './authors.component';
import { FavoriteComponent } from './favorite.component'; 
import { HeartComponent } from "./heart.component";
import { VoteComponent } from './vote.component';
import { TweetComponent } from './tweet.component';
import { SubscriptionFormComponent } from './subscription-form.component';
import { ChangePasswordFormComponent } from './changepassword.component';
import { GithubComponent } from './github.component';
import { RouteConfig, ROUTER_DIRECTIVES, RouteParams } from "angular2/router";
import { YearComponent } from "./year.component";
import { MonthComponent } from "./month.component";


@RouteConfig([
    { path: '/years', name: 'Year', component: YearComponent, useAsDefault: true },
    { path: '/months', name: 'Month',  component: MonthComponent },
    { path: '/archives/:year/:month', name: 'Archive', component: MonthComponent },

    { path: '/*other', name: 'Other', redirectTo:['Year']}
])

@Component({
    selector: 'my-app',
      templateUrl: 'app/app.component.html',
    // template: `
    //             <h1>Hello Angular</h1>
    //             <br/>
    //                 <year></year>
    //                 <month></month>
    //             <br/>
    //             <br/>
    //              <github></github>
    //              <br/> <br/> 
    //             <Rx-Practice> </Rx-Practice>
    //             <br/> 
    //              <author></author>
    //              <favorite></favorite>
                 
    //              <heartgly [total-like-count]= "tweet.total" [iLike]="tweet.iLike"></heartgly>
    //              <vote [count]="post.voteCount" [myVote]="post.myVote" (vote)="voteChange($event)"></vote>
    //              <tweet> </tweet>
    //              <zippy  *ngFor="#p of panels">
                    
    //                     <div class="heading"> {{p.head}}</div>
    //                     <div class="body">{{p.content}}</div>
                    
                    
    //              </zippy>
    //             <subscription-form></subscription-form>
    //              <change-password-form></change-password-form>
    //            `,
    directives:[FavoriteComponent, AuthorComponent, HeartComponent, 
                VoteComponent, TweetComponent, ZippyComponent, 
                SubscriptionFormComponent, ChangePasswordFormComponent, RxAdvantureComponent, GithubComponent,
                 YearComponent, MonthComponent, ROUTER_DIRECTIVES]
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