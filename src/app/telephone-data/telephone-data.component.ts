import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { BillingService } from '../billing.service';
import { User } from '../user';
@Component({
  selector: 'app-telephone-data',
  templateUrl: './telephone-data.component.html',
  styleUrls: ['./telephone-data.component.css']
})
export class TelephoneDataComponent implements OnInit {
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
