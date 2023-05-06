import { Component, OnInit } from '@angular/core';
import {  EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { CrudServicesService } from '../crud-services.service';
import { User } from '../user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isPosted:boolean=true;
  userData: Observable<firebase.User | null> | undefined;
  @Output() islogeout =new EventEmitter<void>()
  issignedin=true;
constructor(public Auth:AuthenticationService,private crud:CrudServicesService){
  this.userData=this.Auth.userData;
}
  ngOnInit(): void {
    this.userData?.subscribe(user => {
      if (user) {
        const userEmail = user.email;
        if(userEmail){
        // Call the getElectricityPaymentByEmail method to get the user's electricity payment
         this.crud.getUserByEmail(userEmail).subscribe((user: User) => {
          if (user) {
            this.isPosted = user.PreOrpost;
            // Use the attribute value as needed

          }
        });

        // Use the electricityPayment variable as needed
        }
      }
    });
  }
  logout()
  {
    this.Auth.logout();
    this.islogeout.emit();
  }
  handlelogout(){
    this.issignedin=false;
  }
}
