import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../model/client';
import { error } from 'console';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RegisterComponent,RouterOutlet,RouterLink,ReactiveFormsModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})

export class ClientListComponent{

}
