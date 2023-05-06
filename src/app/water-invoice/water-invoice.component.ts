import { WaterPayment } from './../Model/WaterPayment';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BillingService } from '../billing.service';
import { User } from '../user';
import { UnitCostService } from '../unit-cost.service';
import { Router } from '@angular/router';
import { CrudServicesService } from '../crud-services.service';
import { AuthenticationService } from '../authentication.service';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-water-invoice',
  templateUrl:'./water-invoice.component.html',
  styleUrls: ['./water-invoice.component.css']
})
export class WaterInvoiceComponent implements OnInit{



  unitused:number=0;
  userData: Observable<firebase.User | null> | undefined;
  deadline: Date = new Date();
  cost:number=0;
  fineTax:number=0;

  constructor(private userService: UserService, public billingService: BillingService,
    private unitCostService: UnitCostService,private router: Router,private crud:CrudServicesService,
    private auth:AuthenticationService) {
      this.userData=this.auth.userData
    }

  ngOnInit(): void {
    // Get the user's email address from the userData observable
    this.userData?.subscribe(user => {
      if (user) {
        const userEmail = user.email;
        if(userEmail){
        // Call the getElectricityPaymentByEmail method to get the user's electricity payment
        this.crud.getWaterPaymentByEmail(userEmail).subscribe((WaterPayment: WaterPayment[]): void => {
          if (WaterPayment.length > 0) {
            const waterPayment = WaterPayment[0];

            console.log(waterPayment.Cost); // access the Cost property
            this.cost=waterPayment.Cost;
            console.log(waterPayment.Deadline); // access the Deadline property
            this.deadline=waterPayment.Deadline;
            this.fineTax=waterPayment.fineTax;
          } else {
            console.log('No waterPayment  found for this user.');
          }

        });

        // Use the electricityPayment variable as needed
        }
      }
    });
  }


  goToPayment() {
    //const dialogRef = this._dialog.open();
    this.router.navigate(['/WaterPay'], { queryParams: { cost: this.cost ,type:'Water Payment'} });

  }

}
