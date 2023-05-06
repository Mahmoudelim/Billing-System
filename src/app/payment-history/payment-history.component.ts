import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { CrudServicesService } from '../crud-services.service';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})

export class PaymentHistoryComponent implements OnInit {
  userData: Observable<firebase.User | null> | undefined;
  paymentHistory: any[] | undefined;

  constructor(private auth: AuthenticationService, private crudService: CrudServicesService) {
    this.userData = this.auth.userData;
  }

  ngOnInit(): void {
    this.userData?.subscribe(user => {
      if (user) {
        const userEmail = user.email;
        if(userEmail){
        // Call the getElectricityPaymentByEmail method to get the user's electricity payment
        this.crudService.getAllPaymentsByEmail(userEmail).subscribe((payments) => {
          this.paymentHistory = payments;
          console.log(payments);
        });

        // Use the electricityPayment variable as needed
        }
      }
    });


  }
}

