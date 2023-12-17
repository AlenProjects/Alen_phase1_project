import { Injectable } from '@angular/core';
import { Client } from './model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients!: Client[];

  constructor() {
    this.clients = [
      new Client("Alen","alen123@gmail.com","Bangalore"),
      new Client("Alok","alok321@gmail.com","Delhi"),
      new Client("Abhishek","ab998765@gmail.com","Hyderabad"),
    ]
  }
}
