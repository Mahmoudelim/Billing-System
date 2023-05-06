import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { CrudServicesService } from '../crud-services.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { PaymentHistory } from '../Model/paymentHistory';
import { WaterPayment } from '../Model/WaterPayment';
import { ElectricitPayment } from '../Model/ElectricitPayment';
import { phonePayment } from '../Model/phonePayment';

@Component({
  selector: 'app-water-payment',
  templateUrl: './water-payment.component.html',
  styleUrls: ['./water-payment.component.css']
})
export class WaterPaymentComponent implements OnInit {
  userData: Observable<firebase.User | null> | undefined;
  user: User | undefined;
  email:string='';
  credit:string='';
  cvv:string='';
  cost:number=0;
  exdate:string=''
  type:string=''
  fine:number=0;
  totalCost:number=0;
constructor(public auth:AuthenticationService,private c:CrudServicesService,public route:ActivatedRoute){
  this.userData=this.auth.userData
}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cost =  params['cost'];
      this.type= params['type'];
      this.fine=params['fine'];
      this.totalCost=this.cost+this.fine;
    });
    this.userData?.subscribe(user => {
      if (user) {
        const userEmail = user.email;
        if(userEmail){
  this.c.getUserByEmail(userEmail).subscribe((user: User) => {

    this.email = user.email;
    this.credit = user.creditCardNumber;
    this.cvv = user.cvv;
    this.exdate = user.expirationDate;
  });
}
}
});

}
pay(){
  const currentDate = new Date();

const currentDateStr = currentDate.toISOString();

  console.log(currentDate)
  const payment=new PaymentHistory(this.email,this.cost,currentDateStr,'completed',this.type)
  this.c.getPaymentRef().push(payment);

  if(this.type=='Water Payment')
  {
    const waterPayment=new WaterPayment(this.email,new Date(0/0/0),0,0);
    this.c.updateWaterPaymentByEmail(this.email,waterPayment);

  }
   else if (this.type=='Electricty Payment') {
    const electricity=new ElectricitPayment(this.email,new Date(0/0/0),0,0);

    this.c.updateElectricityPaymentByEmail(this.email,electricity)

   }
   else if (this.type=='phone Payment') {
    const phone=new phonePayment(this.email,new Date(0/0/0),0,0,0,false);

    this.c.updatePhonePayment(this.email,phone)

   }
   alert('Paid successfully!');
}
}


