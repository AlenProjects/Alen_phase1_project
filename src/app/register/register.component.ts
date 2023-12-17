import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RouterOutlet,RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title = 'phase-1-project-alen';
  registerForm!: FormGroup
  submitted=false;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    //validations
    this.registerForm =this.formBuilder.group({
      clientName:['',Validators.required],
      clientEmail:['',[Validators.required, Validators.email]],
      address:['',Validators.required],
      password:['',[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      repeatPassword:['',[Validators.required]]
    },
    {
      validators: this.mustMatch('password','repeatPassword')
    })
  }
  get f() {return this.registerForm.controls}

  mustMatch(controlName: string, matchingControlName: string) {
    return(formGroup:FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors['mustMatch']){
        return
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({mustMatch:true})
      }
      else{
        matchingControl.setErrors(null);
      }
    }
  }

  onSubmit(){
    this.submitted = true

    if(this.registerForm.invalid) {
      return
    }
    alert("Client has been Registered!!!")
    //after successfull submission
    this.registerForm.reset(this.submitted=false);
  }
}
