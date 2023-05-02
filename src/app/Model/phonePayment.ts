export class phonePayment{
  UserEmail:string;
  Deadline :Date;
  CostOfUnits : number;
  CostOfInternet:number;
  fineTax:number;
  preOrPost:boolean;
constructor(
  UserEmail:string,
  Deadline :Date,
  CostOfUnits : number,
  CostOfInternet:number,
  fineTax:number,
  preOrPost:boolean){
    this.Deadline=Deadline;
    this.CostOfUnits=CostOfUnits;
    this.CostOfInternet=CostOfInternet;
    this.fineTax=fineTax;
    this.UserEmail=UserEmail;
    this.preOrPost=preOrPost;
  }
}
