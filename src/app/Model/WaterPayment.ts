export class WaterPayment{
  UserEmail:string;
  Deadline :Date;
  Cost : number;
  fineTax:number;
constructor(
  UserEmail:string,
  Deadline :Date,
  Cost : number,
  fineTax:number ){
    this.UserEmail=UserEmail;
    this.Deadline=Deadline;
    this.Cost=Cost;
    this.fineTax=fineTax;
  }
}
