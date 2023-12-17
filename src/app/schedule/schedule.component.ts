import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RouterOutlet,RouterLink,ReactiveFormsModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  title = 'phase-1-project-alen';
  scheduleForm!: FormGroup
  submitted=false;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    //validations
    this.scheduleForm =this.formBuilder.group({
      meetingTopic:['',[Validators.required,Validators.minLength(4)]],
      count: ['',[Validators.required,Validators.max(100)]]
    })
  }

  onSubmit(){
    this.submitted = true

    if(this.scheduleForm.invalid) {
      return
    }
    alert("Client has been Registered!!!")
    //after successfull submission
    this.scheduleForm.reset(this.submitted=false);
  }
}
