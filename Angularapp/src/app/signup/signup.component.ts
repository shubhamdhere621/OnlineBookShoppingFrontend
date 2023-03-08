import { Component } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, ValidatorFn, Validators,ValidationErrors } from '@angular/forms';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
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
      userType:fb.control('customer'),
  },
  
  {
    Validators:[confirmPasswordValidator],

  }as AbstractControlOptions);
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
