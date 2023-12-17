export class Client {
  clientName: string = "";
  clientEmail: string = "";
  ClientAddress: string = "";

  constructor(name:string,email:string,address:string){
    this.clientName = name;
    this.clientEmail = email;
    this.ClientAddress = address;
  }
}
