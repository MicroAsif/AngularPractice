import { BasicValidators } from './basicvalidator';
import { Component } from 'angular2/core';
import { FormBuilder, ControlGroup, Validators } from 'angular2/common';


@Component({
    selector : 'new-user', 
    templateUrl : 'app/newuser.component.html'
})
export class NewUserComponent { 
    form: ControlGroup;
    constructor(fb: FormBuilder) {
		this.form = fb.group({
			name: ['', Validators.required],
			email: ['', BasicValidators.email],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		});
    }
}