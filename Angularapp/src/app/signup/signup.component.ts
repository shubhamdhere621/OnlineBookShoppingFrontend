import { Component } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, ValidatorFn, Validators,ValidationErrors, FormControl } from '@angular/forms';
import { repeat } from 'rxjs';
import { User, UserType } from '../models/models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
responseMsg:string = '';
signupForm: FormGroup;

constructor(private fb : FormBuilder){
  this.signupForm = fb.group(
    {
      firstName:fb.control('',[Validators.required]),
      lastName:fb.control('',[Validators.required]),
      email:fb.control('',[Validators.required,Validators.email]),
      password:fb.control('',[Validators.required]),
      confirmPassword:fb.control(''), 
      userType:fb.control('user'),
  },
  
  {
    Validators:[confirmPasswordValidator],

  }as AbstractControlOptions);
}

signup() {
  let user : User = {
    id : 0,
    firstName : this.signupForm.get('firstName')?.value,
    lastName : this.signupForm.get('lastName')?.value,
    email : this.signupForm.get('email')?.value,
    password : this.signupForm.get('password')?.value,
    userType: UserType.USER



  };
  console.log(user)
}

getFirstNameErrors(){
  if (this.FirstName.hasError('required')) return 'Please Enter FirstName!!!'
  return ' '
}

getLastNameErrors(){
  if (this.LastName.hasError('required')) return 'Please Enter LastName!!!'
  return ' '
}

getEmailErrors(){
  if (this.Email.hasError('required')) return 'Please Enter Email Id !!!'
  if (this.Email.hasError('email')) return 'Please Enter Valid Email Id!!!'
  return ' '
}



getPasswordErrors(){
  if (this.Password.hasError('required')) return 'Please Enter the Password !!!'
  
  return ' '
}
//getters 
get FirstName() : FormControl{
  return this.signupForm.get('firstName') as FormControl;
}

get LastName() : FormControl{
  return this.signupForm.get('lastName') as FormControl;
}

get Email() : FormControl{
  return this.signupForm.get('email') as FormControl;
}

get Password() : FormControl{
  return this.signupForm.get('password') as FormControl;
}

get ConfirmPassword() : FormControl{
  return this.signupForm.get('confirmPassword') as FormControl;
}


}



//validator for confirmPassword
export const confirmPasswordValidator: ValidatorFn = (
   control: AbstractControl
): ValidationErrors | null => {

  const pwd = control.get('password')?.value;
  const cnfmpwd=control.get('confirmPassword')?.value;
  if(pwd === cnfmpwd)
  {
    control.get('confirmPassword')?.setErrors(null);
    return null;
  }
  else{
    control.get('confirmPassword')?.setErrors({confirmPassword:true});
    return {confirmPassword:true};
  }
};



