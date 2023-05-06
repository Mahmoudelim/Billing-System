export class PaymentHistory{
  UserEmail:String;
  TotalAmount:number;
  createdDate:string;
  paymentStatus:string;
  paymentType:string;
  constructor(
    UserEmail:string,TotalAmount:number,createdDate:string,paymentStatus:string,paymentType:string
  ){
    this.UserEmail=UserEmail;
    this.TotalAmount=TotalAmount;
    this.createdDate=createdDate;
    this.paymentStatus=paymentStatus;
    this.paymentType=paymentType;
  }
}
