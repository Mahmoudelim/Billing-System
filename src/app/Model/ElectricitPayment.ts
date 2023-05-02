import { User } from "../user";
export class ElectricitPayment{
  UserEmail:string;
  Deadline :Date;
  Cost : number;
  fineTax:number;
constructor(
  UserEmail:string,
  Deadline :Date,
  Cost : number,
  fineTax:number ){
    this.Deadline=Deadline;
    this.Cost=Cost;
    this.fineTax=fineTax;
    this.UserEmail=UserEmail;
  }
}
