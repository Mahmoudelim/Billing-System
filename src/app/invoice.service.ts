import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { item } from './Model/item';
import { UserService } from './user.service';
import { user } from '@angular/fire/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { invoice } from './Model/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  user  :any=null;
  userData: Observable<firebase.User | null> | undefined;
  public itemsRef: AngularFireList<invoice>;
  submitted=false;
   
  constructor(
    private auth: AngularFireAuth,
    private db: AngularFireDatabase,
    private userService:UserService
    
  ) {
    this.itemsRef = this.db.list<invoice>('invoices');

  }


  
  addItem(item: invoice): void {
    item.id = this.db.createPushId(); // generate a unique ID
     
    this.itemsRef.push(item);
    alert("success");

  }
}

