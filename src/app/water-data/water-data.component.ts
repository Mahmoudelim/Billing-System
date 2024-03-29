import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BillingService } from '../billing.service';
import { User } from '../user';
import { UnitCostService } from '../unit-cost.service';
import { WaterPayment } from '../Model/WaterPayment';
import { CrudServicesService } from '../crud-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-water-data',
  templateUrl: './water-data.component.html',
  styleUrls: ['./water-data.component.css']
})
export class WaterDataComponent implements OnInit {
  searchText:any;
  unitCost: number = 0;
  users: User[] = [];
  fineTaxPercentage:number=2;
  constructor(private userService: UserService, public billingService: BillingService,private unitCostService: UnitCostService,private CrudServices:CrudServicesService) { }

  ngOnInit(): void {
    // get all users from the UserService
    this.CrudServices.getUsers().subscribe(users => {
      this.users = users;
    });
    this.unitCost = this.unitCostService.waterUnitCost;
    console.log(this.users);
  }

  onUnitCostChange(): void {
    // save the new value of the unit cost to the service
    this.unitCostService.waterUnitCost = this.unitCost;
  }
  calculateCosts(): void {
    // Loop through each user and calculate the cost

    for (const user of this.users) {
      const cost = this.billingService.calculateCost(this.unitCost, user.waterUnitsUsed);
      const fineTax= this.getFineTax(user,cost)

      // Save the electricity payment to the real-time database
      const payment = new WaterPayment(user.email,user.waterDeadline, cost, fineTax);
      this.CrudServices.updateWaterPaymentByEmail(user.email,payment);
      alert('Saved successfully!');

    }
  }

  getFineTax(user: User, totalCost: number): number {
    const today = new Date();
    const deadline =new Date (user.waterDeadline);
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
