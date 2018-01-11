import { UserService } from './user.service';
import { Component } from 'angular2/core';
@Component({ 
    selector : 'user', 
    template : `
    
                <h1> User </h1>

            
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
                        <td> <a href="#" class="glyphicon glyphicon-edit"></a></td>
                        <td><a href="#" class="glyphicon glyphicon-trash"></a></td>
                    </tr>
                    </tbody>
                </table>

                `, 
                providers : [UserService]
})
export class UserComponent {

    users = []; 
    constructor(userService : UserService){
        userService.getUsers().subscribe(d => this.users = d);
    }
}