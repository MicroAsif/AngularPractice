import { PostService } from './post.service';
import { Component } from 'angular2/core';
@Component({ 
    selector : 'post', 
    template : `
        <h1> Post </h1>
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
        <ul class="list-group">
            <li *ngFor="#p of posts" class="list-group-item">{{ p.title }}</li>
        </ul>
    `,
    providers: [PostService]
})

export class PostComponent { 
 posts = [];
 isLoading = true;

 constructor(postService: PostService){
     postService.getPost().subscribe(p => this.posts=p,
     null,
    () => { this.isLoading = false; });
 }
}