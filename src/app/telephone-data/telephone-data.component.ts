import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BillingService } from '../billing.service';
import { User } from '../user';
import { UnitCostService } from '../unit-cost.service';
@Component({
  selector: 'app-telephone-data',
  templateUrl: './telephone-data.component.html',
  styleUrls: ['./telephone-data.component.css']
})
export class TelephoneDataComponent implements OnInit {
  unitCost: number = 0;
  users: User[] = [];

  constructor(private userService: UserService, public billingService: BillingService,private unitCostService: UnitCostService) { }

  ngOnInit(): void {
    // get all users from the UserService
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
    this.unitCost = this.unitCostService.telephoneUnitCost;
    console.log(this.users);
  }

 onUnitCostChange(): void {
    // save the new value of the unit cost to the service
    this.unitCostService.telephoneUnitCost = this.unitCost;
  }

}
