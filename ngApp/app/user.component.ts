import { UserService } from './user.service';
import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/src/router/router_link';
@Component({ 
    selector : 'user', 
    template : `
    
                <h1> User </h1>

                <p>
                    <a [routerLink]="['NewUser']" class="btn btn-primary">Add User</a>
                </p>
                <table class="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr *ngFor="#u of users">
                        <td>{{u.name}}</td>
                        <td>{{u.email}}</td>
                        <td><a [routerLink]="['EditUser', { id: u.id }]"><i class="glyphicon glyphicon-edit"></i> </a></td>
                        <td><a href="#" class="glyphicon glyphicon-trash"></a></td>
                    </tr>
                    </tbody>
                </table>

                `, 
                providers : [UserService], 
                directives : [RouterLink]
})
export class UserComponent {

    users = []; 
    constructor(userService : UserService){
        userService.getUsers().subscribe(d => this.users = d);
    }
}