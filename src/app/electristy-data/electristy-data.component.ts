import { Component, OnInit } from '@angular/core';
import { BillingService } from '../billing.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-electristy-data',
  templateUrl: './electristy-data.component.html',
  styleUrls: ['./electristy-data.component.css']
})
export class ElectristyDataComponent implements OnInit {
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
