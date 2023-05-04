import { CrudServicesService } from './../crud-services.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BillingService } from '../billing.service';
import { User } from '../user';
import { UnitCostService } from '../unit-cost.service';
import { phonePayment } from '../Model/phonePayment';
@Component({
  selector: 'app-telephone-data',
  templateUrl: './telephone-data.component.html',
  styleUrls: ['./telephone-data.component.css']
})
export class TelephoneDataComponent implements OnInit {
  unitCost: number = 0;
  users: User[] = [];
  fineTaxPercentage = 1.5;
  constructor(private userService: UserService, public billingService: BillingService,private unitCostService: UnitCostService,private c: CrudServicesService) { }

  ngOnInit(): void {
    // get all users from the UserService
    this.c.getUsers().subscribe(users => {
      this.users = users;
    });
    this.unitCost = this.unitCostService.telephoneUnitCost;
    console.log(this.users);
  }

 onUnitCostChange(): void {
    // save the new value of the unit cost to the service
    this.unitCostService.telephoneUnitCost = this.unitCost;
  }
  calculateCosts(): void {
    // Loop through each user and calculate the cost
    for (const user of this.users) {
      const cost = this.billingService.calculateCost(this.unitCost, user.telephoneUnitsUsed);
      var date:Date=user.telephoneDeadline// check for pre or post
      var fineTax:number=0;
      if (user.PreOrpost) {
       date = new Date('1970-01-01T00:00:00Z');
      }
      else
      {
        date=user.telephoneDeadline;
        fineTax = this.getFineTax(user, cost, user.InternetCost);
      }

      // Save the electricity payment to the real-time database
      const payment = new phonePayment(user.email,date, cost,user.InternetCost ,fineTax,user.PreOrpost);
      this.c.getphonePaymentRef().push(payment);
    }
  }
  getFineTax(user: User, totalCost: number, internetCost: number): number {
    const today = new Date();
    const deadline =new Date (user.telephoneDeadline);
    const daysLate = Math.floor((today.getTime() - deadline.getTime()) / (1000 * 60 * 60 * 24));
    if (daysLate > 0) {
      const paymentAmount = (totalCost + internetCost);
      const fineTax = paymentAmount * (this.fineTaxPercentage / 100)*daysLate;
      return fineTax;
    } else {
      return 0;
    }
  }

}
