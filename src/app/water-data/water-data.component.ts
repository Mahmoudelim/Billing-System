import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BillingService } from '../billing.service';
import { User } from '../user';
import { UnitCostService } from '../unit-cost.service';
@Component({
  selector: 'app-water-data',
  templateUrl: './water-data.component.html',
  styleUrls: ['./water-data.component.css']
})
export class WaterDataComponent implements OnInit {

  unitCost: number = 0;
  users: User[] = [];

  constructor(private userService: UserService, public billingService: BillingService,private unitCostService: UnitCostService) { }

  ngOnInit(): void {
    // get all users from the UserService
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
    this.unitCost = this.unitCostService.waterUnitCost;
    console.log(this.users);
  }

  onUnitCostChange(): void {
    // save the new value of the unit cost to the service
    this.unitCostService.waterUnitCost = this.unitCost;
  }

}
