import { Observable } from 'rxjs/Rx';
import { UserService } from './user.service';
import { HouseComponent } from './home.component';
import { UserComponent } from './user.component';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import {Component} from 'angular2/core';
import { NavbarComponent } from './navbar.component';
import { PostComponent } from './post.component';
import { NewUserComponent } from './newuser.component';
import {NotFoundComponent} from './not-found.component';


@RouteConfig([

    {path : '/users',  name : 'User', component: UserComponent}, 
    { path: '/users/:id', name: 'EditUser', component: NewUserComponent },
    { path: '/users/new', name: 'NewUser', component: NewUserComponent },
    {path : '/posts', name : 'Post', component : PostComponent}, 
    {path : '/', name : 'Home', component : HouseComponent, useAsDefault: true}, 
    {path : '/*other', name : 'Other', redirectTo : ['Home']},
    { path: '/not-found', name: 'NotFound', component: NotFoundComponent }

    ])
    

@Component({
    selector: 'my-app',
    template: ` 
                    <navbar> </navbar>
                    
                    <div class="container">
                           <router-outlet></router-outlet>
                     </div>
                `, 
    directives : [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
 }