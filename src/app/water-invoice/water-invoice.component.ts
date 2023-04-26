import { Component } from '@angular/core';

@Component({
  selector: 'app-water-invoice',
  templateUrl: './water-invoice.component.html',
  styleUrls: ['./water-invoice.component.css']
})
export class WaterInvoiceComponent {
  data: any[] = [
    { month: 'jan', cost:50},
    { month: 'fab', cost: 250},
    { month: 'march', cost: 60 }
  ];

  ngOnInit(): void {
  }
}
