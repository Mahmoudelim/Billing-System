import { CrudServicesService } from './../crud-services.service';
import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { UnitCostService } from '../unit-cost.service';
import { ElectricitPayment } from '../Model/ElectricitPayment';
@Component({
  selector: 'app-electristy-data',
  templateUrl: './electristy-data.component.html',
  styleUrls: ['./electristy-data.component.css']
})
export class ElectristyDataComponent implements OnInit {
  unitCost: number = 0;
  users: User[] = [];
  searchText:any;
  fineTaxPercentage:number=7;
  constructor(private userService: UserService, public billingService: BillingService,private unitCostService: UnitCostService,private CrudServices:CrudServicesService) { }
  ngOnInit(): void {
   // get all users from the UserService
   this.CrudServices.getUsers().subscribe(users => {
    this.users = users;
  });
  this.unitCost = this.unitCostService.electricityUnitCost;
  console.log(this.users);
  }
  onUnitCostChange(): void {
    // save the new value of the unit cost to the service
    this.unitCostService.electricityUnitCost = this.unitCost;

  }
  calculateCosts(): void {
    // Loop through each user and calculate the cost
    for (const user of this.users) {
      const cost = this.billingService.calculateCost(this.unitCost, user.electricityUnitsUsed);
      const fineTax= this.getFineTax(user,cost);
      // Save the electricity payment to the real-time database
      const payment = new ElectricitPayment(user.email,user.electricityDeadline, cost, fineTax);
      this.CrudServices.updateElectricityPaymentByEmail(user.email,payment);

      alert('Saved successfully!');
    }
  }
  getFineTax(user: User, totalCost: number): number {
    const today = new Date();
    const deadline =new Date (user.electricityDeadline);
    const daysLate = Math.floor((today.getTime() - deadline.getTime()) / (1000 * 60 * 60 * 24));
    if (daysLate > 0) {
      const paymentAmount = totalCost;
      const fineTax = paymentAmount * (this.fineTaxPercentage / 100)*daysLate;
      return fineTax;
    } else {
      return 0;
    }

  }



}
