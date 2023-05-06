import { phonePayment } from './../Model/phonePayment';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ElectricitPayment } from '../Model/ElectricitPayment';
import { AuthenticationService } from '../authentication.service';
import { CrudServicesService } from '../crud-services.service';
import { UnitCostService } from '../unit-cost.service';
import { UserService } from '../user.service';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-phone-post',
  templateUrl: './phone-post.component.html',
  styleUrls: ['./phone-post.component.css']
})
export class PhonePostComponent {
  unitused:number=0;
  userData: Observable<firebase.User | null> | undefined;
 // electricityPayment: any = {};
  deadline: Date = new Date();
  cost:number=0;
  InternetCost:number=0;
  fineTx:number=0;
  constructor(private userService: UserService,private unitCostService: UnitCostService
    ,private router: Router,private crud:CrudServicesService,private auth:AuthenticationService) {
      this.userData=this.auth.userData;
     }
     ngOnInit(): void {
      // Get the user's email address from the userData observable
      this.userData?.subscribe(user => {
        if (user) {
          const userEmail = user.email;
          if(userEmail){
          // Call the getElectricityPaymentByEmail method to get the user's electricity payment
          this.crud.getPhoenbyEmail(userEmail).subscribe((phone: phonePayment[]) => {
            if (phone.length > 0) {
              const electricityPayment = phone[0];
              console.log(electricityPayment.CostOfUnits); // access the Cost property
              this.cost=electricityPayment.CostOfUnits;
              this.InternetCost=electricityPayment.CostOfInternet;
              console.log(electricityPayment.Deadline); // access the Deadline property
              this.deadline=electricityPayment.Deadline;
              this.fineTx=electricityPayment.fineTax;
            } else {
              console.log('No electricity payments found for this user.');
            }

          });

          // Use the electricityPayment variable as needed
          }
        }
      });
    }


    goToPayment() {

      this.router.navigate(['/WaterPay'], { queryParams: { cost: this.cost,type:'phone Payment'} });

    }



}
