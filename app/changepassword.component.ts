import { Component } from "angular2/core";
import {ControlGroup} from 'angular2/common';

@Component({
    selector: 'change-pass',
    templateUrl: 'app/changepassword.component.html'
})
export class ChangePasswordComponent{
    onPassword(){
        var current = this.form.find('current');
        if (current.value != '1234') 
            current.setErrors({ validCurrent: true });

        if (this.form.valid)
            alert("Password successfully changed.");
    }
    }
} 