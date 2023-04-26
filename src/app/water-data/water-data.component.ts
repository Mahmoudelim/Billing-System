import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BillingService } from '../billing.service';
import { User } from '../user';
@Component({
  selector: 'app-water-data',
  templateUrl: './water-data.component.html',
  styleUrls: ['./water-data.component.css']
})
export class WaterDataComponent implements OnInit {

  unitCost: number = 0;
  users: User[] = [];

  constructor(private userService: UserService, public billingService: BillingService) { }

  ngOnInit(): void {
    // get all users from the UserService
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
