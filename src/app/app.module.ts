import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule,Router, provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { NoSuchComponent } from './no-such/no-such.component';


@NgModule({
    declarations: [
      AppComponent,
      RegisterComponent,
      ScheduleComponent,
      NoSuchComponent,
      HomeComponent
    ],
    imports: [FormsModule,BrowserModule,HttpClientModule, HomeComponent,RegisterComponent,ScheduleComponent,ReactiveFormsModule, RouterModule.forRoot(routes) ],
    exports:[RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
