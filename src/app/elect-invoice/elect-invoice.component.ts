import { User } from './../user';
import { AuthenticationService } from 'src/app/authentication.service';
import { CrudServicesService } from './../crud-services.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import firebase from 'firebase/compat/app';
import { UnitCostService } from '../unit-cost.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ElectricitPayment } from '../Model/ElectricitPayment';
@Component({
  selector: 'app-elect-invoice',
  templateUrl: './elect-invoice.component.html',
  styleUrls: ['./elect-invoice.component.css']
})
export class ElectInvoiceComponent implements OnInit{
  data: any[] = [
    { month: 'jan', cost:50},
    { month: 'fab', cost: 250},
    { month: 'march', cost: 60 }
  ];
  users: User[] = [];
  unitused:number=0;
  userData: Observable<firebase.User | null> | undefined;
  electricityPayment: any = {};
  deadline: Date = new Date();
  cost:number=0;
  constructor(private userService: UserService,private unitCostService: UnitCostService
    ,private router: Router,private crud:CrudServicesService,private auth:AuthenticationService) {
      this.userData=this.auth.userData
     }
     ngOnInit(): void {
      // Get the user's email address from the userData observable
      this.userData?.subscribe(user => {
        if (user) {
          const userEmail = user.email;
          if(userEmail){
          // Call the getElectricityPaymentByEmail method to get the user's electricity payment
          this.crud.getElectricityPaymentByEmail(userEmail).subscribe((electricityPayments: ElectricitPayment[]) => {
            if (electricityPayments.length > 0) {
              const electricityPayment = electricityPayments[0];
              console.log(electricityPayment.Cost); // access the Cost property
              this.cost=electricityPayment.Cost;
              console.log(electricityPayment.Deadline); // access the Deadline property
              this.deadline=electricityPayment.Deadline;
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
    //const dialogRef = this._dialog.open();
    this.router.navigate(['/pay']);

  }



}
