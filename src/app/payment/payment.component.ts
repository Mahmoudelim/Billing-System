import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentDetails: any;

  constructor(private db: AngularFireDatabase) {
    // Retrieve payment details from Firebase
    this.db.object('payments/payment1').valueChanges().subscribe((data) => {
      this.paymentDetails = data;
    });
  }
}
