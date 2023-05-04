import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-invoice',
  templateUrl: './phone-invoice.component.html',
  styleUrls: ['./phone-invoice.component.css']
})
export class PhoneInvoiceComponent {
  constructor(private router: Router,  private db: AngularFireDatabase) 
  {}
  activeTab: string = 'prepaid';
  prepaidItems: any[]=[];
  postpaidItems: any[]=[];
 
  goToPayment() {
    this.router.navigate(['/pay']);

  }
  ngOnInit() {
    this.db
      .list('/items', (ref) =>
        ref.orderByChild('status').equalTo(this.activeTab)
      )
      .valueChanges()
      .subscribe((items) => {
        if (this.activeTab === 'prepaid') {
          this.prepaidItems = items;
        } else {
          this.postpaidItems = items;
        }
      });
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.db
      .list('/items', (ref) => ref.orderByChild('status').equalTo(tab))
      .valueChanges()
      .subscribe((items) => {
        if (tab === 'prepaid') {
          this.prepaidItems = items;
        } else {
          this.postpaidItems = items;
        }
      });
  }
}
