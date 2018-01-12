import { SpinnerComponent } from './spinner.component';
import { PostService } from './post.service';
import { Component } from 'angular2/core';
@Component({ 
    selector : 'post', 
    template : `
        <h1> Post </h1>
        <spinner [visible]="isLoading"> </spinner>
        <div class="row"> 
            <div class="col-md-6"> 
                <ul class="list-group posts">
                    <li *ngFor="#p of posts" 
                    [class.active]="currentPost == p"
                    (click)="select(p)"
                    class="list-group-item">{{ p.title }}></li>
                </ul>
            </div>
                <div class="col-md-6"> 
                    <div *ngIf="currentPost" class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">{{ currentPost.title }}</h3>
                        </div>
                    <div class="panel-body">
                        <p>{{ currentPost.body }}</p>
                    </div>
                </div>
            </div>
        </div>
            `,
    styles : [`
        .posts li { cursor: default; }
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
        background-color: #ecf0f1;
        border-color: #ecf0f1; 
        color: #2c3e50;
    
    `],
    directives : [SpinnerComponent],
    providers: [PostService]
})

export class PostComponent { 
 posts = [];
 isLoading = true;
 currentPost; 

 constructor(postService: PostService){
     postService.getPost().subscribe(p => this.posts=p,
     null,
    () => { this.isLoading = false; });
    }

    select(p){
	    this.currentPost = p; 
      } 
}