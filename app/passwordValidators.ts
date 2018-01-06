import {Control, ControlGroup} from 'angular2/common';

export class PasswordValidators {

    static complexPassword(control: Control){
        const minLength = 5;
        
        // We bypass this validation rule if the field is empty, assuming
        // it is valid. At this point, the required validator will kick in
        // and asks the user to type a value. With this technique, we'll 
        // display only a single validation message at a time, rather than:
        // 
        // * This field is required.
        // * Password doesn't match complexity rules.
        //
        if (control.value == '')
            return null; 
     
        if (control.value.length < minLength)
            // Note that I'm returning an object, instead of:
            // 
            // return { complexPassword: true }
            //
            // This will give the client additional data about the 
            // validation and why it failed. 
            return { 
                complexPassword: {
                    minLength: minLength
                } 
            };
            
        return null;
    }
    
    static passwordsShouldMatch(group: ControlGroup){
        var newPassword = group.find('newPassword').value;
        var confirmPassword = group.find('confirmPassword').value;
        
        // If either of these fields is empty, the validation 
        // will be bypassed. We expect the required validator to be 
        // applied first. 
        if (newPassword == '' || confirmPassword == '')
            return null;
        
        if (newPassword != confirmPassword)
            return { passwordsShouldMatch: true };
            
        return null;
    }
}