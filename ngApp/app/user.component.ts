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
                        <td> <i (click)="deleteUser(u)" class="glyphicon glyphicon-remove clickable"></i></td>
                    </tr>
                    </tbody>
                </table>

                `, 
                providers : [UserService], 
                directives : [RouterLink]
})
export class UserComponent {

    users = []; 
    constructor(private userService : UserService){
        userService.getUsers().subscribe(d => this.users = d);
    }

    
    deleteUser(user){
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.users.indexOf(user)
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

			this.userService.deleteUser(user.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the user.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
						this.users.splice(index, 0, user);
					});
		}
	}
}