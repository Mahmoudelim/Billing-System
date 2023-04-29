import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { BillingService } from '../billing.service';
import { User } from '../user';
import { UnitCostService } from '../unit-cost.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-water-invoice',
  templateUrl:'./water-invoice.component.html',
  styleUrls: ['./water-invoice.component.css']
})
export class WaterInvoiceComponent {
  data: any[] = [
    { month: 'jan', cost:50},
    { month: 'fab', cost: 250},
    { month: 'march', cost: 60 }
  ];

  users: User[] = [];
  unitused:number=0;

  constructor(private userService: UserService, public billingService: BillingService,private unitCostService: UnitCostService,private router: Router) { }

  ngOnInit(): void {
   
  }

  
  goToPayment() {
    //const dialogRef = this._dialog.open();
    this.router.navigate(['/pay']);

  }

}
