import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-invoice',
  templateUrl: './phone-invoice.component.html',
  styleUrls: ['./phone-invoice.component.css']
})
export class PhoneInvoiceComponent {
  constructor(private router: Router){}
  goToPayment() {
    this.router.navigate(['/pay']);

  }
}
