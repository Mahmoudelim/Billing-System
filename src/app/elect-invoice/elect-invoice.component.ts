import { Component } from '@angular/core';

@Component({
  selector: 'app-elect-invoice',
  templateUrl: './elect-invoice.component.html',
  styleUrls: ['./elect-invoice.component.css']
})
export class ElectInvoiceComponent {
  data: any[] = [
    { month: 'jan', cost:50},
    { month: 'fab', cost: 250},
    { month: 'march', cost: 60 }
  ];

  ngOnInit(): void {
  }
}
