import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { UnitCostService } from '../unit-cost.service';

@Component({
  selector: 'app-electristy-data',
  templateUrl: './electristy-data.component.html',
  styleUrls: ['./electristy-data.component.css']
})
export class ElectristyDataComponent implements OnInit {
  unitCost: number = 0;
  users: User[] = [];
  constructor(private userService: UserService, public billingService: BillingService,private unitCostService: UnitCostService) { }
  ngOnInit(): void {
   // get all users from the UserService
   this.userService.getUsers().subscribe(users => {
    this.users = users;
  });
  this.unitCost = this.unitCostService.electricityUnitCost;
  console.log(this.users);
  }
  onUnitCostChange(): void {
    // save the new value of the unit cost to the service
    this.unitCostService.electricityUnitCost = this.unitCost;
  }

}
