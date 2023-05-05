import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { item } from '../Model/item';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import {  ActivatedRoute } from '@angular/router';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-phone-invoice',
  templateUrl: './phone-invoice.component.html',
  styleUrls: ['./phone-invoice.component.css']
})
export class PhoneInvoiceComponent {
  userData: Observable<firebase.User | null> | undefined;
  ispaidin=false;

  constructor(private router: Router,  private db: AngularFireDatabase,public auth:AuthenticationService,public popupService:PopupService) 
  {
    this.userData=this.auth.userData

  }
  private db2 = firebase.database();

  private invoicesRef = this.db2.ref('invoices');

  activeTab: string = 'prepaid';
  prepaidItems: any[]=[];
  postpaidItems: any[]=[];
 ///////
 items: item[] = [
];

showPopup = false;
selectedItem!: item ;
dataFromFirebase: any;
  //////
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
  openPopup(item: item) {
    this.selectedItem = item;
    this.showPopup = true;
    this.popupService.show();
    this.db
      .object(`items/${item.title}`)
      .valueChanges()
      .subscribe(data => {
        this.dataFromFirebase = data;
      });
  }

  closePopup() {
    this.showPopup = false;
    this.popupService.hide();
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
  
  selectItem(item: any) {
    const user = firebase.auth().currentUser;
    const email = user?.email;
  
    const query = this.invoicesRef.orderByChild('title').equalTo(item.title);
  
    query.once('value').then(dataSnapshot => {
      let ispaidin = false;
      dataSnapshot.forEach(childSnapshot => {
        const invoice = childSnapshot.val();
        if (invoice.email === email) {
          ispaidin = true;
        }
      });
  
      if (ispaidin) {
        alert("you have already paid for this item");
      } else {
        this.router.navigate(['/payment'], { queryParams: { item: JSON.stringify(item), email: email } });
      }
    }).catch(error => {
      console.error('Error getting invoices:', error);
    });
  }
  showAlert(s:string) {
    window.alert(s);
  }
}
